sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("bookshopui.controller.BookList", {
    onInit() {},
    onBookPress: function (oEvent) {
      const oContext = oEvent.getSource().getBindingContext();
      const sBookID = oContext.getProperty("ID");

      this.getOwnerComponent().getRouter().navTo("detail", {
        bookID: sBookID,
      });
    },
  });
});
