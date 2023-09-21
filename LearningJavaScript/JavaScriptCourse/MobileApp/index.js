import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase , ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-96f06-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");

addButton.addEventListener("click",getInput);

function getInput() {
    let inputValue = inputField.value;
    clearInput();

    push(shoppingListInDB,inputValue);
}

onValue(shoppingListInDB, function(snapshot){
    
    if(snapshot.exists()){
        let itemsArray = Object.entries(snapshot.val());
        clearShoppingList();
    
        for (let x=0; x<itemsArray.length; x++) {
            let currentItem = itemsArray[x];
            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1];
    
            addItemToShoppingList(currentItem);
        }    
    } else {
        shoppingList.innerHTML = "Nothing here... yet";
    }

})

function  clearShoppingList() {
    shoppingList.innerHTML = "";
}

function clearInput() {
    inputField.value = "";
}

function addItemToShoppingList(item) {
    let itemID = item[0];
    let itemValue = item[1]

    let newEl = document.createElement("li");
    newEl.textContent = itemValue;

    newEl.addEventListener("click", function() {
        let exactLocation = ref(database, `shoppingList/${itemID}`);

        remove(exactLocation);
    })

    shoppingList.append(newEl);
}