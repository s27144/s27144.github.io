function trojkaPitagorejska(x, y, z) {
    return x * x + y * y === z * z;
}

console.log("Zad 1: \n" + trojkaPitagorejska(3, 4, 5));

function liczbyABC(a, b, c) {
  if (a > b) {
    console.log("Niepoprawny przedział - a musi być mniejsze od b");
    return;
  }

  console.log(`Liczby podzielne przez ${c} z przedziału od ${a} do ${b}:`);

  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      console.log(i);
    }
  }
}

console.log("Zad 2: \n" + liczbyABC(1, 10, 2));

function tablicaMnozenia(bok) {
    let box = "";
    for (let i = 1; i <= bok; i++) {
        for (let j = 1; j <= bok; j++) {
            box += i*j + " ";
        }
        box += "\n";
    }
    return box;
}

console.log("Zad 3: \n" + tablicaMnozenia(3));

function Fibonacci(x) {
    let array = [];
    array.push(0);
    array.push(1);
    for (let i = 0; i < x - 2; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array;
}

console.log("Zad 4: \n" + Fibonacci(10));

function choinka(x) {
    let xMassTree = "";
    for (let i = 1; i <= x; i++) {
        for (let j = 0; j < i; j++ ) {
            xMassTree += "*";
        }
        xMassTree += "\n";
    }
    return xMassTree
}
console.log("Zad 5: \n" + choinka(4));

function choinkaNoca(x) {
    let stringChoinki = "";
    for (let i = 0; i < 9; i++) {
        stringChoinki += "*";}
    stringChoinki += "\n";
    let triangle = 1;
    for (let i = 0; i < x - 2; i++) {
        for (let j = 0; j < (9 - triangle)/2; j++) {
            stringChoinki += "*"
        }
        for (let j = 0; j < triangle; j++) {
            stringChoinki += " ";
        }
        for (let j = 0; j < (9 - triangle)/2; j++) {
            stringChoinki += "*"
        }
        triangle += 2;
        stringChoinki += "\n";
    }
    for (let i = 0; i < 9; i++) {
        stringChoinki += "*";
    }
    return stringChoinki;
}

console.log("Zad 6: \n" + choinkaNoca(6));

function poleProstokata(a, b) {
    return a + b;
}

function poleTrapezu(a, b, h) {
    return ((a + b) * h)/2;
}

function poleRownoległoboku(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return (a*h)/2;
}

function poleFigury(figura, a, b, h) {
    switch(figura) {
        case "prostokat":
            return "Wybrana figura to: prostokąt. Jego pole to: " + poleProstokata(a, b);
        case "trapez":
            return "Wybrana figura to: trapez. Jego pole to: " + poleTrapezu(a, b, h);
        case "rownoleglobok":
            return "Wybrana figura to: równoległobok. Jego pole to: " + poleRownoległoboku;
        case "trojkat":
            return "Wybrana figura to: trójkąt. Jego pole to: " + poleTrojkata;
        default:
            return "Prosze wpisac 'prostokat', 'trapez', 'rownoleglobok', lub 'trojkat' dla wybrania figury."
    }
}

console.log("Zad 7: \n" + poleFigury("trapez", 8, 6, 4))

function poleFiguryCallback(figura, a, b, h) {
    return "Wybrana figura to: " + figura + ". Jej pole to: " + wyborFigury(figura, a, b, h);
}
const anonProstokat = (a, b) => a*b;
const anonTrojkat = (a, h) => (a*h)/2;
const anonTrapez = (a, b, h) => ((a+b)*h)/2;
const anonRownoleglobok = (a, h) => (a*h);

function wyborFigury(figura, a, b, h) {
    switch(figura) {
        case "prostokat":
            return anonProstokat(a, b);
        case "trojkat":
            return anonTrojkat(a, h);
        case "trapez":
            return anonTrapez(a, b, h);
        case "rownoleglobok":
            return anonRownoleglobok(a, h);
        default:
            return "Wybierz'prostokat', 'rownoleglobok', 'trapez',  lub 'trojkat'";

    }
};

console.log("Zad 8: \n" + poleFiguryCallback("rownoleglobok", 10, 0, 4));

function trojkatPascala(wysokosc) {
  const trojkat = [];

  for (let i = 0; i < wysokosc; i++) {
    trojkat[i] = new Array(i + 1);
    trojkat[i][0] = 1;
    trojkat[i][i] = 1;

    for (let j = 1; j < i; j++) {
      trojkat[i][j] = trojkat[i - 1][j - 1] + trojkat[i - 1][j];
    }
  }

  for (let i = 0; i < wysokosc; i++) {
    console.log(trojkat[i].join(" "));
  }
}


console.log("Zad 9: \n" + trojkatPascala(6));

function zakryte(tablica, y) {
    let censored = y;
    for (let i = 0; i < tablica.length; i++) {
        censored = censored.replaceAll(tablica[i], "*");
    }

    return censored;
}

console.log("Zad 10: \n" + zakryte(["Ala", "kot"], "Ala ma kota a kot ma ale"));