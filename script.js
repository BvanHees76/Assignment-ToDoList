/* Wat moet de user kunnen:
1. Een task typen in het input veld
2. wanneer hij klikt op de add-button moet de task zichtbaar
zijn
3. hij moet de task kunnen deleten met een prullenbakje wanneer
deze afgerond is.
​
//event listener op add button - post request maken
//event listener op add button - li toevoegen aan DOM*/
​
let makeCompleteListItem = function () {
​
    const getTaskList = document.getElementById('task-list');
    let makeLi = document.createElement('li');
    makeLi.className = 'list-items-of-tasks';
    const getInput = document.getElementById('write-task');
    makeLi.innerHTML = getInput.value;
​
    let containerLiandBin = document.createElement('div');
    containerLiandBin.setAttribute('id', 'div-li-bin');
    let makeBinButton = document.createElement('input');
    let makeBinButtonLabel = document.createElement('label');
    makeBinButton.setAttribute('type', 'button');
    makeBinButton.setAttribute('id', 'remove-bin');
    makeBinButton.setAttribute('name', 'remove-task');
    makeBinButtonLabel.setAttribute('for', 'remove-bin')
​
    getTaskList.appendChild(containerLiandBin);
    containerLiandBin.appendChild(makeLi);
    containerLiandBin.appendChild(makeBinButton);
    containerLiandBin.appendChild(makeBinButtonLabel);
    }; 
    //1. de taak die de user invult in het inputveld - moet de description zijn in het post-request
​
    //hoe zorg ik ervoor dat input.value wordt overgenomen in de description?
    //Zie POST function api-client.js
    let storePostForEventlistener = function(){//omdat eventlistener niet op een async functie kan
        postData();    
    };
​
    let clickPost = function(){
        const selAddButton = document.getElementById('add-task');
        selAddButton.addEventListener('click', storePostForEventlistener);
        //WERKT!!!!!!!!    
    };
   let addToDom = function()
   {
    const selAddButton = document.getElementById('add-task');
    selAddButton.addEventListener('click', makeCompleteListItem);
   };
​
    let totalFunction = function()
    {
        let catcher = getData();
        console.log(catcher);
        catcher.then(function(result) {
            for (let i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        });
        storePostForEventlistener();
        clickPost();
        addToDom();    
    };
​
    totalFunction();
    
