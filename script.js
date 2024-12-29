document.addEventListener('DOMContentLoaded', function () {
  const dettagliTokenSection = document.getElementById('dettagliToken');
  const formContattoSection = document.getElementById('formContatto');
  const listaTokenSection = document.getElementById('listaToken');

  const dettagliButtons = document.querySelectorAll('.dettagli-button');
  const chiudiDettagliButton = document.getElementById('chiudiDettagliButton');
  const contattaciButton = document.getElementById('contattaciButton');
  const chiudiModuloButton = document.getElementById('chiudiModuloButton');


    // Funzione per popolare i dettagli del token nella sezione `dettagliToken`
  function populateTokenDetails(tokenId) {
    const dettagliContent = document.getElementById('dettagliContent');
    const listaAdvisors = document.getElementById('listaAdvisors');
    // Esempio di dati: in un'applicazione reale, questi verrebbero recuperati da un backend.
    const tokenDetails = {
      1: {
          name: "Token di Esempio 1",
          symbol: "ABC",
          description: "Breve descrizione del Token di esempio 1.",
          advisors: ["Advisor 1", "Advisor 2", "Advisor 3"],
        },
    };

    const token = tokenDetails[tokenId];

    if(token){
      dettagliContent.querySelector('h3').textContent = token.name;
      dettagliContent.querySelector('p:nth-of-type(1)').textContent = `Simbolo: ${token.symbol}`;
      dettagliContent.querySelector('p:nth-of-type(2)').textContent = `Descrizione: ${token.description}`;


      listaAdvisors.innerHTML = '';
      token.advisors.forEach(advisor =>{
          const li = document.createElement('li');
          li.textContent = advisor;
          listaAdvisors.appendChild(li);
        });
    }
  }
    // Gestione click su "Dettagli"
  dettagliButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tokenId = this.dataset.tokenId;
        populateTokenDetails(tokenId); // Popola i dettagli del token selezionato
        dettagliTokenSection.classList.remove('hidden');
      });
    });

    // Gestione chiusura "Dettagli"
  chiudiDettagliButton.addEventListener('click', function() {
    dettagliTokenSection.classList.add('hidden');
  });


  // Gestione click sul pulsante "Contattaci"
  contattaciButton.addEventListener('click', function() {
      formContattoSection.classList.remove('hidden');
    });

   // Gestione chiusura modulo "Contattaci"
  chiudiModuloButton.addEventListener('click', function() {
    formContattoSection.classList.add('hidden');
  });


 // Esempio di validazione del form e invio di dati
  const moduloContatto = document.getElementById('moduloContatto');
  moduloContatto.addEventListener('submit', function(event){
     event.preventDefault();

     // Raccogli i dati del modulo
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tokenNome = document.getElementById('tokenNome').value;
    const messaggio = document.getElementById('messaggio').value;

    // Simula l'invio dei dati
    console.log('Dati del form:', { nome, email, tokenNome, messaggio });

    // Puoi inviare i dati al server qui (con una chiamata AJAX o Fetch)

      // Reset del form (opzionale)
      moduloContatto.reset();
      formContattoSection.classList.add('hidden');

     alert('Messaggio inviato con successo!');
  })


});
