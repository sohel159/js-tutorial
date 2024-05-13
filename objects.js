
// var roton = {
//   color: "black",
//   "full Name": "Hero Alom",
//   age: 23,
//   height: 5.9,
//   isSingle: true,
//   location: "bandorbon",
//   friends: ["Rahim", "Karim"]
// };
// console.log(roton["friends"]);

// var bike = {
//     price: 200,
//     model: "bangla Mal"
// }

// console.log(bike.model);

var myObj = {
     name: "Hero Alom",
     email: "ran159@gmail.com",
     age: 23,
     location: "bandorbon",
     isSingle: true,
     nextObj: {
        favMovies: "beder Meye Jusna",
        favcolor: "blue"
     }


};

// myObj.friends = ["Karim", "Rahim", "Jodo"];
// myObj.favnum = 55,
// myObj.name = "sohel rana";
// delete myObj.name;

Object.freeze(myObj);

myObj.name = "shakib Khan";


console.log(myObj.name);








