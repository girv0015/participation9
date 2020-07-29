// --- Character Object

let character = {
    inventory: [],
    money: 100,
    displayInventory: function(){
        console.log(`Money: ${this.money}`)
        for (let item of this.inventory){
            console.log(`[${item.id}] ${item.name}`)

        }
    }
}

// ---Store Inventory

let items = [
    {
        name: "Magic Sword",
        value: 17,
        id: 1
    },

    {
        name: "Healing Potion",
        value: 5,
        id: 2
    },
    {
        name: "Invisibility Cloak",
        value: 32,
        id: 3
    }
]

// ---nDisplay Sotre Inventory FUnction
function displayStoreItems(){
    for (let item of items){
        console.log(`[${item.id}] ${item.name}`)
        console.log(`Cost:${item.value}\n\n`)
    }
}

//BUY Function
// accept an ID parameter
function buy(id){                                                                 
    character.inventory.push(items[id - 1])
    character.money -=items[id - 1].value
    items.splice(id - 1, 1)
}

// --- Sell Function

function sell(id) {
    items.push(character.inventory[id - 1])
    character.money += character.inventory[id - 1].value
    character.inventory.splice(id - 1, 1)
}