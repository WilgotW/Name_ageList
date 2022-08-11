const people = [
    {
        name: "Wilgot",
        age: 17,
        code: true,
    },
    {
        name: "Baloo",
        age: 5,
        code: false,
    },
    {
        name: "Pappa",
        age: 53,
        code: false,
    }
];

const names = people.map(person => {
    return person.name
});
console.log(names);

const nonProgramers = people.filter(person => {
    return person.code == false;
});
console.log(nonProgramers);


let boxes = [];

const addBtn = document.getElementById("addButton");
addBtn.addEventListener('click', () => {
    boxes.push(createNewBox());
    console.log(boxes);
});

function createNewBox(){
    let collection = document.getElementById('collection');

    //new box
    let box = document.createElement("div");
    box.classList.add("item");
    //append name
    let title = document.createElement("h1");
    title.innerHTML = document.getElementById("name").value;
    box.appendChild(title);
    //append age
    let age = document.createElement("p");
    age.innerHTML = document.getElementById("age").value;
    box.appendChild(age);

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "X";
    removeBtn.addEventListener('click', () => {
        collection.removeChild(box);
    });
    box.appendChild(removeBtn);

    //append finished box
    collection.appendChild(box);
    return box;
}

function filter(){
    //filter out age over 20:
    boxes.filter(person => {
        let e = parseInt(person.childNodes[1].innerHTML) 
        return e >= 20;
    });
    console.log(boxes);
}

const filterBtn = document.getElementById("filterButton")
filterBtn.addEventListener('click', () => {
    filter();
});