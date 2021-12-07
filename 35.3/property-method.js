// Keys, values, entities, delete, seal, freeze
const pillow = {
    color: 'blue',
    size: '15"',
    isNew: false,
    price: undefined
};

// console.log(pillow);

const keys = Object.keys(pillow);
// console.log(keys); // takes all keys from obj and return an array
const value = Object.values(pillow);
// console.log(value); // takes all values from obj and return an array

const entries = Object.entries(pillow);
// console.log(entries); // returns a nested array , every key-pair in an array

