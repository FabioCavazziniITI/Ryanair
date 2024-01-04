//SCROLL IMMAGINI
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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
function Richiedi() {
  //Impedisce invio form facendo svolgere la funzione senza interruzzioni
  event.preventDefault();

  document.getElementById("p_tickets").innerHTML="Biglietti richiesti";

  var nBiglietti = document.getElementById("number").value;

  //creazione div generale contenente i biglietti
  var Volo = document.createElement("div");
  Volo.setAttribute("class", "biglietti");

  //creazione biglietti in base al numero
  for (var i = 0; i < nBiglietti; i++) 
  {
    //aggiunta biglietto al div generale tramite chiamata alla creazione del biglietto
    Volo.appendChild(campiBiglietto(i+1));
  }

  //aggiunta del div generale alla pagina html nel punto indicato
  document.getElementById("tickets").appendChild(Volo);
}

function campiBiglietto(number) {
  //creazione div per singolo biglietto
  var biglietto = document.createElement("div");

  //creazione input per Nome
  var nome = document.createElement("input");
  nome.setAttribute("name", "nome");
  nome.setAttribute("class", "nome");
  nome.setAttribute("type", "text");
  nome.setAttribute("placeholder", "Nome persona n° " + number);

  //creazione input per Cognome
  var cognome = document.createElement("input");
  cognome.setAttribute("name", "cognome");
  cognome.setAttribute("class", "cognome");
  cognome.setAttribute("type", "text");
  cognome.setAttribute("placeholder", "Cognome persona n° " + number);

  //creazione input per età
  var eta = document.createElement("input");
  eta.setAttribute("name", "eta");
  eta.setAttribute("class", "eta");
  eta.setAttribute("type", "text");
  eta.setAttribute("placeholder", "Età persona n° " + number);

  //aggiunta al div di ogni biglietto dei campi di input
  biglietto.appendChild(nome);
  biglietto.appendChild(cognome);
  biglietto.appendChild(eta);

  return biglietto;
}

function Ordine() {
  //Impedisce invio form facendo svolgere la funzione senza interruzzioni
  event.preventDefault();

  var nBiglietti = document.getElementById("number").value;

  var prezzo;
  var destinazione;
  var scontrino;

  //fare in base alla scelta
  switch(document.getElementById("scelta").value)
  {
    //Dubai
    case 1: {
      prezzo = 277;
      destinazione = "DUBAI";
      break;
    }

    //NewYork
    case 2: {
      prezzo = 220;
      destinazione = "NEWYORK";
      break;
    }

    //Londra
    case 3: {
      prezzo = 138;
      destinazione = "LONDRA";
      break;
    }

    //Parigi
    case 4: {
      prezzo = 143;
      destinazione = "PARIGI";
      break;
    }

    //Milano
    case 5: {
      prezzo = 61;
      destinazione = "MILANO";
      break;
    }

    //Venezia
    case 6: {
      prezzo = 211;
      destinazione = "VENEZIA";
      break;
    }

    //Firenze
    case 7: {
      prezzo = 36;
      destinazione = "FIRENZE";
      break;
    }

    //Roma
    case 8: {
      prezzo = 53;
      destinazione = "ROMA";
      break;
    }
  }

  var prezzoTot = nBiglietti * prezzo;
  
  scontrino = "Volo richiesto:\n";
  scontrino += "Da: BOLOGNA\n";
  scontrino += "A: " + destinazione + "\n";
  scontrino += "N° biglietti richiesti: " + nBiglietti + "\n";
  scontrino += "\n";
  scontrino += "----------BIGLIETTI----------\n";
    
  for (var i = 0; i < nBiglietti; i++) 
  {
    var nome = document.getElementsByName("Nome")[i].value;
    var cognome = document.getElementsByName("Cognome")[i].value;
    var eta = document.getElementsByName("Eta")[i].value;
    
    scontrino += "PASSEGGERO N° " + (i + 1) + ":\n";
    scontrino += "Nome: " + nome + "\n";
    scontrino += "Cognome: " + cognome + "\n";
    scontrino += "Età: " + eta + "\n";
    scontrino += "--------------------------------------\n";
  }
  scontrino += "\nIl prezzo totale è: " + prezzoTot + " €";

  alert(scontrino);
}