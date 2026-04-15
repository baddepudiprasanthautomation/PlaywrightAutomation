"use strict";
//enum: it is a way to define set of named constants
//advantage: more readable and maintainable
var Days;
(function (Days) {
    Days["Sunday"] = "today is sunday and it is default holiday";
    Days[Days["Monday"] = 1] = "Monday";
    Days["Tuesday"] = "true";
    // WednesDay,
    // Thursday,
    // Friday
})(Days || (Days = {}));
let day = Days.Sunday;
console.log(day);
console.log(Days);
//# sourceMappingURL=enumexample.js.map