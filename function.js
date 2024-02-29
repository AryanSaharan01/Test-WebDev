function lines(name) {
  console.log("Heyy " + name + " buddy");
  console.log("My name is " + name);
  console.log(name + " is great human");
}
lines("Aryan Saharan")
console.log("---------------------------------------------")


function sum(a,b) {
    console.log("The sum is "+ (a + b))
}
sum(5,9)
console.log("---------------------------------------------")

function multiply(a,b) {
    return a*b
}
result = multiply(7,3)
result1 = multiply(71,6)
console.log("The product of these numbers is :", result)
console.log("The product of these numbers is :", result1)
console.log("---------------------------------------------")

const func = (x)=>{
    console.log("Arrow function: ", x)
}

func(12)
func(37)
func(64)