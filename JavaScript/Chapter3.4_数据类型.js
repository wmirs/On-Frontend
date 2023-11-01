console.log(typeof true);
console.log(typeof null);
console.log(typeof 99);
console.log(typeof "Hello World");
console.log(typeof undefined);

console.log(1.)
console.log(1.000)
console.log(31250000)
console.log(3.125e7)
console.log(0.00000000017)

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE - Number.MIN_VALUE)
console.log(Number.MAX_VALUE + Number.MAX_VALUE)
console.log(isFinite(Number.MAX_VALUE + Number.MAX_VALUE))

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

console.log(0 / 0)
console.log(0 / -0)
console.log(1 / 0)
console.log(1 / -0)



console.log(isNaN(NaN))
console.log(isNaN(5))
console.log(isNaN("5"))
console.log(isNaN(true))
console.log(isNaN("true"))
console.log(isNaN(null))
console.log(isNaN(undefined))

console.log(Number(NaN))
console.log(Number(5))
console.log(Number("5"))
console.log(Number(true))
console.log(Number("true"))
console.log(Number(null))
console.log(Number(undefined))

console.log(parseInt("017"))
console.log(parseInt("017", 8))
console.log(parseInt("017", 10))

const value= 5;
const exponent = "second";
const interpolatedString = 
  value + " to the " + exponent + " power is " + (Math.pow(value, 2));
const interpolatedTemplateLiteral = 
  `${ value } to the ${ exponent } power is ${ Math.pow(value, 2) }`


console.log(interpolatedString);
console.log(interpolatedTemplateLiteral);



const sym = Symbol()
console.log(sym)
console.log(typeof sym)

const sym1_1 = Symbol();
const sym1_2 = Symbol();
console.log(sym1_1 == sym1_2);
console.log(sym1_1 === sym1_2);

const sym2_1 = Symbol("foo");
const sym2_2 = Symbol("foo");
console.log(sym2_1 == sym2_2);
console.log(sym2_1 === sym2_2);

const sym3_1 = Symbol.for("xxx")
const sym3_2 = Symbol.for("xxx")
console.log(sym3_1 == sym3_2);
console.log(sym3_1 === sym3_2);

const obj = new Object();
obj.name = "RemiliaScarlet";
obj.age = 500;
obj.friends = ["FlandreScarlet", "Cirno", "Sakura"]
console.log(obj.toLocaleString())
console.log(obj.toString())
console.log(obj.valueOf())
console.log(obj.hasOwnProperty("name"))
console.log(obj.propertyIsEnumerable("name"))
console.log(obj.propertyIsEnumerable("age"))
console.log(obj.propertyIsEnumerable("friends"))
