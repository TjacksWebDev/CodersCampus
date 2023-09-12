fetch("https://api.apispreadsheets.com/data/3jaP8TI3FftzgdW1/", {
	method: "POST",
	body: JSON.stringify({"data": {"Username":"","password":""}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})