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
    // Creating a new entity (e.g. from a "Create Book" dialog)
    onCreateBook: function () {
      const oListBinding = this.byId("bookTable").getBinding("items");
      const oContext = oListBinding.create({
        title: "New Book",
        author: "Unknown",
        price: 0,
        stock: 0
      });

      oContext.created().then(() => {
        sap.m.MessageToast.show("Book created");
      }).catch((oError) => {
        sap.m.MessageBox.error("Creation failed: " + oError.message);
      });
    }
  });
});
