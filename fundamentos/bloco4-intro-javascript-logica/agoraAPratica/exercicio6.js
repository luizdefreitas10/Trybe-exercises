let pecaXadrez = "Rei";
 

switch (pecaXadrez.toLowerCase()) {
    case "peão": 
    console.log("Peão - anda uma casa para frente ou para trás, podendo atacar pelas diagonais.")
    break;
    case "cavalo": 
    console.log("Cavalo - anda em L e pode pular sobre as peças.");
    break;
    case "bispo": 
    console.log("Bispo - anda em diagonais.");
    break;
    case "torre": 
    console.log("Torre - anda nas verticais e horizontais, quantas casas quiser.");
    break;
    case "rainha": 
    console.log("RRainha - anda nas diagonais, horizontais e verticais.");
    break;
    case "rei": 
    console.log("Rei - anda apenas uma casa em qualquer direção."); 
    break;
    default: 
    console.log("Não é uma peça de xadrez.");
}
   