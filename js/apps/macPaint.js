/**
 * MacPaint Application Replica (1-bit Canvas Drawing)
 */
export const MacPaint = {
    render() {
        return `
            <div style="display: flex; gap: 8px;">
                <div style="display: flex; flex-direction: column; gap: 4px; border-right: 1px solid #000; padding-right: 6px;">
                    <button class="calc-btn" id="paint-tool-pencil" style="background:#000; color:#fff;">✏️</button>
                    <button class="calc-btn" id="paint-tool-eraser">🧽</button>
                    <button class="calc-btn" id="paint-clear">Clear</button>
                </div>
                <canvas id="macpaint-canvas" width="300" height="200" style="border: 1px solid #000; background: #fff; cursor: crosshair;"></canvas>
            </div>
        `;
    },

    init() {
        const canvas = document.getElementById('macpaint-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let painting = false;
        let tool = 'pencil';

        // Estilos Iniciais
        ctx.lineWidth = 2;
        ctx.lineCap = 'square';
        ctx.strokeStyle = '#000000';

        // Lógica de Ferramentas
        document.getElementById('paint-tool-pencil').onclick = () => {
            tool = 'pencil';
            document.getElementById('paint-tool-pencil').style.background = '#000'; document.getElementById('paint-tool-pencil').style.color = '#fff';
            document.getElementById('paint-tool-eraser').style.background = '#fff'; document.getElementById('paint-tool-eraser').style.color = '#000';
        };

        document.getElementById('paint-tool-eraser').onclick = () => {
            tool = 'eraser';
            document.getElementById('paint-tool-eraser').style.background = '#000'; document.getElementById('paint-tool-eraser').style.color = '#fff';
            document.getElementById('paint-tool-pencil').style.background = '#fff'; document.getElementById('paint-tool-pencil').style.color = '#000';
        };

        document.getElementById('paint-clear').onclick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        // Eventos do Mouse
        canvas.onmousedown = (e) => { painting = true; draw(e); };
        canvas.onmouseup = () => { painting = false; ctx.beginPath(); };
        canvas.onmousemove = draw;

        function draw(e) {
            if (!painting) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (tool === 'pencil') {
                ctx.strokeStyle = '#000000';
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            } else {
                // Borracha clássica limpa em blocos quadrados
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(x - 8, y - 8, 16, 16);
            }
        }
    }
};
