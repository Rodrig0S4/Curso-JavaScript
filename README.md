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

# Formatando Strings

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

<!-- Operadores 1 -->

# Ordem de Precedência.

// ()
// ** 
// * | / | % = Todas tem a mesma importância, só tem uma condição de resolução que é da esquerda para a direita.
// + | - = Seguindo o mesmo do exemplo acima sempre da esquerda para a direita.

var a = 5 + 3 = 8
var b = a % 5 = 3
var c = 5 * b ** 2 = 45
var d = 10 - a / 2 = 6
var e = 6 * 2 / d = 2
var f = b % e + 4 / e = 3

// Caso a variável receba ela mesmo pode-se usar o (n += 4)

var n = 3 
n = n + 4 | n += 4
n = n - 5 | n -= 5
n = n = * 4 | n *= 4
n = n / 2 | n /= 2
n = n ** 2 | n **= 2
n = n % 5  | n %= 5

# Incremento 
var x = 5 
x = x + 1 |  x += 1 | x++ | Pré incremento ++x & --x
x = x - 1 |  x -= 1 | x-- 

# Operadores 2
// <!-- Operadores Relacionais -->

// 5 > 2 = true
// 7 < 4 = false
// 8 >= 8 true
// 9 <= 7 false
// 5 == 5 true
// 4 != 4 false

// Ex:
// preço >= 200.50 -- // o preço é maior ou igual a  200.50?
// idade <18 // a idade é menor do qe 18?
// curso == 'JavaScript'
// n1 != n2 

# Identidade

// 5 == 5 
// 5 == '5'  (= recebe | == igual | === identico)
// 5 === '5'
// 5 === 5   (!= diferente | !== 'desigual restrito')

<!-- Operadores Lógicos -->

// ! = negação 

 ! true(false) 
   false(true)

// && = conjunção ou o 'E (&) lógico' 

   true && true = true
   true && false = false
   false && true = false
   false && false = false

// || = disjunções 2 pipelines ou lógico

 true || true = true 
 true || false = true
 false || true = true
 false || false = false

 // Ordem de resolução primeiro o não!, depois o & e por último o | ou.

 Ex: 
 idade >=15 && idade <= 17 // a idade está entre 15 e 17?

 estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?

 salário > 1500 && sexo != 'M' // o salario é acima de 1500 e não é homem?

 Precedência em expressões {
       () ** / = Operadores Aritméticos
       > < >= = Operadores Relacionais não tem ordem de precedência
       ! && || = Operadores Lógicos tem ordem de precedÊncia.
 }

 Ternário {
       ? =
       : =
       média >=7.0 : "Aprovado" : "Reprovado"
 }