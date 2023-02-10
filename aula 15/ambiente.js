let num = [5, 8, 2, 9, 3]
num.push(4)//acrescenta o valor ao final da array
num.sort() //bota em ordem crescente
//se o num.push() estiver nessa linha, ele irá organizar e depois acrescentar o valor
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*
for(pos = 0;pos < num.length;pos++) {
    console.log(num[pos])
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 

estrutura de repetição para mostrar os valores do array em duas linhas
*/

for(let pos in num) {
    console.log(num[pos])
} //para cada posição dentro de num, vou mostrar o num[pos]

let pos = num.indexOf(8) //comando para descobrir a posição do valor no array