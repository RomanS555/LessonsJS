let cat = 2
let dog = "кот"
var parrot = false
let horse = false
var chicken = 0
var fish = "кит"
let lion = true

let a = [cat, dog, parrot, horse, fish, chicken, lion]
console.log(a)// весь массив
console.log(removeFromArray(a,fish))// массив без fish
console.log(removeFromArray(a,cat))//массив без cat
console.log(removeFromArray(a,a[a.length-1]))//массив без последнего элемента
console.log(removeFromArray(removeFromArray(a,a[a.length-1]),a[a.length-1]))//массив без последних двух элементов

//или

const arr = [cat, dog, parrot, horse, fish, chicken, lion]

console.log(arr)// весь массив
console.log(arr.splice(6,1))//массив без fish
console.log(arr.splice(0,1))//массив без cat
console.log(arr.pop())//массив без последнего элемента
console.log(arr.pop().pop())//массив без последних двух элементов







function removeFromArray(array = [], item){
    let newarray = []
    let indexItem = array.indexOf(item)
    for(let i = 0; i < array.length; i++ ){
        if(i != indexItem){
            newarray += array[i]
        }
    }
    return newarray;
}


