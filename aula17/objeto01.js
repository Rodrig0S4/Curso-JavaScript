let amigo = { nome: 'Rodrigo',
sexo: 'M',
peso: 72.2,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
