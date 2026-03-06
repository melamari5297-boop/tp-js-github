let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let def = "valeur par défaut";

let variables = [
    ["nom", nom],
    ["age", age],
    ["ville", ville],
    ["score", score],
    ["actif", actif]
];

console.log("Partie A (??)");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let val = variables[i][1];
    console.log(nomVar + " ?? \"valeur par défaut\" -> " + (val ?? def));
}

console.log("----");

console.log("Partie B (||)");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let val = variables[i][1];
    console.log(nomVar + " || \"valeur par défaut\" -> " + (val || def));
}

console.log("----");

console.log("Partie C (comparaison)");
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0];
    let val = variables[i][1];

    let r1 = val ?? def;
    let r2 = val || def;

    if (r1 === r2) {
        console.log(nomVar + " : ?? et || -> même résultat");
    } else {
        console.log(nomVar + " : ?? et || -> résultat différent");
    }
}