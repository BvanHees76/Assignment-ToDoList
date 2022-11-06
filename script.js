getData();
console.log(getData());

/* Wat moet de user kunnen:
1. Een task typen in het input veld
2. wanneer hij klikt op de add-button moet de task zichtbaar
zijn
3. hij moet de task kunnen deleten met een prullenbakje wanneer
deze afgerond is.

Dit betekent voor mij:
1. a. input + button maken in html
b. het klikken op de add button triggered een event nl.POST
2. een li wordt gecreeerd met een prullenbak(img) en de tekst 
die de gebruiker heeft ingetypt verschijn hier.
3. een li wordt verwijderd.*/

//functie om een li met text en image te creeren
//Wanneer user op add drukt moet deze functie geactiveerd worden



let makeCompleteListItem = function () {
 
    const userInput = document.getElementById('write-task');//ID van inputveld 
    let makeTextNode = userInput.value;// hiermee wil ik wat de user intypt overbrengen naar de LI
    let makeLi = document.createElement('li');
    let makeImage = document.createElement('img');
    makeImage.src = './trashcan.jpg';

    getTaskList.appendChild(makeLi);
    makeLi.appendChild(makeImage);
    makeP.innerHTML(makeTextNode);
    }; 

document.getElementById('add-task').addEventListener('click', postData()); 


 

      
