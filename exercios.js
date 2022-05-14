// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Taxa Cliente",
    valor: "R$ 49",
  },
];

// let valorTaxas = 0;
// transacoes.forEach((item)=>{
//   console.log(item.valor)
//   const valorLimpo = +item.valor.replace('R$ ', '');
//   console.log(valorLimpo) //Obs: Foi preciso colocar o sinal de mais antes da expressão item.valor.replace para que os valores passassem a ser do tipo number
//   if(item.descricao.slice(0,4) == 'Taxa'){
//     console.log(item.descricao)
//     valorTaxas = valorTaxas + valorLimpo;
//   }
//   console.log(valorTaxas)
// })

let recebidos = 0;
transacoes.forEach((item) => {
  const valorLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.includes("Recebimento")) {
    recebidos += valorLimpo;
  }
});
console.log(recebidos);


let taxas = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const valorLimpo = +item.valor.replace('R$ ', '');
  if(item.descricao.substring(0,4)=='Taxa') {
    taxas += valorLimpo;
  }
  else{
    recebimentoTotal += valorLimpo;
  }
})
console.log(taxas)
console.log(recebimentoTotal)
