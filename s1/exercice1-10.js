// Exercice 1: Afficher "Bonjour, monde!"
document.write("<h2>EXERCICE 1</h2>");
let bonjour = "Bonjour, monde!";
document.write("<br><br>");
document.write(bonjour);
document.write("<br>");

// Exercice 2: Calculer la somme de deux nombres
document.write("<h2>EXERCICE 2</h2>");
let nbr = 2;
let nbr1 = 3;
document.write(nbr + nbr1);
document.write("<br>");

// Exercice 3: Comparer deux nombres
document.write("<h2>EXERCICE 3</h2>");
let nbr2 = 10;
let nbr3 = 10;
if (nbr2 != nbr3) {
    document.write(nbr2, " est différent de ", nbr3);
} else {
    document.write("Les 2 numéros rentrés sont identiques! <br> Numéro 1 : ", nbr2 + "<br> Numéro 2 : ", nbr3, "<br>");
}
document.write("<br>");

// Exercice 4: Vérifier si un nombre est pair ou impair
document.write("<h2>EXERCICE 4</h2>");
// -------------------------------PROMPT-------------------------------
nbr4 = prompt("Numéro pour vérifier si il est pair ou impair");
// -------------------------------PROMPT-------------------------------
if (nbr4 % 2 == 0) {
    document.write("Ce numéro est pair");
} else {
    document.write("Ce numéro est impair");
}
document.write("<br>");

// Exercice 5: Manipulation de chaînes de caractères
let CDC = "Le javascript est vraiment POUISSONT";
document.write(CDC, "<br>");
document.write(CDC.toUpperCase(), "<br>");
document.write(CDC.toLowerCase(), "<br>");
document.write("<br>");

let MDCDC = "Manipulation de chaînes de caractères";
let arret = 17;
document.write("L'arrêt se fera au charactère numéro ", arret, " '' ", MDCDC.charAt(arret), " ''. ");

// Exercice 6: Boucle for
document.write("<h2>EXERCICE 6</h2>");
for (i = 0; i <= 10; i++) {
    if (i == 1) {
        document.write("Je suis le ", i, " er passage. <br>");
    } else {
        document.write("Je suis le ", i, " ème passage. <br>");
    }
}
document.write("<br>");

// Exercice 7: Table de multiplication
document.write('<h2>EXERCICE 7</h2>');
let mult = prompt("Numéro a multiplier");
for (i = 0; i <= 10; i++) {
    document.write(mult + " x " + i + " = " + mult * i + "<br>");
}
document.write("<br>");

// Exercice 8: Recherche dans un tableau
document.write("<h2>EXERCICE 8</h2>");
let tableau = [];
tableau = ["Mathieu", "Moubarak", "Lorenzo", "Yanive", "Kamel", "Maryam", "Astou", "Maxime", "Johan", "Boubacar"];

document.write("<br><b>Recherche dans un tableau tableau</b><br><br>")
for (i = 0; i < tableau.length; i++) {
    document.write("L'indice numéro ", i, " a pour valeur: ", tableau[i], "<br>");
}

document.write("<br>");

// Exercice 9: Inverser une chaîne de caractères
document.write("<h2>EXERCICE 9</h2>");
let texte = "Inverser une chaîne de caractères";
document.write(texte, "<br>");
let inverser = texte.split('').reverse().join('');
document.write(inverser, "<br>");
document.write("<br>");

// Exercice 10: Calculer la factorielle d'un nombre
document.write("<h2>EXERCICE 10</h2>");

function factorielle(number) {
    let result = 1;
    for (let i = 2; i < number + 1; i++) {
        result = result * i;
    }
    return result
}
document.write(factorielle(5));
document.write("<br>");

