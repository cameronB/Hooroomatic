var button = document.getElementById("pop-over");

button.addEventListener('click', function (event) {
	self.port.emit("fill-booking-form", {
		firstname: "Cameron", 
		lastname: "Bradley",
		email: "cameron@hooroo.com",
		phonenumber: "1300 738 214",
		qffnumber: "9900029",
		request: "Booking by Hooroomatic! (Profile: default)",
		creditcardnumber: "5577810000000004",
		creditcardname: "Cameron Bradley",
		creditcardccv: "100",
		creditcardmonthexpiry: "10",
		creditcardyearexpiry: "2020",
		termsandconditions: "true"
	});
}, false);
