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
var controllo = 0;

function Richiedi() {

  controllo = 1;

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

  //Creazione nome biglietto
  var testo = document.createTextNode("Biglietto numero " + number + " ");

  //creazione input per Nome
  var nome = document.createElement("input");
  nome.setAttribute("name", "nome");
  nome.setAttribute("class", "nome");
  nome.setAttribute("type", "text");
  nome.setAttribute("placeholder", "Nome");

  //creazione input per Cognome
  var cognome = document.createElement("input");
  cognome.setAttribute("name", "cognome");
  cognome.setAttribute("class", "cognome");
  cognome.setAttribute("type", "text");
  cognome.setAttribute("placeholder", "Cognome");

  //creazione scelta tipologia documento
  var documento = document.createElement("select");
  documento.setAttribute("name", "documento");
  documento.setAttribute("class", "documento");

  //creazione tag OPTION per la scelta del documento
  var s0 = document.createElement("OPTION");
  var d0 = document.createTextNode("Selezionare documento");
  s0.appendChild(d0);
  documento.appendChild(s0);

  var s1 = document.createElement("OPTION");
  var d1 = document.createTextNode("Carta di Identità");
  s1.appendChild(d1);
  documento.appendChild(s1);

  var s2 = document.createElement("OPTION");
  var d2 = document.createTextNode("Passaporto");
  s2.appendChild(d2);
  documento.appendChild(s2);

  //creazione input per età
  var nDoc = document.createElement("input");
  nDoc.setAttribute("name", "nDoc");
  nDoc.setAttribute("class", "nDoc");
  nDoc.setAttribute("type", "text");
  nDoc.setAttribute("placeholder", "Numero documento");

  //aggiunta al div di ogni biglietto dei campi di input
  biglietto.appendChild(testo);
  biglietto.appendChild(nome);
  biglietto.appendChild(cognome);
  biglietto.appendChild(documento);
  biglietto.appendChild(nDoc);

  return biglietto;
}

function Ordine() {

  if(controllo==1)
  {
    var nBiglietti = document.getElementById("number").value;

    var prezzo;
    var destinazione;
    var scontrino;

    var scelta = document.querySelector('input[name="sc"]:checked');
    var valoreScelta = scelta ? scelta.value : null;

    if (valoreScelta !== null)
    {
      switch (parseInt(valoreScelta))
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

        default: {
          alert("errore");
        }
      }

      var prezzoTot = nBiglietti * prezzo;

      //generazione posto
      var nPosto = Math.floor(Math.random() * 50) + 1;
      var lPosto = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      
      scontrino = "Volo richiesto:\n";
      scontrino += "Da: BOLOGNA\n";
      scontrino += "A: " + destinazione + "\n";
      scontrino += "N° biglietti richiesti: " + nBiglietti + "\n";
      scontrino += "\n";
      scontrino += "----------BIGLIETTI----------\n";
        
      for (var i = 0; i < nBiglietti; i++) 
      {
        var nome = document.getElementsByName("nome")[i].value;
        var cognome = document.getElementsByName("cognome")[i].value;
        var documento = document.getElementsByName("documento")[i].value;
        var nDoc = document.getElementsByName("nDoc")[i].value;
        
        scontrino += "PASSEGGERO N° " + (i + 1) + ":\n";
        scontrino += "Nome: " + nome + "\n";
        scontrino += "Cognome: " + cognome + "\n";
        scontrino += "Documento: " + documento + "\n";
        scontrino += "Numero documento: " + nDoc + "\n";
        scontrino += "Posto numero: " + lPosto + nPosto + "\n";
        scontrino += "--------------------------------------\n";

        nPosto++;
      }
  
      scontrino += "Prezzo singolo biglietto: " + prezzo + " €\n";
      scontrino += "Prezzo per " + nBiglietti + " persone: " + prezzoTot + " €";
  
      console.log(scontrino);
      alert(scontrino);
    }
    else
    {
      alert("Selezionare una destinazione");
    }
  }
  else
  {
    alert("Richiedere prima i biglietti");
  }
}