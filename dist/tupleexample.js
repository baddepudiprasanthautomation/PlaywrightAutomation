"use strict";
//tuple enables storing multiple fields of different types
// let toupleName: [type1,type2,type3.....]
//declaration
let mytouple;
mytouple = ["Test", 2026, "Automation"];
console.log(mytouple);
console.log(mytouple[1]);
//empty tuple
let emptyTuple = [];
//adding data
emptyTuple[0] = "Prasanth";
emptyTuple[1] = 313;
console.log(emptyTuple);
//tuple in functions
function getUser() {
    return ["prasanth", "Hyderabad"];
}
console.log(getUser());
let data = getUser();
console.log(data[0]);
//tuple with optional params
let exampleTuple;
exampleTuple = ["A", 1, 2, "B"];
console.log(exampleTuple);
exampleTuple = ["A", 1, 2];
console.log(exampleTuple);
//tuple with rest elements
let marks = ["Physics", [1, 2, 3]];
console.log(marks);
//# sourceMappingURL=tupleexample.js.map