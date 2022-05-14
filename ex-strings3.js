// Retorne o total de taxas
let transacoes = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
console.log(transacoes.length);

let soma = 0;
for (let i = 0; i < transacoes.length; i++) {
  if (
    transacoes[i].includes("Taxa") ||
    transacoes[i].includes("taxa") ||
    transacoes[i].includes("TAXA")
  ) {    
    soma += 1;
  }
}
console.log(soma);

//Solução 2
let soma2 = 0;
transacoes.forEach((item) => {
  item = item.toLowerCase();
  if (item.includes("taxa")) {
    soma2++;
  }
});
console.log(soma2);

//Solução 3
somaTaxas = 0;
transacoes.forEach((item) => {
    item = item.toLowerCase().trim().slice(0,4)
    if(item === 'taxa'){
        somaTaxas++;
    }
})
