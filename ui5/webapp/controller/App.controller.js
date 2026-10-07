sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onPress: function() {
            alert("Button pressed!");
        }
    });
});