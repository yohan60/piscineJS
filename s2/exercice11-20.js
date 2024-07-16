// Exercice 11: Somme des éléments d'un tableau
document.write("<h2>EXERCICE 11</h2>");
let tableau = [2, 3, 5, 7, 10];
let resultat = 0;
document.write("Le tableau contient : ", tableau, "<br>");

for (i = 0; i < tableau.length; i++) {
    resultat += tableau[i];
}
document.write(resultat, " est la somme des éléments du tableau");
document.write("<br>");

// Exercice 12: Trouver le plus grand nombre dans un tableau
document.write("<h2>EXERCICE 12</h2>");
let tableauMax = [2, 3, 10, 5, 7];
let resultatMax = [0];
for (i = 0; i < tableauMax.length; i++) {
    if (resultatMax < tableauMax[i])
        resultatMax = tableauMax[i];
}
document.write(resultatMax, " est le plus grand nombre du tableau");
document.write("<br>");

// Exercice 13: Filtrer les nombres pairs d'un tableau
document.write("<h2>EXERCICE 13</h2>");
let tableauPair = [1, 3, 5, 7, 8, 10];
for (i = 0; i < tableauPair.length; i++) {
    if (tableauPair[i] % 2 === 0) {
        document.write(tableauPair[i], " est un nombre pair.<br>");
    }
}

// Exercice 14: Trouver un élément dans un tableau d'objets
document.write("<h2>EXERCICE 14</h2>");
let monObjet = {
    taille: 20,
    couleur: "bleu",
    marque: "Lyreco",
}

let monObjet1 = {
    taille: 26, // Définit une taille
    couleur: "rouge",
    marque: "Colery",
}

let tableauObjet = [monObjet, monObjet1];
let couleurRecherche = "rouge";
let objetTrouve = tableauObjet.find(objet => objet.couleur === couleurRecherche);

if (objetTrouve) {
    console.log("Objet trouvé:", objetTrouve);
} else {
    console.log("Objet non trouvé");
}
document.write("Regarder le console.log");
console.log("La recherche de couleur choisi est le : ", couleurRecherche, "<br> Le résultat trouvé est donc un ", objetTrouve);

// Exercice 15: Compter les occurrences d'une lettre dans une chaîne
document.write("<h2>EXERCICE 15</h2>");
function nombreCar(lettre, mot) {
    mot = mot.split('');
    let nombreTrouve = 0;
    for (let i = 0; i < mot.length; i++) {
        if (lettre == mot[i])
            nombreTrouve++;
    }
    return nombreTrouve;
}
document.write("Il y a ", nombreCar('W', 'Welcome to my World!'), " occurences d'une lettre dans cette chaîne");

// Exercice 16: Trier un tableau de nombres
document.write("<h2>EXERCICE 16</h2>");
let tab = [1, 3, 7, 9, 2, 4, 5, 8];

document.write("Tableau avant tri : " + tab + "<br>");
let maxi, mini, posmini, posmaxi, temp;

maxi = mini = tab[0];
posmaxi = posmini = 0;

for (let i = 1; i < tab.length; i++) {
    if (tab[i] > maxi) {
        maxi = tab[i];
        posmaxi = maxi;
    }
    if (tab[i] < mini) {
        mini = tab[i];
        posmini = mini;
    }
}

document.write("Tableau après tri : " + tab + "<br>");

// Exercice 17: Vérifier si un mot est un palindrome
document.write("<h2>EXERCICE 17</h2>");
function palindrome(word) {
    // const palinMajMin = prompt("Entre un mot"); word.toLowerCase().replace(/[^a-z]/g, '');
    const palinMajMin = word.toLowerCase().replace(/[^a-z]/g, '');
    const length = palinMajMin.length;

    for (let i = 0; i < length / 2; i++) {
        if (palinMajMin[i] !== palinMajMin[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
// console.log("Ce mot est un palindrome : ", palindrome, " .");
console.log("Ce mot est un palindrome : ",palindrome('kayak'));
console.log("Ce mot n'est pas un palindrome : ",palindrome('toto'));

// Exercice 18: Fusionner deux tableaux et supprimer les doublons
document.write("<h2>EXERCICE 18</h2>");
let tabF = ["Ouioui","Nonnon", "Sisi"];
let tabF1 = ["Sisi", "Sisi" , "Ouioui"];

fusTab = tabF.concat(tabF1);
document.write(fusTab, "<br>");

function supDoublon(mots) {
    return mots.filter((value, index) => mots.indexOf(value) === index);
}

document.write(supDoublon(fusTab), "<br>");

// Exercice 19: Calculer l'âge à partir d'une date de naissance
document.write("<h2>EXERCICE 19</h2>");
function getAge(date) { 
    let diff = Date.now() - date.getTime();
    let age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}
document.write("L'âge à partir d'une date de naissance choisi est ",getAge(new Date(1997, 9, 17))); //Date(année, mois, jour)  

// Exercice 20: Convertir une chaîne de caractères en camelCase
document.write("<h2>EXERCICE 20</h2>");
let camelCase = "Convertir une chaîne de caractères en camelCase";

function changeCamelCase(a) {
    let b = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(/[^A-Za-z0-9]/g);
    b.forEach(function(c, d) {
      b[d] = c.charAt(0).toUpperCase() + c.substr(1).toLowerCase();
    });
    return b.join('');
  }

changeCamelCase(camelCase);
document.write(changeCamelCase(camelCase));