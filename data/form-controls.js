self.port.on("first-name", function(firstname){
	document.getElementById("booking_first_name").value=firstname;
});

self.port.on("last-name", function(lastname){
	document.getElementById("booking_last_name").value=lastname;
});