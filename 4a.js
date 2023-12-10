function trojkaPitagorejska(x, y, z) {
    let sortedNumbers = [x, y, z].sort((x, y) => x - y);
    return (
        (sortedNumbers[0] ^ 2) + (sortedNumbers[1] ^ 2) == (sortedNumbers[2] ^ 2)
    );
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


function poleFigury(wybor, ...wartosci) {
  let pole;
  switch (wybor) {
    case "trojkat":
      pole = policzPoleTrojkata(wartosci[0], wartosci[1]);
      break;
    case "trapez":
      pole = policzPoleTrojkata(wartosci[0], wartosci[1], wartosci[2]);
      break;
    case "prostokat":
      pole = policzPoleTrojkata(wartosci[0], wartosci[1]);
      break;
    case "rownoleglobok":
      pole = policzPoleTrojkata(wartosci[0], wartosci[1]);
      break;
    default:
      break;
  }
  console.log(pole);
  return pole;
}
function policzPoleTrojkata(a, h) {
  return (1 / 2) * a * h;
}
function policzPoleTrapezu(a, b, h) {
  return (1 / 2) * (a + b) * h;
}
function policzPoleProstokata(a, b) {
  return a * b;
}
function policzPoleRownolegloboku(a, h) {
  return a * h;
}
const trojkat = function (v) {
  return (1 / 2) * v[0] * v[1];
};
const trapez = function (v) {
  return (1 / 2) * (v[0] + v[1]) * v[2];
};
const prostokat = function (v) {
  return v[0] * v[1];
};
const rownoleglobok = function (v) {
  return v[0] * v[1];
};
function poleFigury(figura, ...wartosci) {
  return figura(wartosci);
}

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