//<li><input type="checkbox"> <span> Veikla</span> </li>

// testi cia:
// https://www.youtube.com/watch?v=7lYkRYVkXBo

//


// Atliktas isbraukiamas, viena karta nuspaudus
function updateItemStatus() {
    let me = this;
    me.setAttribute("class", "done");
    console.log(me);
}

function restoreItem() {
    let me = this;
    me.setAttribute("class", "");
}



function addNewItem(list, itemText) {
    let listItem = document.createElement("li");

    listItem.onclick = updateItemStatus;
    listItem.ondblclick = restoreItem;

    listItem.innerHTML = itemText;
    list.appendChild(listItem);
};

/* paimam mygtuka */
let btnNew = document.getElementById("btnAdd");

/* paimam teksta is inputo */
let inText = document.getElementById("inText");
inText.focus();


// Kai suvedam, nuspaudziam enter vietoje mygtuko ADD
// enter kodas yra 13
inText.onkeyup = function (event) {

    if (event.which == 13) {
        let itemText = inText.value;
        if (!itemText || itemText == "" || itemText == " ") {
            return false;
        }

        addNewItem(document.getElementById("todoList"), itemText);
        // pazymetu teksta
        // inText.select();

        // Kai suvedam, kad kitam kartui butu tuscia
        inText.value = "";
    }
}

// pasalinti sarasa
let removeBtn = document.getElementById("remove");
removeBtn.onclick = function () {
    
    var list = document.getElementById("todoList");
    list.innerHTML = '';
}




















