sap.ui.define([], function () {
  "use strict";
  return {
    stockState: function (iStock) {
      if (iStock === 0) return "Error";
      if (iStock < 5) return "Warning";
      return "Success";
    }
  };
});
