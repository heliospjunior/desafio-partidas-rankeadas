let vitorias = 100;
let derrotas = 5;
let nivel = 0;
let saldo = vitorias - derrotas;


function heroi(){
    if (saldo < 10) {
        nivel = "Ferro";
      
     } else if (11 < saldo && saldo < 20){
        nivel = "Bronze";
       
    } else if (21 < saldo && saldo < 50) {
        nivel = "Prata"
      
    } else if (51 < saldo && saldo < 80){
        nivel = "Ouro"
       
    } else if (81 < saldo && saldo < 90){
        nivel = "Diamante"
       
    } else if (91 < saldo && saldo < 100){
        nivel = "Lendário"
       
    } else if (saldo >= 101){
        nivel = "Imortal"
        }

    console.log("O Herói tem o saldo de " + saldo + " está no nível de " + nivel);
}

heroi();