class ListItem {
    constructor(text) {
        this.text = text;
        // this.id = Math.random().toString(36).slice(2);
    }

    createItem() {
        const element = document.createElement('li');
        element.textContent = this.text;
        return element;
    }
}

class List {
    constructor(elementId) {
        this.items = [];
        this.elementId = elementId;
    }

    addItem(item) {
        this.items.push(item);
    }
}
const list = new List('backlog');
list.createElement();

console.log(list);

document.querySelector('#backlog').addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.querySelector('#backlog-input');
    const description = input.value;
    const item = new ListItem(description).createItem();

    list.addItem(item);

    document.querySelector('#backlog-list').appendChild(item);
    input.value = '';

    console.log(list);
});
