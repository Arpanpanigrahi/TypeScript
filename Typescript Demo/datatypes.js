"use strict";
let lname;
lname = "Santosh";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false; //default value is false
console.log(isValid);
let empList;
empList = ["Santosh", "Santosh1", "Santosh2"];
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[0];
let results = numList.filter((num) => num > 2);
let num = numList.find((num) => num == 2);
let emp = empList.find((emp) => emp === "Santosh");
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
console.log(emp);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num2];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "IT";
department = 10;
//function add(num1 : number, num2 : number)
