let number1 = 10;
number1 = "Name and Surname";
let student = { id: 1, name: "Name" };
// console.log(student);
// console.log(number1);

function save(studentExample, grade = 10) {
  console.log(studentExample.name + " : " + grade);
}
// save(student);

let students = ["Student1", "Student2", "Student3", "Student4"];

// console.log(students);

let students2 = [student, { id: 2, name: "Student2Name" }, { city: "City" }];

// console.log(students2);

//rest
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products[0]);
};

// console.log(typeof showProducts);
// showProducts(10, "Apple", "Pear");

//spread operator
let points = [1, 2, 3, 4, 5];

console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC", "D", ..."EFG", "H");

//Destructring

let populations = [10000, 20000, 30000, [40000, 10000]];

let [small, medium, high, [veryHigh, maximum]] = populations;

console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);

function someFunction([small1], number) {
  console.log(small1);
}

someFunction(populations);

let category = { id: 1, name: "Drink" };

console.log(category.id);
console.log(category["name"]);

let { id, name } = category;
console.log(id);
console.log(name);
