// function myFunc(name, country) {
//   console.log("My name is " + name + " and Im From " +country);

// }

// myFunc("Rahim", "Bangladesh");

// myFunc("Tony Jaa", "China");


// function addNumber(num1, num2) {
  
//  let total = (num1 + num2);
//  return total;

// }

// const result = addNumber(10, 15);
// console.log(result);


// function add(number1, number2, number3){
//     console.log(number1 + number2 + number3);
// }

// add(35, 10, 15);


// function myFunc (money){
//     let eggPrice = 20;
//     let quantity = money / eggPrice;
//     return quantity;
// }
//  const result = myFunc(200);
//  console.log(result);

const products = {
   names: "ipad",
   price: 35000,
   color: "blue"

};

function addToProducts(anyObjects){
    console.log(`Products name is ${anyObjects.names} and Price is ${anyObjects.price}`);
}

addToProducts(products);
