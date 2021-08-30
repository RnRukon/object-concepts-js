const kibria = {
    id: 121,
    money: 5000,
    name: 'RJ Kibria',

    treatDay: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this.money);
        // return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero Balam'

}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'Normal golam'

}

// kibria.treatDay.call(heroBalam, 500, 100,50);
// kibria.treatDay.call(normalGolam, 500, 100,50);


kibria.treatDay.apply(normalGolam, [500, 100, 50]);