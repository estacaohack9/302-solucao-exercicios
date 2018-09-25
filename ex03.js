let degraus = Number(prompt("Quantos degraus você quer na escadinha?"));
let caracter = prompt("Qual o caracter para construir a escada?");

let i = 1;
let escadinha = caracter;

while(i <= degraus){
  console.log(escadinha);
  escadinha += caracter;
  // escadinha = escadinha + "#";
  i++;
}