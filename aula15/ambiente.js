/* num
            [5, 8, 4]
posições:    0  1  2      
 */

// num[3] = 6 (Acrescenta mais uma posição no caso 3 e valor 6 ao array)
// num.push(7) (Ele acrescenta mais uma posição expecificamente 4 e de valor 7)
// num.length (Cumprimento do vetor)
// num.sort() (Coloca todos os valores do array em ordem crescente)


/* num
            [4, 5, 6, 7, 8]
posições:    0  1  2  3  4  
 */

/* for(let pos=0; pos<num.length; poss++) {
    console.log(num[pos])
}
*/


var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
