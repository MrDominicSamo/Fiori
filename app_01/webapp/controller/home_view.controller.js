sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/ui/core/Fragment"],
  (Controller, MessageBox, Fragment) => {
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
      onNavigateToList: function () {
        let username = this.getView().byId("_username").getValue();
        let password = this.getView().byId("_password").getValue();
        if (username == "" || password == "") {
          MessageBox.error("Invalid Username/Password");
        }

        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("RouteDashboard", {
          name: username,
          pass: password,
        });
      },
      profile_dropdown: function () {
        var oView = this.getView();
        var oButton = oView.byId("profile_button");
        if (!this._oMenuFragment) {
          this._oMenuFragment = Fragment.load({
            id: oView.getId(),
            name: "app01.view.profile_dropdown",
            controller: this,
          }).then(
            function (oMenu) {
              oMenu.openBy(oButton);
              this._oMenuFragment = oMenu;
              return this._oMenuFragment;
            }.bind(this),
          );
        } else {
          this._oMenuFragment.openBy(oButton);
        }
      },
      logout: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Routehome_view");
      },
    });
  },
);
