"use strict";
function PersonStrict(name2) { this.name2 = name2;}
// below is going to fail because we need to use new
// let ferdinand2 = PersonStrict("Ferdinand");
let ferdinanad2 = new PersonStrict("Ferdinanad2")

// below is going to fail because name2 is local instead 
// with strict mode, this is NOT a global variable
// console.log(name2)
console.log(ferdinanad2.name2)