import ListItem from './util/ListItem.js';

function makeItemDraggable(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
}

document.querySelectorAll('.list-item').forEach(makeItemDraggable);

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const input = this.querySelector('input');
        const description = input.value;
        const item = new ListItem(description).createItem();

        // Make the new item draggable
        makeItemDraggable(item);
        const targetListId = this.getAttribute('data-target-list');
        const targetList = document.querySelector(`#${targetListId}`);

        targetList.appendChild(item);
        input.value = '';
    });
});

// Enable dragging for all list items
document.querySelectorAll('.list-item').forEach((item) => {
    item.setAttribute('draggable', true);
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

// Highlight drop targets and store dragged item
let draggedItem = null;
function handleDragStart(e) {
    draggedItem = this;
    document.querySelectorAll('.list').forEach((list) => {
        if (list !== draggedItem.parentElement) {
            list.classList.add('highlight');
        }
    });
}

// Handle drag over to allow dropping
document.querySelectorAll('.list').forEach((list) => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessary to allow dropping
    });
    list.addEventListener('drop', handleDrop);
});

// Handle item drop, move item, and cleanup
function handleDrop(e) {
    e.preventDefault();
    if (draggedItem && this !== draggedItem.parentElement) {
        this.appendChild(draggedItem);
    }
    cleanup();
}

// Cleanup after drag ends
function handleDragEnd(e) {
    cleanup();
}

// Remove highlights and reset dragged item
function cleanup() {
    document.querySelectorAll('.list').forEach((list) => {
        list.classList.remove('highlight');
    });
    draggedItem = null;
}
