// variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 15
let raio = diametro / 2

// velocidade da bolinha
let velocidadeXBolinha = 5
let velocidadeYBolinha = 5

// variaveis da raquete
let xRaquete = 5
let yRaquete = 150
let comprimentoRaquete = 10 
let alturaRaquete = 90

let colidiu = false

function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaquete()
  movimentaRaquetePlayer1()
  // verificaColisaoRaquete()
  colisaoMinhaRaqueteBiblioteca()
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete)
}

function movimentaRaquetePlayer1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + comprimentoRaquete && 
    yBolinha - raio < yRaquete + alturaRaquete && 
    yBolinha + raio > yRaquete
    ) {
    velocidadeXBolinha *= -1
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu) {
    velocidadeXBolinha *= -1
  }
}