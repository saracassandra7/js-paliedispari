/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/ 

const parolaInserita = prompt('Inserisci una parola');
invertiParola(parolaInserita);

let parolaInversa = invertiParola(parolaInserita);

if(parolaInserita == parolaInversa){
  document.querySelector('h1').innerText = `La parola "${parolaInserita}" è palindroma`  
  console.log('la parola è palindroma');
  } else {
    document.querySelector('h1').innerText = `La parola "${parolaInserita}" NON è palindroma`
    console.log('la parola non è palindroma');
  }
  
 function invertiParola(parola){
  let strInversa = parola.split('').reverse().join('');  
  return strInversa;
}