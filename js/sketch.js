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

// variaveis do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente

// placar do jogo
let meusPontos = 0
let pontosOponente = 0

let colidiu = false

function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaquetePlayer1()
  // verificaColisaoRaquete()
  verificaColisaoRaquete(xRaquete, yRaquete)
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente()
  incluiPlacar()
  marcaPonto()
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

function mostraRaquete(x, y) {
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentaRaquetePlayer1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30
  yRaqueteOponente += velocidadeYOponente
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

// Utilizando a Biblioteca p5.collide.js
function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu) {
    velocidadeXBolinha *= -1
  }
}

function incluiPlacar() {
  fill(255)
  text(meusPontos, 270, 25)
  text("vs ", 300, 25)
  text(pontosOponente, 330, 25)
}

function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos += 1
  }
  if (xBolinha < 10) {
    pontosOponente += 1
  }
}