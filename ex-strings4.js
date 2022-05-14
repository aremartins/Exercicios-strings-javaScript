//Escreva uma função que receba uma string e retorne o número de vogais contidas

function contaVogais(a) {
  let count = 0;
  const vogais = ['a', 'e', 'i', 'o', 'u']
  a.split();
  
  for (let i = 0; i < a.length; i++) {
    if (a[i].includes("a") || a[i].includes('i')){
      count++;
    }
  }
  console.log(count);
}

contaVogais("paranabiacaba");
