var span = document.getElementById("make-booking");

span.addEventListener('click', function (event) {
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
		creditcardyearexpiry: "2015",
		termsandconditions: "true"
	}); 
}, false);

var logo = document.getElementById("logo");

logo.addEventListener("click", function (event) {
	self.port.emit("open-options");
}, false);

var hooroo_link = document.getElementById("hooroo");

hooroo_link.addEventListener("click", function (event) {
	self.port.emit("open-hooroo");
}, false);

var jetstar_link = document.getElementById("jetstar");

jetstar_link.addEventListener("click", function (event) {
	self.port.emit("open-jetstar");
}, false);

var qantas_link = document.getElementById("qantas");

qantas_link.addEventListener("click", function (event) {
	self.port.emit("open-qantas");
}, false);