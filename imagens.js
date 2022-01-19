//Variáveis para armazenar as imagens utilizadas no jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDoPonto;
let somDaColisao;

//Função de Pré carregamento
function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
}