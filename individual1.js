let a = prompt()
let an = Number(a)
let twovalues = [0,1]
let v = 0

for(let i = 1; i < an; i++){
  v = twovalues[0] + twovalues[1]
    if(i%2==0){
      twovalues[0] = v
    }else{
      twovalues[1] = v
    }
    console.log(v)
}
alert(v)