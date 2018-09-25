let idade = prompt("Qual a sua idade?");
let renda = prompt("Qual a sua renda?");
let valor = prompt("Quanto você quer emprestar?");

if(idade < 21 || idade > 55){
  console.log("Você não está na faixa de idade necessária.");
}
else if(renda < 1000){
  console.log("Você não tem renda suficiente para o empréstimo");
}
else if(valor < 500 || valor > 15 * renda){
  console.log("Não podemos emprestar esse valor, pois está fora dos limites.")
}
else{
  let parcelas = prompt("Em quantas parcelas você quer pagar? Pode ser entre 3 e 24 vezes.");
  if(parcelas < 3 || parcelas > 24){
    console.log("Não podemos parcelar na quantidade de vezes pedida.");
  }
  else{
    let total = valor * ((1 + 0.085) ** parcelas);
    console.log(`Seu empréstimo foi aprovado! O valor deve ser quitado a partir do próximo mês em ${parcelas} de ${(total/parcelas).toFixed(2)} reais`);
  }
}