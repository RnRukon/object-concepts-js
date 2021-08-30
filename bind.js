const kibria = {
    id: 121,
    money: 5000,
    name: 'RJ Kibria',

    treatDay: function (expense) {
        this.money = this.money - expense;
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



const heroTreatDey = kibria.treatDay.bind(heroBalam);
heroTreatDey(1000);
kibria.treatDay(1000);

const normalTreatDey = kibria.treatDay.bind(normalGolam);
normalTreatDey(2000);
