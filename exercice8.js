
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

let ageNombre = parseInt(age);
let ageValide = (!isNaN(ageNombre) && ageNombre > 0);

let indexArrobas = email.indexOf("@");
let emailValide = indexArrobas > 0 && email.indexOf(".", indexArrobas) > indexArrobas;

let score = parseInt(scoreJeu);
if (isNaN(score)) score = 0;

let estAdminBool = (estAdmin === "true");

let derniereConn = derniereConnexion ?? "Jamais connecté";

let nbConnex = parseInt(nombreConnexions);
let nbConnTexte = (nbConnex === 0) ? "Aucune connexion" : nbConnex;

console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age              : " + (ageValide ? ageNombre : "valeur invalide") + (ageValide ? " (valide)" : ""));
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ')');
console.log("scoreJeu         : " + score + " (extrait depuis \"" + scoreJeu + "\")");
console.log("estAdmin         : " + estAdminBool + " (attention : Boolean(\"false\") = true, conversion manuelle requise)");
console.log('derniereConnexion: "' + derniereConn + '" (valeur par défaut via ??)');
console.log("nombreConnexions : " + nbConnTexte);
console.log("================================");