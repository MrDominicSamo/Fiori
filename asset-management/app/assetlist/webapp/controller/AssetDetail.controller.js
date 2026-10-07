sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("assetlist.controller.AssetList", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();

            oRouter.getRoute("RouteAssetDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched(oEvent) {
            const sID = oEvent.getParameter("arguments").ID;

            this.getView().bindElement({
                path: `/Assets('${sID}')`
            });
        },

        onNavBack() {
            this.getOwnerComponent().getRouter().navTo("RouteAssetList");

            MessageToast.show("Navigated back to Asset List");
        },

        onEditPress() {
            const sId = this.getView().getBindingContext().getProperty("ID");

            MessageToast.show(`Edit Asset ID: ${sId}`);
        },

        onDeletePress() {
            const sId = this.getView().getBindingContext().getProperty("ID");

            MessageToast.show(`Delete Asset ID: ${sId}`);
        }

    });
});