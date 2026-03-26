// =========================
// ESERCIZIO 1: MAIL
// =========================

// Creo una lista di email invitate alla festa
const listaInvitati = [
    "mario@gmail.com",
    "luca@hotmail.com",
    "anna@yahoo.com",
    "giulia@outlook.com",
    "paolo@email.com"
];

// Chiedo all'utente la sua email
const emailUtente = prompt("Inserisci la tua email:");

// Creo una variabile di controllo
let emailTrovata = false;

// Controllo con un ciclo for se l'email dell'utente è presente nella lista
for (let i = 0; i < listaInvitati.length; i++) {
    if (emailUtente === listaInvitati[i]) {
        emailTrovata = true;
    }
}

// Stampo un messaggio in base al risultato del controllo
if (emailTrovata) {
    console.log("Accesso consentito");
    alert("Accesso consentito");
} else {
    console.log("Accesso non consentito");
    alert("Accesso non consentito");
}

// =========================
// ESERCIZIO 2: GIOCO DEI DADI
// =========================

// Genero un numero random da 1 a 6 per il giocatore
const dadoGiocatore = Math.floor(Math.random() * 6 + 1);
// Genero un numero random da 1 a 6 per il computer
const dadoComputer = Math.floor(Math.random() * 6 + 1);

// Stampo i risultati dei tiri
console.log("Tiro del giocatore:", dadoGiocatore);
console.log("Tiro del computer:", dadoComputer);

// Stabilisco il vincitore
if (dadoGiocatore > dadoComputer){
    console.log("Hai vinto!");
    alert("Giocatore: " + dadoGiocatore + " | Computer: " + dadoComputer + " Hai vinto!");
}   else if (dadoComputer > dadoGiocatore) {
    console.log("Ha vinto il computer!");
    alert("Giocatore: " + dadoGiocatore + " | Computer: " + dadoComputer + "  Ha vinto il computer!");
} else {
    console.log("Pareggio!");
    alert("Giocatore: " + dadoGiocatore + " | Computer: " + dadoComputer + " Pareggio!");
}


