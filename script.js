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
        break;
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