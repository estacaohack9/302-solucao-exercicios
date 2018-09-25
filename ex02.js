const segredo = Math.floor(Math.random() * 50) + 1;

let palpite = Number(prompt("Adivinha o número! Entre 1 e 50"));

while(palpite !== segredo){
  if(palpite > segredo){
    alert("Errou! Era um número menor!");
  }
  else{
    alert("Errou! Era um número maior!");
  }
  
  palpite = Number(prompt("Tente novamente:"));
}

alert("Acertou!");
