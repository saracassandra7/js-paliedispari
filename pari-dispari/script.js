/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

const pariDispari = prompt('scegli pari o dispari');
const numeroUtente = parseInt(prompt('scegli un numero da 1 a 5'));
const outputResult = document.getElementById('risultato');
const numeroComputer = numeroPc();

const somma = numeroUtente + numeroComputer;

//controllo se le scelte dell'utente sono valide
if (pariDispari.toLowerCase() === "pari" && numeroUtente >= 1 && numeroUtente <= 5){
  numeroPc();
}
else if (pariDispari.toLowerCase() === "dispari" && numeroUtente >= 1 && numeroUtente<= 5){
  numeroPc();
}
else{
  alert('si prega di scegliere pari o dispari e di inserire un numero compreso tra 1 e 5')
}

//output
document.getElementById('pari-dispari').innerHTML += pariDispari;
document.getElementById('scelta-pc').innerHTML += numeroComputer;
document.getElementById('scelta-utente').innerHTML += numeroUtente;
document.getElementById('somma').innerHTML += somma;


if (controlloSomma(somma) === pariDispari){
  outputResult.innerHTML = "vince l'utente!"

} else {
  outputResult.innerHTML = "vince il computer!"
}


//funzioni
function numeroPc (){
  return Math.ceil(Math.random()* 5 );
}

function controlloSomma (){
  if (somma % 2 === 0){
    return 'pari'
    
  } else{
    return 'dispari'
  } 
}

