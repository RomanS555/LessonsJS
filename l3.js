let cat = 2
let dog = "кот"
let parrot = false
let horse = false

let a = [cat, dog, parrot, horse]
console.log(a.indexOf(parrot))

for(let i = 0;i < a.length;i++){
    if(a[i] === parrot){
        console.log(i); //2 способ решения(может вывести адрес переменной с тем же типом и значением)
    }
}