# Macintosh 1984 System 1 Replica 

A high-fidelity, high-performance, and modular browser-based simulation of Apple's iconic **1984 Macintosh System 1 (Finder 1.0)**. Built using modern, vanilla JavaScript (ES6+ Modules), HTML5 Canvas, and advanced CSS layout techniques to recreate the pixel-perfect 1-bit aesthetics originally designed by Susan Kare.

---

## 🚀 Live Demo
> **[Insert your GitHub Pages link here e.g., https://github.io]**

---

## 🛠 Features

### 💻 Core OS Layer & Desktop Architecture
* **Virtual File System (VFS):** An in-memory, nested nodes infrastructure simulating real directory structures, absolute paths parsing, and asset attributes mimicking early Apple MFS (Macintosh File System) patterns.
* **Dynamic Window Manager (AWM):** Object-oriented layout controller featuring depth management (`zIndex` stacks), active frame switching, multi-instance handling, and low-latency mouse-event dragging listeners.
* **System Menu Bar & Grid Layout:** Faithful implementation of the global state top-bar menu options, layered dialog windows, and pixelated desktop coordinate layouts.

### 💾 Built-in Native Retro Apps
* ** Calculator:** A unified JavaScript state-machine engine processing visual arithmetic operations tracking input streams accurately.
* **MacPaint (1-bit Canvas Editor):** An HTML5 Canvas-powered painting workspace mapping precise cursor coordinates, supporting raw bitmask operations like binary drawing (pencil) and coordinate block wiping (eraser).
* **MacWrite (Word Processor):** A custom structured text editor featuring real-time input capture, localized persistence caching, and state synchronization hooked up directly to the browser's `localStorage` storage layer.

---

## 📁 Repository Structure

```text
mac-system1-1984/
├── index.html          # Main application viewport and layout styles
├── README.md           # Documentation and technical insights
└── js/
    ├── fileSystem.js     # Virtual File System definitions (VFS)
    ├── windowManager.js  # Dynamic Window & UI layout orchestration
    └── apps/
        ├── macPaint.js   # 1-bit HTML5 Canvas app logic
        └── macWrite.js   # Text editor & localStorage bridge
```

---

## ⚡ Technical Stack

* **Language:** Modern Vanilla ECMAScript 6+ (Strict Native Modules architecture).
* **Graphics Rendering:** HTML5 Canvas API configured with integer-stepped rendering (`image-rendering: pixelated`) enforcing perfect 1-bit aliased graphics.
* **Layout Engine:** Responsive CSS Flexbox & CSS Grid, layered via dynamic absolute positioning hooks.
* **Storage Protocol:** Synchronous local key-value state persistence using the Web Storage API.

---

## 🛠 How to Run Locally

Since this application utilizes native **ES6 Modules**, running it directly via the file protocol (`file://`) will trigger CORS limitations. It requires a local development server.

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd mac-system1-1984
   ```

2. **Spin up a local development server:**
   * Using **Python 3**:
     ```bash
     python -m http.server 8000
     ```
   * Using **Node.js** (via `npx`):
     ```bash
     npx serve .
     ```

3. **Open the App:**
   Navigate to `http://localhost:8000` (or the port specified by your tool) inside any modern web browser.

---

## 🎨 Design Authenticity Details

To enforce the precise visual constraints of 1984 engineering:
* **The Desktop Grid:** Styled using overlapping custom overlapping radial-gradients to generate the standard 50% halftone gray dithering pattern used on original CRT screens.
* **Typography:** Utilizes monospace scaling factors to emulate the specific tracking constraints of Bill Atkinson's QuickDraw font scaling algorithms.
* **Skeuomorphism:** Replicated specific visual structures like the window title lines, close boxes, and thick high-contrast drop-shadows.

---

*Disclaimer: This is a non-commercial educational project built for portfolio and software architecture preservation purposes. "Macintosh", "Finder", and "Apple" are registered trademarks of Apple Inc.*
