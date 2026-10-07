sap.ui.define([
    "sap/m/Text",
], function(Text) {
    "use strict";

    new Text({
        text: "Hello World - Control!"
    }).placeAt("content");

    alert("UI5 is ready!");
});