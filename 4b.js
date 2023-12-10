
//Zad Auto

const auto = {
    rok: 1980,
    przebieg: 1000000,
    cena_wyjsciowa: 500000,
    cena_koncowa: 0,
    powiekszCeneWyjsciowa: function () {
        this.cena_wyjsciowa += 1000;
    },
    obnizCeneKoncowaAge: function () {
        this.cena_koncowa =
            this.cena_wyjsciowa -
            1000 * (new Date(Date.now()).getFullYear() - this.rok);
    },
    obnizCeneMileage: function () {
        this.cena_koncowa -= 10000 * Math.floor(this.przebieg / 100000);
    },
    ustawMileageYears: function (przebieg, rok) {
        this.przebieg = przebieg;
        this.rok = rok;
        this.obnizCeneKoncowaAge();
        this.obnizCeneMileage();
    },
};

function Auto(rok, przebieg, cena_wyjsciowa) {
    this.rok = rok,
        this.przebieg = przebieg,
        this.cena_wyjsciowa = cena_wyjsciowa,
        this.cena_koncowa = 0,
        this.powiekszCeneWyjsciowa = function () {
            this.cena_wyjsciowa += 1000;
        },
        this.obnizCeneKoncowaAge = function () {
            this.cena_koncowa =
                this.cena_wyjsciowa -
                1000 * (new Date(Date.now()).getFullYear() - this.rok);
        },
        this.obnizCeneMileage = function () {
            this.cena_koncowa -= 10000 * Math.floor(this.przebieg / 100000);
        },
        this.ustawMileageYears = function (przebieg, rok) {
            this.przebieg = przebieg;
            this.rok = rok;
            this.obnizCeneKoncowaAge();
            this.obnizCeneMileage();
        }
};

const auta = [Object.create(auto), Object.create(auto)];
auta.dodajAuto = function (auto) {
    if (auto.cena_wyjsciowa > 10000) {
        this.push(auto);
    }
};
auta.zwiekszRok = function () {
    this.forEach((e) => {
        e.rok += 1;
    });
};


//Zad Student i Ocena


class Ocena {
    przedmiot;
    wartosc;
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}

class Student {
    name;
    lastname;
    _grades;
    average;
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this._grades = [];
        this.average = 0;
    }
    #obliczAverage() {
        return (
            this._grades
                .map((grade) => {
                    return grade.wartosc;
                })
                .reduce((accumulator, current) => {
                    return accumulator + current;
                }, 0) / this._grades.length
        );
    }
    get grades() {
        return this._grades
            .map((grade) => `Œrednia: ${grade.subject} - ocena ${grade.wartosc}.`)
            .join(" ");
    }
    set grades(x) {
        if (x instanceof grade) {
            this._grades.push(x);
            this.average = this.#obliczAverage();
        }
    }
    hello() {
        return `Witaj ${this.name} ${this.lastname}, Twoja œrednia ocen to: ${this.average}`;
    }
}
