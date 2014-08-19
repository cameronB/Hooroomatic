self.port.on("add-name", function(name){
	document.getElementById("booking_first_name").value=name;
});

self.port.on("last-name", function(lastname){
	document.getElementById("booking_last_name").value=lastname;
});