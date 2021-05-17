/* 👇 Start writing your p5.js code here */

var afstand = 80;
/* Dit is een variabele die de waarde van de afstand tussen de lijnen opslaat. */

function setup() {
  createCanvas(1500,1000);
  noLoop();
}

/* In de function setup wordt het canvas gemaakt die 1500 bij 1000px is. */


function draw() {
  background('#40916c');
  stroke('white');
  strokeWeight(7);
  
  for(var horizontaal = 0; horizontaal < 1500;  horizontaal = horizontaal + afstand){
    for(var verticaal = 0; verticaal < 1500; verticaal = verticaal + afstand){
      drawRandomline(horizontaal, verticaal, afstand);
    }
  }
}

/*In deze loop vul ik het canvas op met de horizontale en verticale lijnen. Door de if else 
zijn deze random op het canvas te zien. De afstand tussen deze lijnen blijft 80.
Verder pas ik in function draw de dikte van de lijnen aan en geef het canvas een nieuwe achtergrondkleur.
*/

function drawRandomline(horizontaal, verticaal,afstand){
  if(random() > 0.5){
    line(horizontaal, verticaal, horizontaal + afstand, verticaal + afstand);
    stroke('white');
    strokeWeight(7);
  }
  else{
    line(horizontaal + afstand, verticaal, horizontaal, verticaal + afstand);
    stroke('orange');
    strokeWeight(7);
  }
}

/* In de function drawrandomline zorg ik ervoor dat het doolhof elke keer veranderd wanneer de gebruiker 
de pagin refreshed.*/

function mouseClicked(){
  console.log('Ik ben een stukje tekst');
  afstand = afstand + 20;
  redraw();
}

/* In deze function vind de interactie plaats. Wanneer de gebruiker op het doolhof drukt wordt er 
20 bij de afstand opgeteld. De afstand is 80 en wordt door 1 mouseclick 100. */


