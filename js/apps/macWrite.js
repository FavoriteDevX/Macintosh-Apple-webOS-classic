/**
 * MacWrite Application Replica (Text Editor with LocalStorage Persistence)
 */
export const MacWrite = {
    render() {
        const savedText = localStorage.getItem('macwrite_doc') || 'Welcome to MacWrite. Type your story here...';
        return `
            <div style="display: flex; flex-direction: column; height: 100%; gap: 6px;">
                <div style="display: flex; gap: 10px; border-bottom: 1px dashed #000; padding-bottom: 4px;">
                    <button class="calc-btn" id="write-save">Save Doc</button>
                    <button class="calc-btn" id="write-clear">New</button>
                </div>
                <textarea id="macwrite-textarea" style="width: 100%; height: 140px; border: 1px solid #000; font-family: 'Courier Prime', monospace; resize: none; outline: none; padding: 4px;">${savedText}</textarea>
            </div>
        `;
    },

    init() {
        const textarea = document.getElementById('macwrite-textarea');
        const saveBtn = document.getElementById('write-save');
        const clearBtn = document.getElementById('write-clear');

        if (!textarea) return;

        saveBtn.onclick = () => {
            localStorage.setItem('macwrite_doc', textarea.value);
            alert('Document Saved inside Virtual ROM.');
        };

        clearBtn.onclick = () => {
            textarea.value = '';
            localStorage.removeItem('macwrite_doc');
        };
    }
};
