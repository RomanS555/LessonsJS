const a = [31, 10, 'chicken', 9, 'fish', 10]

console.log(a)//весь массив
console.log(filterArrayOfType(a,"string"))//массив, где только строки
console.log(filterArrayOfVariable(a,10))//массив, где только значения 10



function filterArrayOfType(ar = [], t = ""){
    let newarray = []
    for(let i = 0; i < ar.length; i++){
        if(typeof ar[i] == t){
            newarray += ar[i]
        }
    }
    return newarray
}
function filterArrayOfVariable(ar = [], v){
    let newarray = []
    for(let i = 0; i < ar.length; i++){
        if(ar[i] == v){
            newarray += ar[i]
        }
    }
    return newarray
}