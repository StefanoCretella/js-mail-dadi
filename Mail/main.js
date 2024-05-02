// Mando in console la scritta "Inserisci la email"
console.log('Inserisci la email');

// Lista mail che hanno l'accesso
// Tutte le mail non presenti nella "listaAutorizzate" avranno "errore"
const listaAutorizzate = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com"];


// Funzione di controllo per valutare l'email inserita
function controllaAccesso() {
    const emailInserita = document.getElementById('email').value;

    // Controllo per vedere se la mail è giusta o sbagliata
    if (listaAutorizzate.includes(emailInserita)) {
        // Allert mail corretta
        alert("Accesso consentito");
        console.log("Accesso consentito");
    } else {
        // Allert mail sbagliata                             
        alert("Accesso negato");
        console.log("Accesso negato");
    }
}

