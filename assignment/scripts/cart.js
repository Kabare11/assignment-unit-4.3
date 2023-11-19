console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// Create a function called `addItem`. It should:

// - take an input parameter for a string `item`
// - add the new item to the global array `basket`.
// - return `true` indicating the item was added

let basket = [];

function addItem(item) {
    basket.push(item)
    return true;

}
addItem('item');
addItem('Water');
addItem('Soda');

console.log('Inside basket:', basket)


// Create a function called `listItems`. It should:

// - loop over the items in the `basket` array
// - console.log each individual item on a new line

// - Create a function called `empty`. It should:
// - reset the `basket` to an empty array





function listItems() {

    for (let item of basket) {
        console.log('Inside item:', item)
    }
    return true;
}


function empty() {
    for (let i = 0; i <= basket.length + 1; i++) {
        basket.pop();
    }

    return true;
}

empty();
console.log(basket)





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
