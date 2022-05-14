//Retorne um array com a lista abaixo:

const transportes = 'Carro;Avião;Trem;Onibus;Bicicleta';

console.log(transportes.split(';'))

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split('span').join('a'))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(-1))
console.log(frase[frase.length -1])
console.log(frase[13])

