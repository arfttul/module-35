// object iteration 

// for, for of , for in ,forEach() 

const student = {
    name: 'arafat',
    id: 75,
    cgpa: 3.16
};

for (const propety in student) {
    // console.log(propety, student[propety]);
}

const keys = Object.keys(student);
for (const key of keys) {
    // console.log(key, student[key]);
}

// destructuring objects and loop
for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}