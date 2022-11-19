/* Wat moet de user kunnen:
1. Een task typen in het input veld
2. wanneer hij klikt op de add-button moet de task zichtbaar
zijn
3. hij moet de task kunnen deleten met een prullenbakje wanneer
deze afgerond is.
​
//event listener op add button - post request maken
//event listener op add button - li toevoegen aan DOM*/
let makeCompleteListItem = function (e) {
  console.log(e._id);
  const getTaskList = document.getElementById('task-list');
  let makeLi = document.createElement('li');
  const getInput = document.getElementById('write-task');
  makeLi.innerHTML = getInput.value;
  makeLi.className = `list-items-of-tasks ${e._id}`;
 

  let containerLiandBin = document.createElement('div');
  containerLiandBin.setAttribute('class', 'div-li-bin');
  containerLiandBin.id = `${e._id}`;

  let makeBinButton = document.createElement('input');
  let makeBinButtonLabel = document.createElement('label');
  
  makeBinButton.setAttribute('type', 'button');
  makeBinButton.setAttribute('class', 'remove-bin');
  makeBinButton.setAttribute('name', 'remove-task');
  makeBinButtonLabel.setAttribute('for', 'remove-bin')

  makeBinButton.addEventListener('click',()=>
  containerLiandBin.remove()
  )

  getTaskList.appendChild(containerLiandBin);
  containerLiandBin.appendChild(makeLi);
  containerLiandBin.appendChild(makeBinButton);
  containerLiandBin.appendChild(makeBinButtonLabel);

  }; 
  //1. de taak die de user invult in het inputveld - moet de description zijn in het post-request

  //hoe zorg ik ervoor dat input.value wordt overgenomen in de description?
  //Zie POST function api-client.js
  let storePostForEventlistener = function(){//omdat eventlistener niet op een async functie kan
      let prom = postData();
      prom.then(function(e) {
          //ELKE KEER DAT JE DATA OPSLAAT KRIJG JE HET ALS REGEL TERUG. GEBRUIK HET IN JE UI
          makeCompleteListItem(e);
      });  
  };

  let clickPost = function()
  {
    const selAddButton = document.getElementById('add-task');
    selAddButton.addEventListener('click', storePostForEventlistener);
      //WERKT!!!!!!!!    
  };

  let totalFunction = function()
  {
      //ZO HAAL JE DATA OP EN KAN JE ER DOORHEEN LUSSEN
   let catcher = getData(makeCompleteListItem);
  // console.log(catcher);
   //catcher.then(function(result) {
  //for (let i = 0; i < result.length; i++) {
  //console.log(result[i]);    }
  // });

   clickPost();
  };

  totalFunction();