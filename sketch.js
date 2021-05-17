/* 👇 Start writing your p5.js code here */

var afstand = 50;

function setup() {
  createCanvas(1500,1000);
  noLoop();
}

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

function mouseClicked(){
  console.log('Ik ben een stukje tekst');
  afstand = afstand + 10;
  redraw();
}
/* de eerste keer dat de lus wordt uitgevoerd is de waarde van lijn 0.
Elke keer als de loop wordt uitgevoerd telt hij er 50 op en stopt bij lijn = 
700 of groter. */


