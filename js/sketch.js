// variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 15
let raio = diametro / 2

// velocidade da bolinha
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

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

// sons do jogo
let raquetadaSom
let pontoSom
let trilhaSonora

// codigos das teclas
let teclaW = 87
let teclaS = 83

function preload() {
  trilhaSonora = loadSound('../assets/music/trilha.mp3')
  raquetadaSom = loadSound('../assets/music/raquetada.mp3')
  ponto = loadSound('../assets/music/ponto.mp3')
}

function setup() {
  createCanvas(600, 400);
  trilhaSonora.loop()
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
  if (keyIsDown(teclaW)) {
    yRaqueteOponente -= 10
  }
  if (keyIsDown(teclaS)) {
    yRaqueteOponente += 10
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + comprimentoRaquete && 
    yBolinha - raio < yRaquete + alturaRaquete && 
    yBolinha + raio > yRaquete
    ) {
    velocidadeXBolinha *= -1
    raquetadaSom.play()
  }
}

// Utilizando a Biblioteca p5.collide.js
function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu) {
    velocidadeXBolinha *= -1
    raquetadaSom.play()
  }
}

function incluiPlacar() {
  stroke(255)
  textSize(24)
  textAlign(CENTER)

  fill(color(255,140,0))
  rect(150, 10, 40, 23)
  fill(255)
  text(meusPontos, 170, 30)

  text("vs ", 300, 30)

  fill(color(255,140,0))
  rect(450, 10, 40, 23)
  fill(255)
  text(pontosOponente, 470, 30)
}

function marcaPonto() {
  if(xBolinha > 590) {
    meusPontos += 1
  }
  if (xBolinha < 10) {
    pontosOponente += 1
  }
}