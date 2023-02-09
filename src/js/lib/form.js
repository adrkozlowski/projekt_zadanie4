import {createElement} from "./element";
import {storedItems} from "../index";

const visibilityClass = "visible";
const showFormBtn = document.getElementById("displayFormBtn");
const addForm = document.getElementById("addForm");
const addElementBtn = document.getElementById("addEl");
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");

export const showForm = () => {
    showFormBtn.addEventListener("click", () => {
        addForm.classList.toggle(visibilityClass);
    });
};

export const addElement = () => {
    addElementBtn.addEventListener("click", () => {
        const title = inputTitle.value;
        const description = inputDescription.value;
        const expanded = false;
        storedItems.push({title, description, expanded});
        const index = storedItems.length-1;
        console.log(index);
        console.log();
        createElement(title, description, expanded, index);
        localStorage.setItem('elements', JSON.stringify(storedItems));
    })
};
