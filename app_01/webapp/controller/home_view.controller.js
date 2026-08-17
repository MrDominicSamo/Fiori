sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("app01.controller.home_view", {
    onInit() {},
    loginButton: function () {
      //   let username = this.getView().byId("_username").getValue();
      //   let password = this.getView().byId("_password").getValue();

      //alert(`Username: ${username}\n Password: ${password}`);
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("RouteDashboard");
    },
  });
});
