// mostra Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

let raio = diametro/2;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha =6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// mostra minha Raquete
let xRaquete = 5;
let yRaquete = 150;

// mostra raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;


// movimento raquete oponente
let velocidadeYRaqueteOponente = 6;


let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colisaoBolinha();
  mostraMinhaRaquete(xRaquete, yRaquete);
  movimentoMinhaRaquete();
  //colisaoMinhaRaquete(xRaquete, yRaquete);
  
  mostraMinhaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoMinhaRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinha(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha -raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraMinhaRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
  
}
function colisaoMinhaRaqueteBiblioteca(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}


function movimentoMinhaRaquete(){
   if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
   // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
    yRaquete = constrain(yRaquete, 10, 310);
}

function colisaoMinhaRaquete(x,y){
   if(xBolinha - raio < x + raqueteComprimento && yBolinha - raio < y + raqueteAltura && yBolinha - raio > y ){
     velocidadeXBolinha *= -1;
   }

}


function movimentoRaqueteOponente(){
  velocidadeYRaqueteOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYRaqueteOponente;
  
    // Vamos limitar a movimentação da raquete para que ela não ultrapasse as bordas:
    yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
    }
}
