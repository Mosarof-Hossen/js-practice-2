/**
 * undefined--->> not define
 */
let money;
console.log(money)

function total (a,b){
   console.log("value of parameters",a,b)
   const sum =a+b;
   console.log(sum)
}
// total()
// const result=total(10,20)
// total(2)
const result=total(40,7)
console.log(result)

function total2 (a,b){
   console.log("value of parameters",a,b)
   if(a=== undefined || b===undefined){
    return;
   }
  if(a&b){
    const sum=a+b;
    return sum;
  }
}

const result2=total2(20)
console.log("result2 "result2)

//null  
