export{};
/*
  switch - statement is used to execute one block of code among many options based on a value.

   Works with number, string, boolean, enums
   Always use break to avoid unwanted execution
   default is optional but recommended
   Cleaner than long if-else chains
*/

let role: string = "";

switch (role) {
  case "admin":
    console.log("Full access");
    break;

  case "user":
    console.log("Limited access");
    break;

  case "guest":
    console.log("Guest access");
    break;

  default:
    console.log("Unknown role");
}

console.log("switch without break statement");
//switch without break statement

let grade: string = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Good");
  case "C":
    console.log("Average");
    break;
}

//multiple cases with same output
let fruit: string = "orange";

switch (fruit) {
  case "apple":
  case "banana":
  case "orange":
    console.log("This is a fruit");
    break;

  default:
    console.log("Unknown item");
}