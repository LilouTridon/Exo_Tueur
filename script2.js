"use strict"
//énoncé :
//jason  = tueur = 100 hp
//caractéristiques clichées = Nerd, Sportif, Charismatique, ...
//ajouter probabilité de mourir, probabilité d'infliger des dégâts, probabilité de mourir en infligeant des dégâts (0.3, 0.5, 0.2)
//noms et caractéritiques aléatoires
//chaque tour Jason attaque : soit le survivant attaqué meurt, soit il esquive et fait 10 de dégâts, soit il meurt et inflige 15 de dégâts
//morts affiché après avec message Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort, les survivants ont gagné mais RIP à X, X, X…

let tueur = "Jason"; //Création de la variable du tueur
let hp = 100; // on definit son nombre de hp
let tableauSurvivants=["Alpha", "Bravo", "Charlie", "Delta", "Echo"]; //tableau des 5 survivants
let tableauCara=["Nerd","Sportif","Populaire","a","b"]; //tableau des caracteristiques
let PROBA;
let proba=["Mourir","Degat","Meurt avec degat"]; //les 3 probabilités
let victime; //création d'un variable victime pour définir la prochaine victime de Jason
console.log(`Les survivants sont ${tableauSurvivants}`);
console.log(tableauCara);

do{
    console.log(`Il y a toujours ${tableauSurvivants.length} survivants`); //affiche le nombre de survivants restant à chaque début de tour
    console.log("JASON PASSE A LATTAQUE") //signale le début du tour (attaque du tueur)
    victime = (Math.floor(Math.random() * 5+1)); //chosi un nombre random
  switch(victime){
    case 1:
        victime= "Alpha";
        break;
    case 2:
        victime= "Bravo";
        break;
    case 3:
        victime= "Charlie";
        break;
    case 4:
        victime = "Delta";
        break;
    case 5:
        victime= "Echo";
        break;
} //désigne 1 victime entre les 5 survivants

console.log(`La victime est ${victime}`); //annonce la victime

PROBA = (Math.floor(Math.random() * 4));
switch(PROBA){ //3 possibilités d'action qui reviennent à 0.33 de probabilité chacune
    case 1:
        proba = "meurt"; //la 1ere possibilité est de mourir sans faire de dégât
        break;
    case 2:
        proba = "degat"; //la 2e est d'esquiver et de faire 10 de dégâts
        break;
    case 3:
        proba = "meurt+degat"; //la 3e est que la victime meurt tout en infligeant 15 de dégâts au tueur
        break;
}
switch(PROBA){
    case "meurt":
        if(proba == "meurt"){ 
            console.log(`${victime} est mort`) //ainsi on affiche quelle action la victime réalise
        }
        else{
          }
        break
    case "degat":
        if(proba == "degat"){ 
            console.log(`${victime} a esquivé `)
        }
        else{
        }
        break
    case "meurt+degat":
        if(proba == "meurt+degat"){ 
          console.log(`${victime} est mort en se battant`)
        }
        else{
        }
        break;
}

if(proba =="degat"){
    console.log("La victime esquive et inflige des dégâts à Jason, il se prend 10 de dégâts");
    hp-=10 //on réduit donc les pv du tueur selon s'il prend des dégats

}else if(proba =="meurt+degat"){
    console.log("La victime meurt mais inflige des dégâts à Jason, il se prend 15 de dégâts");
    hp-=15
    tableauSurvivants.pop(`${victime}`);
      
}else{
    console.log('La victime est morte en infligeant pas de dégâts à Jason, il ne perd pas de hp');
    tableauSurvivants.pop(`${victime}`);
}

console.log(`Jason a ${hp} de vie`)
     } while(hp>0 && tableauSurvivants.length>0) //il y aura une boucle tant que le tueur a de la vie et que qu'il ya des valeurs dans le tableau donc des survivants

if(hp<=0){
    console.log("Jason est mort les survivants gagnent")

}else if(hp>0){
    console.log("Jason a tué tous les survivants et est toujours en vie")
}


//Je n'ai pas réussi à attribuer des caractéristiques aux survivants, je pense qu'il faut faire 2 tableaux puis random les noms et les caracteristiques et les lier en faisant push ou alors en modifiant le tableau après mais j'ai pas réussi

// Avec " tableauSurvivants.pop(`${victime}`); " j'ai essayé de faire en sorte que seulement la victime soit retirée du tableau mais ça ne marche pas ce qui fait que les mêmes victimes sont choisies plusieurs fois
// Je sais vraiment pas comment réparer ça, d'ailleurs je ne peux pas afficher à la fin qui est mort car on voit plusieurs fois le même nom de victime donc impossible d'afficher clairement qui sont les personnes mortes car je peux avoir 3 fois Alpha

//Les pv de Jason vont parfois s'afficher dans le négatif à la fin car s'il lui reste 5 de vie et que l'un des survivants lui retire 10 alors il sera écrit qu'il a -5 de vie et donc qu'il est mort.
