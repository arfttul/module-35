// Use bind to borrow method from another object

const tusher = {
    name: 'tusher',
    balance: 5000,
    hasBike: null,
    expense: function (expense) {
        this.balance = this.balance - expense;
        console.log(this.balance);
        return this.balance;
    }
}

const shakil = {
    name: 'shakil',
    balance: 20000,
    hasBike: null
}

const imran = {
    name: 'imran',
    hasBike: true,
    bikeRiding: function (speed) {
        console.log(`imran riding bike at ${speed}/kmph `);
    }
}
const tusherBalance = tusher.expense(200);
console.log(tusherBalance);

const shakilBalance = tusher.expense.bind(shakil); // now this refers to shakil object
shakilBalance(1000);

const imranRide = imran.bikeRiding(99);
const shakilRide = imran.bikeRiding.bind(shakil);
shakilRide(10);
const tusherRide = imran.bikeRiding.bind(tusher);
tusherRide(5);