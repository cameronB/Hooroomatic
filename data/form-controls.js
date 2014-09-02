self.port.on("first-name", function(firstname){
	document.getElementById("booking_first_name").value=firstname;
});

self.port.on("last-name", function(lastname){
	document.getElementById("booking_last_name").value=lastname;
});

self.port.on("email", function(email){
	document.getElementById("booking_email").value=email;
});

self.port.on("phone-number", function(phone){
	document.getElementById("booking_phone").value=phone;
});

self.port.on("qff-number", function(qffnumber){
	document.getElementById("booking_frequent_flyer_number").value=qffnumber;
});

self.port.on("request", function(request){
	document.getElementById("booking_special_requests").value=request;
});

self.port.on("credit-card-number", function(creditcardnumber){
	document.getElementById("booking_credit_card_number").value=creditcardnumber;
});

self.port.on("credit-card-name", function(creditcardname){
	document.getElementById("booking_credit_card_name").value=creditcardname;
});

self.port.on("credit-card-ccv", function(creditcardccv){
	document.getElementById("booking_credit_card_verification_value").value=creditcardccv;
});

self.port.on("credit-card-month-expiry", function(creditcardmonthexpiry){
	document.getElementById("month-button").getElementsByClassName("ui-selectmenu-status")[0].innerHTML=creditcardmonthexpiry
	document.getElementById("month").value=creditcardmonthexpiry;
});

self.port.on("credit-card-year-expiry", function(creditcardyearexpiry){
	document.getElementById("year-button").getElementsByClassName("ui-selectmenu-status")[0].innerHTML=creditcardyearexpiry
	document.getElementById("year").value=creditcardyearexpiry;
});

self.port.on("terms-and-conditions", function(termsandconditions){
	document.getElementById("terms_and_conditions").checked=termsandconditions;
});

self.port.on("pay-now", function(){
  document.getElementById("pay").click();
});