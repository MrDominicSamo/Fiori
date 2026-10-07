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

    // Update Stock
    onIncreaseStock: function () {
      const oContext = this.getView().getBindingContext();
      const iCurrentStock = oContext.getProperty("stock");

      oContext.setProperty("stock", iCurrentStock + 1);

      oContext
        .getModel()
        .submitBatch("$auto")
        .then(() => {
          sap.m.MessageToast.show(
            this.getView()
              .getModel("i18n")
              .getResourceBundle()
              .getText("stockUpdated"),
          );
        })
        .catch((oError) => {
          sap.m.MessageBox.error(oError.message);
        });
    },
  });
});
