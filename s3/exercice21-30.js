// Exercice 21: Supprimer les éléments falsy d'un tableau
document.write("<h2>EXERCICE 21</h2>");
let tableau = [0, 1, NaN, false, 2, 3];
document.write("Le tableau avant suppression des éléments falsy d'un tableau : ", tableau, "<br>");

let sup = tableau.filter(Boolean);

document.write("Le tableau après suppression des éléments falsy d'un tableau : ", sup);

// Exercice 22: Regrouper des éléments d'un tableau par propriété
document.write("<h2>EXERCICE 22</h2>");
let personnes = [
    { nom: "Celian", ville: "Paris" },
    { nom: "Maryam", ville: "Lyon" },
    { nom: "Moubarak", ville: "Paris" },
    { nom: "Maxime", ville: "Paris" },
    { nom: "Johan", ville: "Lyon" }
];

// let regrouperParVille = (tableau) => {
//     return tableau.reduce((acc, personne) => {
//         let ville = personne.ville;
//         if (!acc[ville]) {
//             acc[ville] = [];
//         }
//         acc[ville].push(personne);
//         return acc;
//     }, {});
// };
// let resultat = regrouperParVille(personnes);
// console.log(resultat);


// Exercice 23: Créer une fonction de débogage
document.write("<h2>EXERCICE 23</h2>");

// Exercice 24: Aplatir un tableau de tableaux
document.write("<h2>EXERCICE 24</h2>");
let tab = [[1, 2], [3, 4], [5, 6]];
console.log("Le tableau avant d'aplatir ", tab);
let applatirTab = tab.flat();
console.log("Le tableau après l'avoir aplati ", applatirTab);

// Exercice 25: Créer une fonction de temporisation
document.write("<h2>EXERCICE 25</h2>");
function phrase() {
    console.log("Créer une fonction de temporisation");
}
setTimeout(phrase, 3000);
console.log("Après setTimeout()");

// Exercice 26: Filtrer un tableau d'objets par une plage de dates
document.write("<h2>EXERCICE 26</h2>");
let data = [
    { name: 'Evenement 1', date: new Date('2023-01-15') },
    { name: 'Evenement 2', date: new Date('2022-12-20') },
    { name: 'Evenement 3', date: new Date('2023-03-05') }
];

data.sort((a, b) => a.date.getTime() - b.date.getTime());
console.log(data);

// Exercice 27: Implémenter une fonction de réduction personnalisée
document.write("<h2>EXERCICE 27</h2>");

// Exercice 28: Trier un tableau d'objets par plusieurs propriétés
document.write("<h2>EXERCICE 28</h2>");
let tableauObjets = [
    { nom: 'Johan', age: 29 },
    { nom: 'Astou', age: 35 },
    { nom: 'Maxime', age: 20 },
    { nom: 'Celian', age: 22 }
];

tableauObjets.sort(function compare(a, b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
});

console.log(tableauObjets);
// Exercice 29: Vérifier si tous les éléments d'un tableau passent un test
document.write("<h2>EXERCICE 29</h2>");
let tableauTest = [1, 3, 5, 20, 10, 14, 17];
let test = (currentValue) => currentValue <= 17;

document.write("La variable '' test '' vérifie en passant par le tableau si il contient un numéro plus grand que lui, si il est plus grand alors il renvoie false, sinon true : ", tableauTest.every(test));

// Exercice 30: Exécuter des promesses en série
// document.write("<h2>EXERCICE 30</h2>");
function promesse(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { promesse(value); },
    function (error) { promesse(error); }
);