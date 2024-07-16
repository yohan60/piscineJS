// Exercice 31: Utilisation de Promise.all
document.write("<h2>EXERCICE 31</h2>");
let promesse1 = Promise.resolve(1997);
let promesse2 = 17;
let promesse3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "septembre");
});

Promise.all([promesse1, promesse2, promesse3]).then((values) => {
  console.log(values);
});

// Exercice 32: Gérer les erreurs avec try...catch
// document.write("<h2>EXERCICE 32</h2>");
function eAC() {
  let message = document.getElementById("message");
  message.innerHTML = "";
  let inpt = document.getElementById("demo").value;
  try {
    if (inpt == "") throw "is Empty";
    if (isNaN(inpt)) throw "not a number";
    if (inpt > 10) throw "too high";
    if (inpt < 5) throw "too low";
  } catch (err) {
    message.innerHTML = "Input " + err;
  } finally {
    document.getElementById("demo").value = "";
  }
}

// Exercice 33: Filtrage avec des expressions régulières
// document.write("<h2>EXERCICE 33</h2>");
let mots = ["pomme", "banane", "framboise", "fraise" , "Figue"];
let filtrerMots = mots.filter((mots) => /^f/i.test(mots)); // Commence au tout début par f et est insensible à la casse ( i ) 
console.log(filtrerMots);

// Exercice 34: Création d'une fonction de debounce
// document.write("<h2>EXERCICE 34</h2>");

// Exercice 35: Création d'une fonction throttle
// document.write("<h2>EXERCICE 35</h2>");

// Exercice 36: Utilisation de fetch pour récupérer des données d'une API
document.write("<h2>EXERCICE 36</h2>");
async function afficherFilms() {
  const reponse = await fetch("http://example.com/films.json");
  const films = await reponse.json();
  console.log(films);
}


// Exercice 37: Manipulation avancée d'objets
document.write("<h2>EXERCICE 37</h2>");
let users = [
  { name: 'Neha', age: 32 },
  { name: 'Ankit', age: 24 },
  { name: 'Babita', age: 41 },
];

const youngUsers = users.filter(user => user.age < 30);
console.log("Filtre et montre ceux ayant un âge inférieur à 30:")
console.log(youngUsers);

// Exercice 38: Fusion profonde d'objets
document.write("<h2>EXERCICE 38</h2>");
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let obj = Object.assign(o1, o2, o3);
console.log(obj); 

// Exercice 39: Destructuration d'objets avec renommage
document.write("<h2>EXERCICE 39</h2>");
let note = {
  id: 10,
  titre: 'Destructuration avec renommage',
  date: '16/07/2024',
}

let { id, titre, date } = note;

console.log("L'id :", id);
console.log("Le titre :", titre);
console.log("La date :", date);


// Exercice 40: Utilisation de fonction générateur pour parcourir une suite de Fibonacci
document.write("<h2>EXERCICE 40</h2>");
