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
  pop_over.show();
}

var pop_over = panels.Panel({
  contentURL: data.url("pop-over.html"),
  contentScriptFile: data.url("pop-over.js")
});

pop_over.port.on("fill-booking-form", function(formData){
  pop_over.hide();
  send_event_to_form("first-name", formData.firstname);
  send_event_to_form("last-name", formData.lastname);
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