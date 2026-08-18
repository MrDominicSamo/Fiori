sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("bookshopui.controller.BookDetail", {
    onInit: function () {
      this.getOwnerComponent()
        .getRouter()
        .getRoute("detail")
        .attachPatternMatched(this._onPatternMatched, this);
    },

    _onPatternMatched: function (oEvent) {
      const sBookID = oEvent.getParameter("arguments").bookID;
      this.getView().bindElement({
        path: `/Books(${sBookID})`,
        parameters: { $select: "ID,title,author,price,stock,descr" },
      });
    },

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("list");
    },
  });
});
