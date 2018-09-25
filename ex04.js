let meninos = ["Zézão", "Chicão", "Jão"];
let meninas = ["Mariazinha", "Chiquinha", "Josefinha"];

let i = 0;

while(i < meninos.length){
  let j = 0;

  while(j < meninas.length){
   
    console.log(`Casal: ${meninos[i]} e ${meninas[j]}`);
    j++;
  }

  i++;
}