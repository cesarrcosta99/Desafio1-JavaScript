// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const person1={
    name:"César",
    age:23,
    sex:"Masculino"
}

const person5={
    name:"Catarine Ferraz",
    age:24,
    sex:"Feminino",
    namoradaDe:"César"
}

const result1=person1.name == person5.name
console.log(result1)

const person6={
    name1:"César",
    name2:"Catarine Ferraz"
}

const result2=person6.name1 == person6.name2
console.log(result2)
