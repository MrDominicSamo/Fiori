sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("app01.controller.home_view", {
    onInit() {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter
        .getRoute("RouteDashboard")
        .attachPatternMatched(this._onObjectMatched, this);

      // Initialize the model
      var oUserModel = new sap.ui.model.json.JSONModel();
      this.getView().setModel(oUserModel, "oUserModel");
    },
    _onObjectMatched: function (oEvent) {
      var user_name = oEvent.getParameter("arguments").name;
      var pass_word = oEvent.getParameter("arguments").pass;
      var oUserModel = this.getView().getModel("oUserModel");
      oUserModel.setProperty("/username", user_name);
      oUserModel.setProperty("/password", pass_word);
    },
    loginButton: function () {
      let username = this.getView().byId("_username").getValue();
      let password = this.getView().byId("_password").getValue();
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("RouteDashboard", {
        name: username,
        pass: password,
      });
    },
  });
});
