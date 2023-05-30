let firstSet = new Set(["mouse", "rabbit", "deer", "turtle"]);
let secondtSet = new Set(["hedgehog", "fox", "wolf"]);
let thirdSet = new Set(["hedgehog", "rabbit", "fox", "turtle"]);


//Об'єднання
let unit = new Set ([...firstSet,...secondtSet]);
console.log(unit);

// Перетин

let intersection = new Set([...firstSet].filter(item => thirdSet.has(item)));
console.log(intersection);


// Різниця

let difference = new Set([...firstSet].filter(item => !thirdSet.has(item)));
console.log(difference);