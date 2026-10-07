sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, Filter, FilterOperator, JSONModel) => {
    "use strict";

    return Controller.extend("assetlist.controller.AssetList", {
      onInit() {
        const oDashboardModel = new JSONModel({
          totalAssets: 0,
          availableAssets: 0,
          assignedAssets: 0,
          inMaintenanceAssets: 0,
        });

        this.getView().setModel(oDashboardModel, "dashboard");

        this._loadDashboardData();
      },

      _loadDashboardData() {
        fetch("/odata/v4/dashboard/AssetCounts")
          .then((response) => response.json())
          .then((data) => {
            const oCounts = data.value[0];

            console.log("Dashboard data fetched:", oCounts);

            this.getView().getModel("dashboard").setData(oCounts);
          })
          .catch((error) => {
            console.error("Error fetching dashboard data:", error);
          });
      },

      onAssetPress(oEvent) {
        const oContext = oEvent.getSource().getBindingContext();

        const sID = oContext.getProperty("ID");

        this.getOwnerComponent().getRouter().navTo("RouteAssetDetail", {
          ID: sID,
        });
      },

      onAddPress() {
        MessageToast.show("Add Asset button pressed");
      },

      onSearch(oEvent) {
        const sValue = oEvent.getParameter("newValue");

        const oBinding = this.byId("assetTable").getBinding("items");

        const aFilters = [];

        if (sValue) {
          aFilters.push(new Filter("name", FilterOperator.Contains, sValue));
        }

        oBinding.filter(aFilters);
      },

      onStatusFilter(oEvent) {
        const sStatus = oEvent.getSource().getSelectedKey();

        const oBinding = this.byId("assetTable").getBinding("items");

        if (!sStatus) {
          oBinding.filter([]);
          return;
        }

        oBinding.filter([new Filter("status", FilterOperator.EQ, sStatus)]);
      },

      onCategoryFilter(oEvent) {
        const sCategory = oEvent.getSource().getSelectedKey();

        const oBinding = this.byId("assetTable").getBinding("items");

        if (!sCategory) {
          oBinding.filter([]);
          return;
        }

        oBinding.filter([new Filter("category", FilterOperator.EQ, sCategory)]);
      },
    });
  },
);
