// --FAI UN CICLO CHE STAMPI I NUMERI DA 1 A 100
// --STAMPA I NUMERI IN CONSOLE
// --SE IL NUMERO Ѐ ֻMULTIPLO DI 3 E DI 5 QUINDI 15 STAMPA IN CONSOLE FIZZBUZZ
// --PER SAPERE SE Ѐ DIVISIBILE BISOGNA FARE IL NUMERO USCITO DIVISO 15 === 0 
// --ALRTIMENTI SE IL NUMERO Ѐ MULTIPLO DI 5 STAMPA BUZZ
// --PER SAPERE SE Ѐ DIVISIBILE BISOGNA FARE IL NUMERO USCITO DIVISO 5 === 0 
// --ALTRIMENTI SE IL NUMERO Ѐ MULTIPLO DI 3 STAMPA FIZZ
// --PER SAPERE SE Ѐ DIVISIBILE BISOGNA FARE IL NUMERO USCITO DIVISO 3 === 0 
// -- ALTRIMENTI STAMPA IL NUMERO  

for (let x = 0; x <= 100 ; x++) {

    if ( x % 15 == 0) {
        console.log  ("FIZZBUZZ");
    } 
    else if (x % 3 ===0){
        console.log("FIZZ");
    }
    else if ( x % 5  ===0){
        console.log("BUZZ");
    }
    else {
        console.log(x);
    }
    
}