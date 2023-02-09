import {showForm, addElement} from './lib/form';
import {initElements} from "./lib/element";

let items = [
    { title: "Element 1", description: "Opis elementu 1", expanded: true},
    { title: "Element 2", description: "Opis elementu 2", expanded: false},
    { title: "Element 3", description: "Opis elementu 3", expanded: true},
    { title: "Element 4", description: "Opis elementu 4", expanded: false},
    { title: "Element 5", description: "Opis elementu 5", expanded: true}
];

export let storedItems = JSON.parse(localStorage.getItem("elements")) || items;

showForm();
addElement();
initElements();