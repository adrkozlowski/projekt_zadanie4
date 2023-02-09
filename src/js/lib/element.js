import {storedItems} from "../index";

const hideClass = "hidden";
// export let items = [
//     { title: "Element 1", description: "Opis elementu 1", expanded: true},
//     { title: "Element 2", description: "Opis elementu 2", expanded: false},
//     { title: "Element 3", description: "Opis elementu 3", expanded: true},
//     { title: "Element 4", description: "Opis elementu 4", expanded: false},
//     { title: "Element 5", description: "Opis elementu 5", expanded: true}
// ];

let container = document.getElementById("container");

// Funkcja tworząca pojedynczy element
export const createElement =(elementTitle, elementDescription, elementExpanded,  index) => {
    let item = document.createElement("div");
    let title = document.createElement("h1");
    let description = document.createElement("p");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    item.classList.add("element");
    title.classList.add("elementTitle");
    description.classList.add("elementDescription");
    editBtn.classList.add("edit");
    deleteBtn.classList.add("delete");
    if(!elementExpanded) {
        description.classList.add(hideClass);
    }


    title.innerText = elementTitle;
    description.innerText = elementDescription;
    editBtn.innerText = "Edytuj";
    deleteBtn.innerText = "Usuń";

    title.addEventListener("click", () => toggleElement(index));
    editBtn.addEventListener("click", () => editElement(index));
    deleteBtn.addEventListener("click", () => deleteElement(index));

    item.append(title, description, editBtn, deleteBtn);

    container.appendChild(item);
}

// Funkcja dodajace elementy na stronie
export const initElements = () => {
    container.innerHTML = "";
    storedItems.forEach(function (element, index) {
        createElement(element.title, element.description, element.expanded, index);
    })
}

// Funkcja ukrywająca/odkrywająca element
const toggleElement = (index) => {
    const description = document.getElementsByClassName("elementDescription")[index];
    description.classList.toggle(hideClass);
};

// Funkcja edytująca tytuł oraz opis wskazanego elementu
const editElement = (index) => {
    const newTitle = prompt('Enter new title:', storedItems[index].title);
    const newDescription = prompt('Enter new description:', storedItems[index].description);
    storedItems[index].title = newTitle;
    storedItems[index].description = newDescription;
    initElements();
    localStorage.setItem('elements', JSON.stringify(storedItems));
};

// Funkcja usuwająca wskazany element
const deleteElement = (index) => {
    storedItems.splice(index, 1);
    initElements();
    localStorage.setItem('elements', JSON.stringify(storedItems));
};
