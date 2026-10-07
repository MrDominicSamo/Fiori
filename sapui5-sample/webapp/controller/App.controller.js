sap.ui.define(
    ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
    function (Controller, MessageToast) {
        'use strict';
        var PageController = Controller.extend(
            'sap.ui.demo.tiles.controller.App',
            {
                press: function (evt) {
                    MessageToast.show('The GenericTile is pressed.' + evt);
                }
            }
        );
        return PageController;
    }
);