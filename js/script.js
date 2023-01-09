
let shoplist = [
    "Pane",
    "Burro",
    "Uova",
    "Latte",
    "Pasta",
    "Legumi",
];

let i= 0;

while (i < shoplist.length){

    let listshop = document.getElementById('listshop');
    let items= document.createElement("li");
    items.textContent= shoplist[i];
    listshop.append(items);

    i++;
}


