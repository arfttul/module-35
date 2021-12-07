// new way to create Object
// object literal
const student = {
    name: 'arafat',
    id: 75,
    cgpa: 3.16,
    semester: '7th',
    preferJob: 'Front-end Web Developer',
    jobCatagory: 'Remote'
};

// object constractor 
const personILove = new Object();
// add property to obj 
personILove.name = 'shafa';
personILove.age = 21;
personILove.color = 'white';
personILove.eyeColor = 'black';
personILove.height = `5'2"`;
personILove.favouriteColor = 'lavender';
personILove.husbandName = 'Arafat';
personILove.MarriageDate = '13th August, 2021';
// console.log(personILove);

// inherit obj property from another obj

const arafat = Object.create(null);
// const arafat = Object.create(student);//inherited from student
console.log(arafat);

// object with class syntectical sugar
class HonorsStudent {
    constructor(name, subject, age) {
        this.name = name;
        this.subject = subject;
        this.age = age;
    }
}

const arafatulIslam = new HonorsStudent('arafat', 'cse', 26);
const shafaAraEila = new HonorsStudent('shafa', 'bba', 21);
// console.log(arafatulIslam);
// console.log(shafaAraEila);

// Object with function 
function BacchaKaccha(name,age,dob,father,mother) {
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.father = father;
    this.mother = mother;
}

const abdullah = new BacchaKaccha('abdullah mahdi', 1, undefined, 'sahidul islam', 'umme salma urmi');
console.log(abdullah);