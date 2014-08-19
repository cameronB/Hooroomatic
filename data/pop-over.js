var button = document.getElementById("pop-over");

button.addEventListener('click', function (event) {
	self.port.emit("fill-booking-form", {
		firstname: "Cameron", 
		lastname: "Bradley"
	});
}, false);
