# Curso-JavaScript

#Dicas: 

/*Comentário em CSS*/

<!-- Isso é um comentário em HTML--> 

JS // Comentário

<!-- Convertendo Strings -->
 Valor String  (Convertendo uma string em número inteiro "Number.parseInt(n).)
 Valor String   (Convertendo uma string em número fracionado,"quebrado". "Number.parseFloat(n).)

 Transformar uma string number ema string String(n) ou n.toString()

 // (number + number) para adição
// (string + string) para concatenação, "Comando windows.prompt devolve sempre o valor como uma STRING"

#Formatando Strings

// Formatando Strings:

       // var s = 'JavaScript'
       // 'Eu estou aprendendo s'       // não faz interpolação
       // 'Eu estou aprendendo'+ s      // usa concatenação
       //* `Eu estou aprendendo ${s}`    *// usa template string 
       // s.length // quantos caracteres a string tem
       // s.toUpperCase() // tudo para 'MAIÚSCULAS'
       // s.toLowerCase() // tudo para 'minúsculas'

// Formatando Números:  

var n1 = 1545.50
n1
n1.toFixed(2) - Adiciona 2 casas decimais.
n1.toFixed.replace('.' , ',') = O comando (replace) é a chave para a troca de sinais.

n1.toLocaleString('pt-BR' , {style: 'currency', currency: 'BRL' ou currency: 'USD'}) = toLocaleString está localizando a string em português BR. Já com o style: 'currency' em string ativo está fazendo menção a 'dinheiro' valor monetário, repetindo novamente a palavra ele recebe como real(R$). - Está sintaxe é especial pois ela também é um objeto de JavaScript.



