let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

for (let i = 0; i < nombres.length; i++) {

    let v = nombres[i];
    let resultat;

    if (Number.isNaN(v)) {
        resultat = "INVALIDE";
    }
    else if (v === Infinity || v === -Infinity) {
        resultat = "INFINI";
    }
    else if (v === 0 && 1 / v === -Infinity) {
        resultat = "ZERO NEGATIF";
    }
    else if (Number.isInteger(v) && Number.isSafeInteger(v)) {
        resultat = "ENTIER SUR";
    }
    else if (Number.isInteger(v) && !Number.isSafeInteger(v)) {
        resultat = "ENTIER HORS LIMITES";
    }
    else {
        resultat = "DECIMAL";
    }

    console.log(String(v) + " -> " + resultat);
}