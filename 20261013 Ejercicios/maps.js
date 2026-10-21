var map = new Map();
map.set("santi", 4);
map.set(4, "jaime");
map.set("jaime", 6);
map.set(6, "santi");

console.log(map.get(map.get(map.get("jaime"))));

map.delete("santi");

console.log(map.get("santi"));

map.set(undefined, "14");
map.set("14", 4);



console.log(map.get(map.get(map.get(map.get(map.get(map.get("jaime")))))));

console.log(map.keys());
console.log(map.entries())

var map2 = new Map([
    [1, "santi"],
    ["santi", 2],
    [2, "juan"],
    ["juan", 1]
]);

console.log(map2);


for(var [clave, valor] of map2){
    console.log(clave + " = " + valor);
}

console.log("For in (no funciona con maps)")

for (var valor in map2){
    console.log(valor);
}

console.log("For in usando .values() (tampoco funciona???)")

for (var valor in map2.values()){
    console.log(valor);
}

console.log("Foreach");

function logMapElements(value, key, map){
    console.log(key + "=>" + value);
}

map2.forEach(logMapElements);

function logSetElements(value1, value2, set){
    console.log("set[" + value1 + "] = " + value2);
}

set1 = new Set();

set1.add("santi");
set1.add("santi");
set1.add("jaime");
set1.add("santi");
console.log(set1);

console.log("set1 tiene santi? " + set1.has("santi"));
console.log("set1 tiene pablo? " + set1.has("pablo"));

console.log("set1.values():");
set1.forEach(logSetElements)

set1.clear();

console.log("set1 tras clear: ");
set1.forEach(logSetElements);

set1.add("santi");
set1.add("santi");
set1.delete("santi");
set1.add("jaime");

console.log(set1);


let array = [100, 23, 23, 23, 23, 67, 45];

let outputArray = Array.from(new Set(array));
console.log(outputArray);

let outputArray2 = [];

for (var num of array){
    if (!outputArray2.includes(num)){
        outputArray2.push(num);
    }
}

console.log(outputArray2);

