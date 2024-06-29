class DragAndDropManager {
    constructor() {
        this.draggedItem = null;
        this.initializeDraggableItems();
        this.initializeDropZones();
    }

    initializeDraggableItems() {
        document.querySelectorAll('.list-item').forEach((item) => {
            item.setAttribute('draggable', true);
            item.addEventListener('dragstart', this.handleDragStart.bind(this));
            item.addEventListener('dragend', this.cleanup.bind(this));
        });
    }

    initializeDropZones() {
        document.querySelectorAll('.list').forEach((list) => {
            list.addEventListener('dragover', this.handleDragOver.bind(this));
            list.addEventListener('drop', this.handleDrop.bind(this));
        });
    }

    handleDragStart(e) {
        this.draggedItem = e.target;
        document.querySelectorAll('.list').forEach((list) => {
            if (list !== this.draggedItem.parentElement) {
                list.classList.add('highlight');
            }
        });
    }

    handleDragOver(e) {
        e.preventDefault(); // Necessary to allow dropping
    }

    handleDrop(e) {
        e.preventDefault();
        if (this.draggedItem) {
            e.target.appendChild(this.draggedItem);
            this.cleanup();
        }
    }

    cleanup() {
        document.querySelectorAll('.list').forEach((list) => {
            list.classList.remove('highlight');
        });
        this.draggedItem = null;
    }
}

// Initialize the drag and drop manager
document.addEventListener('DOMContentLoaded', () => {
    new DragAndDropManager();
});
