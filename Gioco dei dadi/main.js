console.log('Tirate i dadi');

// Genera un numero casuale da 1 a 6
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 6) + 1;
}

// Per determinare il vincitore 
function determinaVincitore(punteggioGiocatore, punteggioComputer) {
    if (punteggioGiocatore > punteggioComputer) {
        return "Il giocatore vince!";
    } else if (punteggioComputer > punteggioGiocatore) {
        return "Il computer vince!";
    } else {
        return "Pareggio!";
    }
}

// Per eseguire il gioco
function gioca() {

    // Genera un numero casuale per il giocatore e per il computer
    const punteggioGiocatore = generaNumeroCasuale();
    const punteggioComputer = generaNumeroCasuale();

    //Risultato giocatore
    console.log("Giocatore: " + punteggioGiocatore);
   
    //Risultato computer
    console.log("Computer: " + punteggioComputer);

    // Determiniamo il vincitore tra giocatore e computer
    const risultato = determinaVincitore(punteggioGiocatore, punteggioComputer);

    // Manda a schermo giocatore e computer con i loro rispettivi tiri di dado
    const elementoGiocatore = document.getElementById("punteggio-giocatore");
    const elementoComputer = document.getElementById("punteggio-computer");

    // Stampiamo il risultato sulla pagina HTML
    elementoGiocatore.innerText = "Giocatore: " + punteggioGiocatore;
    elementoComputer.innerText = "Computer: " + punteggioComputer;
    document.getElementById("risultato").innerText = risultato;
}
