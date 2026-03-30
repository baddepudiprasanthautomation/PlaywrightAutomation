"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    for loop: when we know the exact number of iterations, it is best in business
*/
//for(initialization;conditioncheck;increment/decrement)
// for(let i=0;i<=5;i++)
// {
//     console.log(i);
//     /* to use this method we have to run this command
//      npm install --save-dev @types/node */
//     //process.stdout.write(i)
// }
//declare array 
let data = 20;
let numbers = [10, 11, 12, 13, 14];
for (let value of numbers) {
    console.log(value);
}
//advanced for loop { used for iterating objects and keys }
console.log('advanced for loop');
let student = { name: "TestUser", age: 25 };
for (let key in student) {
    console.log(key + " " + student[key]);
}
//# sourceMappingURL=arrayexample.js.map