shopping_items = [
    {
        id: 1,
        name: "Milk",
        price: 5
    },
    {
        id: 2,
        name: "Eggs",
        price: 6
    },
    {
        id: 3,
        name: "Pizza_rolls",
        price: 4
    },
    {
        id: 4,
        name: "Beef",
        price: 14
    },
    {
        id: 5,
        name: "Apple",
        price: 2
    },
    {
        id: 6,
        name: "Buns",
        price: 4
    },
    {
        id: 7,
        name: "Condiments",
        price: 2
    }
]


const addToShoppingList = (newObject) => {

    newObject.id = shopping_items[shopping_items.length - 1].id + 1
    shopping_items.push(newObject)
}

// Create a new object
const new1 = {
    id: 0,
    name: "Banana",
    price: 5,
    dateCreated: new Date()
}
// Create a new object
const new2 = {
    id: 0,
    name: "Coffee",
    price: 15,
    dateCreated: new Date()
}
// Create a new object
const new3 = {
    id: 0,
    name: "bread",
    price: 8,
    dateCreated: new Date()
}
// Create a new object
const new4 = {
    id: 0,
    name: "chicken",
    price: 8,
    dateCreated: new Date()
}
// Create a new object
const new5 = {
    id: 0,
    name: "wings",
    price: 10,
    dateCreated: new Date()
}

addToShoppingList(new1)
addToShoppingList(new2)
addToShoppingList(new3)
addToShoppingList(new4)
addToShoppingList(new5)

console.log(shopping_items)