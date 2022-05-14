//Escreva uma função que recebe uma string
//como parâmetro e converta palavras delimitadas por - e _ em camel case

function converteCamel(a) {
  let upper;
  let palavra1;
  let palavra2;
  let palavraConvertida = [];

  if (a.includes("-")) {
    a = a.split("-");
    palavra1 = a[0];
    upper = a[1].substring(0, 1).toUpperCase();
    palavra2 = a[1].substring(1);
    palavraConvertida = palavra1.concat(upper + palavra2);
    console.log(palavraConvertida);
  } else if( a.includes('_')){
      a = a.split('_')
      palavra1 = a[0];
      upper = a[1].substring(0,1).toUpperCase();
      palavra2 = a[1].substring(1);
      palavraConvertida = palavra1.concat(upper + palavra2)
      console.log(palavraConvertida);
  }
}

converteCamel("camel-case");

converteCamel('Aretha-Mauricio')

converteCamel('Rebecca_Aretha')


//correção
function correcaoCamel(a){
    const partes = a.includes('_') ? a.split('_') : a.split('-')
}