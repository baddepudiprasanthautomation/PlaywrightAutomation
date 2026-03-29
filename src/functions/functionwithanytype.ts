/*
 it allows any type of value 
*/

function printData(data:any):any{
    if( data == "test")
        return data;
}

console.log(printData("Test Automation"));
console.log(printData(100));
console.log(printData(true));
console.log(printData(null));

