function iniciarContagem() { //função para iniciar a contagem regressiva
    let numero = document.getElementById("numeroInicial").value;
    //obtém o valor do número inserido pelo usuario
     let resultado = document.getElementById("resultado");
     //seleciona o elemento onde o resultado será exibido
     resultado.innerHTML = "";
     //limpa o resultado anterior

     do { //inicia a estrutura de repetição
        resultado.innerHTML += numero + "<br>";
        //adiciona o número atual ao resultado
        numero--;
        //decrementa o numero
     } while (numero >= 0);
     //condição: a contagem continua até o número ser menor que 0
}

function mostrarMultiplos(){
   let limite = document.getElementById("numeroLimite").value;
   let resultado2 = document.getElementById("resultado2");
   resultado2.innerHTML = "";

   let i = 1;
   do{
      if(i % 5 === 0) {
         resultado2.innerHTML += i + " é multiplo de 5 <br>";
      }
      i++;
   } while (i <= limite);
}