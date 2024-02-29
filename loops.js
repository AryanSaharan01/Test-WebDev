console.log("Loops in JS");
let a = 2;
console.log(a);
console.log(a + 3);

for (let i = 1; i < 5; i++) {
  console.log("This New " + i + " nbr " + i);
}
console.log("---------------------------------------------")

let obj = {
  Name: "Aryan Saharan",
  Roll_no: "98728712",
  Course: "Btech CSE",
};

for (const key in obj) {
  console.log(key)
}


// for (const key in obj) {
//   const element = obj[key];
//   console.log(key)
//   console.log(key +": "+element)
// }
console.log("---------------------------------------------")
for (const xyz of "Aryan Saharan") {
   console.log(xyz)
}

console.log("---------------------------------------------")
let i = 1;
while (i<3) {
  console.log(i)
  i++;
}


console.log("---------------------------------------------")
let j =2;
do {
  console.log(i)
  j++;
} while (j<3);
