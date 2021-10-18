const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check')

const richestPeople = [
    "Elon Musk",
    "Jeff Bezos",
    "Bernard Arnault",
    "Bill Gates",
    "Mark Zuckerberg",
    "Lary Page",
    "Sergy Brin",
    "Steve Ballmer",
    "Larry Ellison",
    "Warren Buffett"
]

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

//  Insert list items into DOM

function createList() {
    [...richestPeople].forEach( (person, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div> 
        `;
        listItems.push(listItem);

        draggable_list.appendChild(listItem);
    });
}

