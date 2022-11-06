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
    });
      
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
const postData = {description: "buy oatmeal", done: false};
fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
});


//delete data with DELETE
const deleteData = async (id) => {
	try {
		const response = await fetch(baseUrl + id, {
			method: "DELETE",
		});
		console.log("deleted");
	} catch (err) {
		console.log(err, "sorry, wat?");
	}
};