const family = {
    familyIncome: 50000,
    familyMembers: 11,
    costPerMember: 4000,
    currentBalance: function (shamajikKhoroch) {
        const x = ((this.familyMembers * this.costPerMember) + shamajikKhoroch);
        this.familyIncome -= x;
        return this.familyIncome;
    }
}
const shamajikKhoroch = 3510;
const balanceRemained = family.currentBalance(shamajikKhoroch);
console.log(balanceRemained);