/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 20;
let num2 = 10;

if (num1 > num2) {
    console.log("The bigger number is: %d", num1);
} else {
    console.log("The bigger number is: %d", num2);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let equal5 = 4;

if (equal5 !== 5) {
    console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let multipleOfFive = 15;

if (multipleOfFive%5 === 0) {
    console.log("divisibile per 5");
} else {
    console.log("non disibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let integer1 = 3
let integer2 = 5
console.log((integer1 === 8 || integer2 === 8) || ((integer1 - integer2) === 8) || (integer2 - integer1) === 8 || (integer1 + integer2) === 8);
if ((integer1 === 8 || integer2 === 8) || ((integer1 - integer2) === 8) || (integer2 - integer1) === 8 || (integer1 + integer2) === 8) {
    console.log("siamo dentro i parametri");
} else {
console.log("non rispettiamo i parametri");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 85;

if (totalShoppingCart <= 50) {
    totalShoppingCart += 10;
    console.log("il suo conto prevede 10€ di spedizione per un totale di %d",totalShoppingCart);
} else {
    console.log("Spedizione compresa!! Il saldo totale è %d", totalShoppingCart)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCartBlackFriday = totalShoppingCart * 0.8;
if (totalShoppingCartBlackFriday <= 50) {
    totalShoppingCartBlackFriday += 10;
    console.log("Black Friday!! non stai approfittando dell'offerta! il tuo saldo è %d con l'aggiunta di 10€ di consegna!",totalShoppingCartBlackFriday);
} else if (totalShoppingCartBlackFriday <= 50 && totalShoppingCart > 50 ) {
    totalShoppingCartBlackFriday += 10;
    console.log("Black Friday!! Mancano pochi € per la consegna gratuita, paghi: %d",totalShoppingCartBlackFriday);
} else {
    console.log("Spedizione compresa!! Il saldo totale è %d", totalShoppingCartBlackFriday);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberOne = 3
let numberTwo = 2
let numberThree = 1

if (numberOne < numberTwo && numberOne < numberThree) {
    if (numberThree < numberTwo){
        console.log("L'ordine dei numeri è %d %d %d", numberTwo, numberThree, numberOne)
    } else {
        console.log("L'ordine dei numeri è %d %d %d", numberThree, numberTwo, numberOne)
    }
} else if (numberOne < numberTwo || numberOne < numberThree) {
    if (numberThree < numberTwo) {
        console.log("L'ordine dei numeri è %d %d %d", numberTwo, numberOne, numberThree)        
    } else {
        console.log("L'ordine dei numeri è %d %d %d", numberThree, numberOne, numberTwo)        
    }
} else {
    if (numberTwo < numberThree) {
        console.log("L'ordine dei numeri è %d %d %d",numberOne, numberThree, numberTwo)        
    } else {
        console.log("L'ordine dei numeri è %d %d %d",numberOne, numberTwo, numberThree)        
    }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let value = "number"
console.log(typeof(value) === "number");
if (typeof(value) == "number") {
    console.log("è un numero!");
} else {
    console.log("non è un numero");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isEvenOrOdd = 2;

if (isEvenOrOdd%2 === 0) {
    console.log("è pari!");
} else if (isEvenOrOdd%2 !== 0 && typeof(isEvenOrOdd) === "number") {
    console.log("Il numero è dispari")
} else {
    console.log("sei sicuro di cosa stai facendo?")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 10
if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("prima: %o", me)
me.city;
console.log("dopo: %o",me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log("senza lastName: %o",me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log("prima: %o", me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

empyArray = [];
fullArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(empyArray);
Object.assign(empyArray, fullArray);
console.log(empyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

empyArray.pop();
console.log("tolto l'ultimo oggetto %a", empyArray);
empyArray.push(100);
console.log("sostituito con 100 %a", empyArray);