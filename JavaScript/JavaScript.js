//SCROLL IMMAGINI
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n)
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n>slides.length)
  {
    slideIndex = 1;
  }

  if (n<1)
  {
    slideIndex = slides.length
  }

  for (i=0; i<slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  for (i=0; i<dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//FORM
function Richiedi()
{
  //gestione bottoni di invio
  document.getElementsByClassName("submit").style.display="none";
  document.getElementsByClassName("submit2").style.display="true";

  var nBiglietti = parseInt(document.getElementById("number").value);

  //creazione div generale contenente i biglietti
  var Volo = document.createElement("div");
  Volo.setAttribute("class", "biglietti");

  //creazione biglietti in base al numero
  for (var i = 1; i < nBiglietti; i++) 
  {
    //aggiunta biglietto al div generale tramite chiamata alla creazione del biglietto
    Volo.appendChild(campiBiglietto(i));
  }

  //aggiunta del div generale alla pagina html nel punto indicato
  document.getElementById("tickets").appendChild(Volo);
}

function campiBiglietto(number)
{
  //creazione div per singolo biglietto
  var biglietto = document.createElement("div");

  //creazione input per Nome
  var nome = document.createElement("input");
  nome.setAttribute("name", "Nome");
  nome.setAttribute("type", "text");
  nome.setAttribute("placeholder", "Nome persona n° " + number);

  //creazione input per Cognome
  var cognome = document.createElement("input");
  cognome.setAttribute("name", "Cognome");
  cognome.setAttribute("type", "text");
  cognome.setAttribute("placeholder", "Cognome persona n° " + number);

  //creazione input per età
  var eta = document.createElement("input");
  eta.setAttribute("name", "Eta");
  eta.setAttribute("type", "text");
  eta.setAttribute("placeholder", "Età persona n° " + number);

  //aggiunta al div di ogni biglietto dei campi di input
  biglietto.appendChild(nome);
  biglietto.appendChild(cognome);
  biglietto.appendChild(eta);

  return biglietto;
}

function Ordine() 
{
  var partenza = document.getElementById("departure").value;
  var nBiglietti = parseInt(document.getElementById("a").value);

  var prezzo;
  var destinazione;

  //fare in base alla scelta
  switch(document.getElementsByName("scelta").value)
  {
    case 1:{}
  }

  var prezzoTot = nBiglietti * prezzo;
  
    var scontrino = "Dettagli del Volo\n";
    scontrino += "Da: BOLOGNA\n";
    scontrino += "A: " + destinazione + "\n";
    scontrino += "Passeggeri totali: " + nBiglietti + "\n";
    scontrino += "\n";
    scontrino += "Dettagli Passeggeri:\n";
    
  for (var i = 0; i < nBiglietti; i++) 
  {
    var nome = document.getElementsByName("Nome")[i].value;
    var cognome = document.getElementsByName("Cognome")[i].value;
    var cognome = document.getElementsByName("Eta")[i].value;
    
    scontrino += "-PASSEGGERO-" + (i + 1) + ":\n";
    scontrino += "Nome: " + nome + "\n";
    scontrino += "Cognome: " + cognome + "\n";
    scontrino += "età: " + eta + "\n";
    scontrino += "------------------\n";
  }

  scontrino += "Il prezzo totale è: " + prezzoTot + " &#8364;\n\n";

  alert(scontrino);
}