let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])         
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* for(let pos=0; pos<num.length; poss++) {
    console.log(num[pos])
}


 for(let ou var pos in num) = para cada posição (dentro ou em) de num {
     console.log(num[pos]) = vai mostrar o num pos
 }

*/

/* num
            [4, 5, 6, 7, 8]
posições:    0  1  2  3  4  

num.indexOf(7) = posição 3
num.indexOf(3) = realiza a procura do valor 3, porém não encontrando retorna o valor de -1 
como resposta da pesquisa dentro do vetor.
*/

/*for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}