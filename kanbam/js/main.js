class ListItem {
    constructor(text) {
        this.text = text;
    }

    createItem() {
        const element = document.createElement('li');
        element.textContent = this.text;
        return element;
    }
}

const backlogForm = document.querySelector('#backlogForm');
const backlogList = document.querySelector('#backlog-list');

backlogForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.querySelector('#backlogItemInput');
    const description = input.value;
    const item = new ListItem(description).createItem();

    backlogList.appendChild(item);
    input.value = '';
});

backlogList.addEventListener('click', function (event) {
    console.log(event.target);
    const target = event.target;

    target.classList.toggle('checked');
});
