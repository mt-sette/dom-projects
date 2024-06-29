// Select all parent elements
// These are containers for draggable elements
// to be dropped.
const parents = document.querySelectorAll('.parent');

// Event delegation for dragstart and dragend on parent elements
parents.forEach((parent) => {
    parent.addEventListener(
        'dragstart',
        (e) => {
            if (e.target && e.target.matches('.child')) {
                e.target.classList.add('dragging');
            }
        },
        true
    );

    parent.addEventListener(
        'dragend',
        (e) => {
            if (e.target && e.target.matches('.child')) {
                e.target.classList.remove('dragging');
            }
        },
        true
    );
});

// Reference to the currently dragging element
let currentlyDragging = null;
/**
 * Dragover event listener on parent elements
 */
parents.forEach((parent) => {
    parent.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (currentlyDragging && parent !== currentlyDragging.parentNode) {
            parent.appendChild(currentlyDragging);
        }
    });

    // Update currentlyDragging on dragstart
    parent.addEventListener('dragstart', (e) => {
        if (e.target && e.target.matches('.child')) {
            currentlyDragging = e.target;
        }
    });

    // Clear currentlyDragging on dragend
    parent.addEventListener('dragend', () => {
        currentlyDragging = null;
    });
});
