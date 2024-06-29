class ListItem {
    constructor(text) {
        this.text = text;
    }

    createItem() {
        const element = document.createElement('li');
        element.classList.add('list-item');
        element.setAttribute('draggable', true);
        element.textContent = this.text;
        return element;
    }
}

export default ListItem;
