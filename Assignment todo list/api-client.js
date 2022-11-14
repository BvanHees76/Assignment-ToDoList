const baseUrl = `http://localhost:3000/`;

//get Data from local API

const getData = async function(){
    try 
    {
    const response = await fetch(baseUrl, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
    })
    const data = await response.json()
    console.log("Get request: ", data);
    return(data);
    }
    catch(err)
    {
    console.log(err, 'fout bij ophalen data');
    }
    };

    //post data to server
    const postData = async function(value){
    const getInput = document.getElementById('write-task');
    const inputData = {description: getInput.value, done: false};
    try 
    {
    const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(inputData),
    headers: {
        "Content-Type": "application/json",
    },
    });
    const data = await response.json();
    console.log("post request: ", data);
    return(data);
    }
    catch(err)
    {
    console.log(err, 'fout bij posten data');
    }
    };

//delete data with DELETE
  //post data to server
  const deleteData = async function(){
    try 
    {
    const response = await fetch(baseUrl, {
    method: "DELETE",
    body: JSON.stringify(inputData),
    headers: {
        "Content-Type": "application/json",
    },
    });
    const data = await response.json();
    console.log("post request: ", data);
    return(data);
    }
    catch(err)
    {
    console.log(err, 'fout bij posten data');
    }
    };