import { MacPaint } from './apps/macPaint.js';
import { MacWrite } from './apps/macWrite.js';

class AdvancedWindowManager {
    constructor() {
        this.activeWindow = null;
        this.topZIndex = 100;
    }

    createWindow(title, type, manualContent = '') {
        const winId = `win-${title.replace(/\s+/g, '')}`;
        if (document.getElementById(winId)) {
            this.focusWindow(document.getElementById(winId));
            return;
        }

        this.topZIndex++;
        const win = document.createElement('div');
        win.id = winId;
        win.className = 'mac-window';
        win.style.left = `${50 + (this.topZIndex % 10) * 15}px`;
        win.style.top = `${70 + (this.topZIndex % 10) * 15}px`;
        win.style.zIndex = this.topZIndex;

        let contentHTML = '';
        if (type === 'app' && title === 'MacPaint') contentHTML = MacPaint.render();
        else if (type === 'app' && title === 'MacWrite') contentHTML = MacWrite.render();
        else contentHTML = manualContent.replace(/\n/g, '<br>');

        win.innerHTML = `
            <div class="window-titlebar" style="height: 18px; background: #fff; border-bottom: 1px solid #000; display: flex; align-items: center; justify-content: center; position: relative; cursor: move; background-image: linear-gradient(#000 1px, transparent 1px); background-size: 100% 3px; padding:0 20px;">
                <div class="close-box" style="position: absolute; left: 6px; top: 3px; width: 11px; height: 11px; border: 1px solid #000; background: #fff; cursor: pointer;" onclick="this.parentElement.parentElement.remove()"></div>
                <div class="window-title" style="background: #fff; padding: 0 6px; font-weight: bold;">${title}</div>
            </div>
            <div class="window-content" style="padding: 10px; flex-grow: 1; overflow: auto; background: #fff;">${contentHTML}</div>
        `;

        win.addEventListener('mousedown', () => this.focusWindow(win));
        document.body.appendChild(win);
        this.activeWindow = win;

        // Inicializa listeners específicos do ciclo de vida dos Apps gráficos após injeção no DOM
        if (title === 'MacPaint') MacPaint.init();
        if (title === 'MacWrite') MacWrite.init();
    }

    focusWindow(win) {
        if (this.activeWindow !== win) {
            this.topZIndex++;
            win.style.zIndex = this.topZIndex;
            this.activeWindow = win;
        }
    }

    setupDraggable(win) {
        const titlebar = win.querySelector('.window-titlebar');
        titlebar.onmousedown = (event) => {
            event.preventDefault();
            this.focusWindow(win);
            let startX = event.clientX;
            let startY = event.clientY;
            let origX = win.offsetLeft;
            let origY = win.offsetTop;

            const doDrag = (e) => {
                win.style.left = (origX + e.clientX - startX) + 'px';
                win.style.top = (origY + e.clientY - startY) + 'px';
            };

            const stopDrag = () => {
                document.removeEventListener('mousemove', doDrag);
                document.removeEventListener('mouseup', stopDrag);
            };

            document.addEventListener('mousemove', doDrag);
            document.addEventListener('mouseup', stopDrag);
        };
    }
}

export const WindowManager = new AdvancedWindowManager();
