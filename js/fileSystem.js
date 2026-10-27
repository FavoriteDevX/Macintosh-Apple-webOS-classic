/**
 * Macintosh 1984 Virtual File System (VFS)
 */
class VirtualFileSystem {
    constructor() {
        this.root = {
            name: "Macintosh HD",
            type: "directory",
            children: {
                "System Folder": {
                    type: "directory",
                    children: {
                        "System": { type: "file", content: "System Boot Code v1.0 - 212K", icon: "system" },
                        "Finder": { type: "file", content: "Finder Desktop Interface - 46K", icon: "finder" }
                    }
                },
                "Applications": {
                    type: "directory",
                    children: {
                        "MacPaint": { type: "app", action: "MacPaint", icon: "paint" },
                        "MacWrite": { type: "app", action: "MacWrite", icon: "write" }
                    }
                },
                "Documents": {
                    type: "directory",
                    children: {
                        "Note.txt": { type: "file", content: "Welcome to Macintosh 1984 replica!", icon: "text" }
                    }
                }
            }
        };
    }

    resolvePath(pathArray) {
        let current = this.root;
        for (const segment of pathArray) {
            if (current.children && current.children[segment]) {
                current = current.children[segment];
            } else {
                return null;
            }
        }
        return current;
    }
}

export const VFS = new VirtualFileSystem();
