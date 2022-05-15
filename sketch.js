let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;
let xraquete=5;
let yraquete = 150;
let xraqueteoponente=585;
let yraqueteoponente = 150
let altraquete = 10;
let larraquete = 90;
let hit = false;
let hit2 = false;
let meuspontos = 0;
let pontosoponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xbolinha, ybolinha, diametro);
  
  text(meuspontos,150,26);
  fill(255);
  text(pontosoponente, 450,26);
  
  
  rect(xraquete,yraquete,altraquete,larraquete);
  
  rect(xraqueteoponente,yraqueteoponente,altraquete,larraquete);
  
  velocidadeyoponente = ybolinha - yraqueteoponente - larraquete/2 - 30;
  
  yraqueteopoente += velocidadeyoponente;
  
    
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  
  hit = collideRectCircle(xraquete,yraquete,altraquete,altraquete, xbolinha, ybolinha, diametro);
  
  hit2 = collideRectCircle(xraqueteoponente,yraqueteoponente,altraquete,larraquete, xbolinha, ybolinha, diametro);
  
  if (xbolinha+raio > width ||xbolinha-raio <0) 
      velocidadexbolinha *= -1;     
  
  if (ybolinha+raio> height ||ybolinha-raio <0)
    velocidadeybolinha *= -1;
  
  if(xbolinha >590){meuspontos +=1;
                   if (xbolinha <10){pontosoponente +=1;}}
  
  if(hit){velocidadexbolinha *=-1;}
  
  if(hit2){velocidadexbolinha *=-1;}
  
  if (keyIsDown(UP_ARROW)){
    yraquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete +=10;
  }
}