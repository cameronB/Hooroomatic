var button = document.getElementById("pop-over");

button.addEventListener('click', function (event) {
	self.port.emit("add-name", "Cameron");
}, false);
