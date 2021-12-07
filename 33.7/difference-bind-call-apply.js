const tusher = {
    name: 'tusher',
    balance: 5000,
    hasBike: null,
    expense: function (expense, bokshish, tax) {
        this.balance = this.balance - expense - bokshish - tax;
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
        console.log(`${this.name} riding bike at ${speed}/kmph `);
    }
}

// const shakilRide = imran.bikeRiding.call(shakil, 50);
// const tusherRide = imran.bikeRiding.call(tusher, 150);

//  tusher.expense.apply(shakil,[200,20,2]);
//  tusher.expense.apply(shakil,[2000,50,200]);
//  tusher.expense.apply(shakil,[12000,150,1200]);
