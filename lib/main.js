var buttons = require('sdk/ui/button/action');
var data = require("sdk/self").data
var tabs = require("sdk/tabs");
var panels = require("sdk/panel");
var pageMod = require("sdk/page-mod");
// https://qantas.staging.jqdev.net/properties/18069/offers/36362/booking?adults=1&checkIn=2014-08-19&checkOut=2014-08-20&children=0&infants=0

var loaded_form = null;

var button = buttons.ActionButton({
  id: "make-booking",
  label: "Hooroomatic",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
   pop_over.show({ position: button});
}

let pop_over = require("panel").Panel({
  width: 505,
  height: 200,
  contentURL: data.url("pop-over.html"),
  contentScriptFile: [data.url("pop-over.js"),
                      data.url("jquery-1.4.4.min.js")]
});


pop_over.port.on("fill-booking-form", function(formData){
  pop_over.hide();
  send_event_to_form("first-name", formData.firstname);
  send_event_to_form("last-name", formData.lastname);
  send_event_to_form("email", formData.email);
  send_event_to_form("phone-number", formData.phonenumber);
  send_event_to_form("qff-number", formData.qffnumber);
  send_event_to_form("request", formData.request);
  send_event_to_form("credit-card-number", formData.creditcardnumber);
  send_event_to_form("credit-card-name", formData.creditcardname);
  send_event_to_form("credit-card-ccv", formData.creditcardccv);
  send_event_to_form("credit-card-month-expiry", formData.creditcardmonthexpiry);
  send_event_to_form("credit-card-year-expiry", formData.creditcardyearexpiry);
  send_event_to_form("terms-and-conditions", formData.termsandconditions);
  send_event_to_form("pay-now")
});

pageMod.PageMod({
  include: "*.staging.jqdev.net",
  contentScriptFile: data.url("form-controls.js"),
  onAttach: function(form) {
    loaded_form = form;
  }
});

function send_event_to_form(event, data){
  if(loaded_form){
    loaded_form.port.emit(event,data);
  }
}

pop_over.port.on("open-hooroo", function() {
  tabs.open("https://staging.places.hooroo.com/");
});

pop_over.port.on("open-jetstar", function() {
  tabs.open("https://jetstar.staging.jqdev.net/")
});

pop_over.port.on("open-qantas", function() {
  tabs.open("https://qantas.staging.jqdev.net/")
});



