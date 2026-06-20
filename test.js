var text = "Azza";

var len = text.length;

var char = text.charAt(0);

unicode = text.charCodeAt(0);

codeToChar = String.fromCharCode(65, 75);

//console.log(codeToChar);

first = "Welcome";
second = "Backme222";

full = first.concat(" ", second);

start = full.startsWith("W", 0);
end = full.endsWith("o", 6);
include = full.includes("Ba");
// left - right
sub = full.indexOf("me", 5);
// right - left
lastSub = full.lastIndexOf("me", 11);
matchers = full.search(/\d/);
// not a translation, it compares values by each others order apha in different langauges
translation = first.localeCompare("Bienve", "fr");
//console.log(lastSub)

match = full.match(/\d+/);
rep = full.repeat(5);
repl = full.replace("Wel", "Bic");
part = full.slice(1, 4);
sub = full.substr(5, 3);
subs = full.substring(1, 4);
sp = full.split(" ", 1);
//console.log(part)
//console.log(sp)

var normal = "Baby \t Shout me \n down.";

//console.log(normal)

var rawString = String.raw`Baby \t Shout me \n down.`;

//console.log(rawString)

// Numbers
// 7=(8954468)
var num = 9231263.5;
// Return string
var frac = num.toExponential(5);
fix = num.toFixed(5);

precision = num.toPrecision(5);

//console.log(frac)
//console.log(precision)

finit = Number.isFinite(NaN);

integer = Number.isInteger(num);
nb = Number.isNaN(NaN);
n = Number.parseInt("123.5");
ceil = Math.ceil(-2.7);
floor = Math.floor(23 / 5);
//console.log(nb)
/* console.log(ceil)
console.log(floor)
console.log(Math.trunc(n)) */

// array
tableau = [5, 0, 12, 12, 5];

taille = tableau.length;

verif = Array.isArray(tableau);

find_indx = tableau.indexOf(5);
verif_element = tableau.includes(5);
find_last = tableau.lastIndexOf(5);

str = tableau.join("*");

morceau = tableau.slice(1, 4);

//console.log(verif_element)
nouveau = tableau.concat(11, 17);

//console.log("On Concat "+nouveau)
//console.log("On Concat "+ tableau)

copy = nouveau.copyWithin(5, 3, 5);
//console.log(copy)
//console.log(nouveau)

//console.log(copy.length === nouveau.length)

//fill = tableau.fill(12,2,4)
//console.log(fill)
//console.log(tableau)

//reverse = tableau.reverse()

//console.log("Reversed "+reverse)
//console.log("Original "+tableau)

//sorted = tableau.sort((a,b)=>a-b)

sliceFrom = tableau.splice(2, 0, 99, 10);

//console.log(sliceFrom)
//console.log(tableau)

for (let [index, value] of tableau.entries()) {
  //console.log(index,value)
}

for (let index of tableau.keys()) {
  //console.log(index)
}

for (let value of tableau.values()) {
  // console.log(value)
}

allConditionMustTrue = /* [] */ tableau.every((value, index, array) => {
  //console.log(value,index,array)
  return value > 0;
});

testUntillTrue = /* tableau */ [].some((value, index, array) => {
  //console.log(value,index,array)
  return value > 0;
});

//console.log(allConditionMustTrue)

//console.log(testUntillTrue)

doubled = tableau.map((value, index, array) => {
  return value > 5;
});

filtred = tableau.filter((value, index, array) => {
  return value > 100;
});

element = tableau.find((value) => value > 100);

indexElement = tableau.findIndex((value) => value > 100);
/* console.log(doubled)
console.log(filtred)
console.log(element)
console.log(indexElement)
 */
v = tableau.forEach((element) => {
  //console.log(element*8)
});
//console.log(v)

obj1 = tableau.reduce((previous, current, currentIndex, array) => {
  //console.log("b " + previous)
  //console.log("c " + current)
  previous[current] = (previous[current] || 0) + 1;
  return previous;
  /* previous > current ? previous : 0 */
  /* previous +current */
}, {});
//console.log(obj1)
//console.log(undefined +1)
//console.log(obj1[5])

obj2 = tableau.reduceRight((previous, current) => {
  return previous - current;
});

obj3 = tableau.reduce((previous, current) => previous - current);

//console.log(obj2)
//console.log(obj3)

//removeLast = tableau.pop()

//console.log(lastElement)

//addLast = tableau.push(3)

//removeFirst = tableau.shift()

//addFirst = tableau.unshift(7)

//console.log(tableau,addFirst)

// fun

function test(a, b) {
  console.log(a, b);
}

function test2() {
  return "Hello";
}

function somme(a, b, c) {
  return a + b + c;
}

argsNumber = test.length;
funcName = test.name;
proFunc = test.prototype;
//instance = new test(3,5)

arrow = (a, b) => console.log(a, b);

//console.log(arrow.prototype)

//console.log(test.prototype.constructor ===test,proFunc)

//call = test.call(null,5,4)
callTest = test2.call();
callSomme = somme.call(null, 2, 2, 2);
//console.log(callSomme)
callSomme = somme.call(null, 2, 2, 2);
app = somme.apply(null, [2, 2, 2]);
bind = somme.bind(null, 5);

//console.log(bind(2,2,3))

//console.log(typeof NaN, typeof undefined,typeof null)

set = new Set(tableau);
size = set.size;
added = set.add(7);
hasElement = set.has(4);
deletedElement = set.delete(7);
//set.clear()
//console.log(deletedElement,set)

for (value of set.entries()) {
  //console.log(value)
}

for (value of set.values()) {
  //console.log(value)
}

set.forEach((value) => {
  //console.log(value)
});

map = new Map();
obj5 = {};
obj1[5] = "x";
addedToMap = map.set("name", "Sumit");
map.set("age", 33);
map.set(5, "x");
mapSize = map.size;
foundElement = map.get("Sumit");
verifyElement = map.has(5);
deleted = map.delete(5);
//map.clear();
//console.log(deleted,map)

for ([key, value] of map.entries()) {
  //console.log(key,value)
}

for (key of map.keys()) {
  //console.log(key)
}

for (value of map.values()) {
  //console.log(value)
}

map.forEach((key, value) => {
  //console.log(key,value)
});



function calculeMoyenne() {
  /*  let mark1 = 13;
  let mark= 13; */
  return (note1 + note2) / 2 /* (mark+mark1) / 2 */
  /* (note1 + note2) / 2 */;
}
/* for(i in [1,2]){
 
    console.log(mark+mark1)
} */


//console.log(calculeMoyenne());
for(i in [1]){
    var note1 = 15;
     
    var note2 = 15;
 
    //console.log(note1,note2)
}
//console.log(x)
var x= 30
var x = 50
//console.log(x)

//console.log(y)
if(true) {
    //let y =55
}
let y = 40
y = 55
//let y = 30
//console.log(y)

const arr = [1,2,3]
/* arr = [1,2]
console.log(arr) */
//console.log(undefined+undefined, Number.isNaN(undefined))


function calculate(a=5){
    return a*5;
}

//console.log(calculate());

function multiply (...allValues){
 return allValues.reduce((previous,current)=>previous*current,1)
}

//console.log(multiply(6,7))

arrowFunc = (a) => {
    return a*6
}

//console.log(arrowFunc(5))

function regular(a,b){
    console.log(arguments)
}

//regular()
//console.log(`Hello ${x}`)

//console.log(Number.parseFloat("101.55"))
//console.log(Number.parseInt("1010",2))

for(index in tableau){
    //console.log(index)
}

for(value of tableau){
    //console.log(value)
}

let objet = new Object()
source1 = {name:"azza"}
source2 = {age:44}
let array = []
ref = objet.constructor
refToArray = array.constructor

nobj = Object.assign(objet,source1,source2)
//console.log(nobj,objet)
animal = {
    speak: function (){
        console.log("Hub")
    }
}

dog = Object.create(animal,{name: {value:"Rex"}})
//dog.speak();

//console.log(dog.name)

props = Object.defineProperties(dog,{
  lastName:{
    value: "ABBY"
}})

prop = Object.defineProperty(dog,"food",{
    value:"Viande",
    writable: false,
    enumurable:true,
    
  
})

prop.food="Herbs"

//Object.freeze(dog)
dog.name = "Look"
//console.log(dog.name)

ownprop = Object.getOwnPropertyDescriptor(dog,"name")
propNames = Object.getOwnPropertyNames(dog)
propsSymbol = Object.getOwnPropertySymbols(dog)
prototype = Object.getPrototypeOf(dog)
//console.log(prototype===animal)

equality = Object.is(NaN,NaN)
ext = Object.isExtensible(dog)
//prevext = Object.preventExtensions(dog)
ext = Object.isExtensible(dog)
//fr = Object.isFrozen(dog)
//seal = Object.seal(dog)
sealed = Object.isSealed(dog)
newPrototype = {name:"Hua", age:22}
//bject.setPrototypeOf(dog,newPrototype)
keys = Object.keys(dog)
//console.log(Object.getPrototypeOf(dog)==newPrototype)

//console.log(dog.hasOwnProperty("name"))

cat = Object.create(animal)
console.log(cat.isPrototypeOf(animal))
console.log(animal.isPrototypeOf(cat))
obj = { name: "Alice" }

console.log(obj.propertyIsEnumerable("name"))

console.log(obj.toString())

console.log((5053413689).toLocaleString("de-DE"))

console.log(obj.valueOf())

day = 1
switch(day){
  case 0 :
    console.log("Sunday")
  case 1:
    console.log("Monday")
    break;
  case 2 :
    console.log("Tuesday")
}

//correc
console.log(1+"2"+3)

console.log(
  Boolean(""),Boolean(0),Boolean(-0),Boolean(NaN),
Boolean(null), Boolean(undefined), Boolean([]),
Boolean({}))

console.log("2"-1)
//(function(){console.log(5)})()
console.log(JSON.parse('{"name":"Azza"}'))
console.log([]==![])