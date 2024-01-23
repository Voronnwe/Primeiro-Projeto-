alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 50
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`número secreto ${numeroSecreto}`);
let chute;
let tentativas = 0;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    tentativas++
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log(`Chute igual a ${chute}`);
    console.log(`Chute X Número Secreto ${chute == numeroSecreto}`);
    console.log(`número secreto ${numeroSecreto}`);
// Se acertar de primeira 
    if (chute == numeroSecreto) {
        if (tentativas == 1) {
            alert(`Incrível! Você acertou de primeira! O número secreto era realemnte o ${numeroSecreto} Já pensou em jogar na mega sema essa semana?`);
            console.log(`A quantidade de tentativas usadas foi ${tentativas}`);
// Se não acertar de primeira
            } else {
            alert(`Você acertou! O número secreto ${numeroSecreto} com ${tentativas} tentativas`);
            tentativaUsuario = tentativas
            console.log(`A quantidade de tentativas usadas foi ${tentativas}`);
        }
        break
    }
// Repetições de tentativas
    else if (chute > numeroSecreto) {
            alert(`Você não acertou. O número secreto é menor que ${chute}`);
        } else {
            alert(`Você não acertou. O número secreto é maior que ${chute}`);
        }
    }
// Adicionando etapa de soma
    alert("Esse jogo, contudo, não se trata apenas de adivinhar um número qualquer.");
    alert("O que nós queremos aqui é a resposta para a questão fundamental da vida, do universo, e de tudo mais...");
    alert("Será que conseguimos encontrar?");
    alert("Daqui em diante todos os números serão aleatório. Boa sorte!");
    let primeiraSoma;
    let numeroDeAdicao = parseInt(Math.random() * 10 + 1);
    console.log(`O número da adição é ${numeroDeAdicao}`);
    console.log(`A soma é ${numeroDeAdicao + numeroSecreto}`);
    while (primeiraSoma != numeroDeAdicao + numeroSecreto){
        primeiraSoma = prompt(`Qual o valor da soma entre o ${numeroSecreto} e ${numeroDeAdicao}?`);
        if (primeiraSoma == numeroDeAdicao + numeroSecreto){
            alert(`Parabéns! Você acertou, a soma é ${primeiraSoma}`);
            console.log(`Valor da soma é ${numeroDeAdicao + numeroSecreto}`);
            break
        } else {
            alert(`Infelizmente está errado. A soma entre ${numeroDeAdicao} e ${numeroSecreto} não é essa. Por favor, tente novamente.`);
        }
    } 
// Adicionando etapa de multiplicação
    let primeiraMultiplicacao;
    let numeroDeMultiplicacao = parseInt(Math.random() * 3 + 1);
    console.log(`O número da multiplicação é ${numeroDeMultiplicacao}`);
    console.log(`A multiplicação é ${numeroDeMultiplicacao * primeiraSoma}`);
    while (primeiraMultiplicacao != numeroDeMultiplicacao * primeiraSoma){
        primeiraMultiplicacao = prompt(`Qual a multiplicação entre ${numeroDeMultiplicacao} e ${primeiraSoma}`);
        if (primeiraMultiplicacao == numeroDeMultiplicacao * primeiraSoma){
            alert(`Muito bem! O produto entre esses valores é ${primeiraMultiplicacao} `);
            break
        } else {
            alert(`Infelizmente está errado. O produto entre ${numeroDeMultiplicacao} e ${primeiraSoma} não é essa. Por favor, tente novamente.`);
        }
    }
// Adicionadno etapa de subtração
    alert("Estamos quase lá! Essa é a última etapa.");
    let primeiraSubtracao;
    let numeroDeSubtracao = parseInt(Math.random() * 20 + 1);
    console.log(`O número da subtração é ${numeroDeSubtracao}`);
    console.log(`A subtração é ${primeiraMultiplicacao - numeroDeSubtracao}`);
    while (primeiraSubtracao != primeiraMultiplicacao - numeroDeSubtracao){
        primeiraSubtracao = prompt(`Qual o valor da subtração entre ${primeiraMultiplicacao} e ${numeroDeSubtracao}`);
        if (primeiraSubtracao == primeiraMultiplicacao - numeroDeSubtracao){
            alert("Muito bem, você acertou!");
            break
        } else {
            alert(`Infelizmente você errou. O valor da subtração entre ${primeiraMultiplicacao} e ${numeroDeSubtracao} não é esse. Por favor, tente novamente`)
        }
    }
    alert("Aguarde alguns instantes enquanto trabalhos na resposta...")
    let contador = 1
    while (contador <= 10){
        console.log(contador);
        contador++
    }
    console.log(tentativas);
    
// Adicionando etapa final
let valorFinal1;
let valorFinal2;
    if (primeiraSubtracao == 42){
        console.log("Cagada MONSTRA");
        alert("Uau, você conseguiu! Agora você tem em mãos a resposta para questão fundamental da vida, do universo, e de tudo mais...");
        alert("Fim!");
    } else if (primeiraSubtracao > 42){
    valorFinal1 = (primeiraSubtracao - tentativas);
    console.log(`Número de tentativas foi ${tentativas}`);
    console.log(`Situação em que valor > 42. O valor da subitração é ${valorFinal1}`);
    console.log(valorFinal1);
    if (valorFinal1 == 42){
        alert("Uau, você conseguiu! Agora você tem em mãos a resposta para questão fundamental da vida, do universo, e de tudo mais...");
    } else {
        alert("É, não foi dessa vez que conseguimosa resposta para questão fundamental da vida, do universo, e de tudo mais... Quem sabe numa próxima.");
        alert("Fim!");
    }
}
    if (primeiraSubtracao < 42){
        valorFinal2 = (primeiraSubtracao + tentativas);
        console.log(`Número de tentativas foi ${tentativas}`);
        console.log(`Situação em que valor < 42. O valor da adição é ${valorFinal2}`);
        console.log(valorFinal2);
        if (valorFinal2 == 42){
            alert("Uau, você conseguiu! Agora você tem em mãos a resposta para questão fundamental da vida, do universo, e de tudo mais...");
        } else {
            alert("É, não foi dessa vez que conseguimosa resposta para questão fundamental da vida, do universo, e de tudo mais... Quem sabe numa próxima.");
            alert("Fim!"); 
        }
        
    }
