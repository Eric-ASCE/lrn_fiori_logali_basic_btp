//servicios odata
// https://services.odata.org/V3/(S(1titqu4s3q42cjwyrxwkb35o))/OData/OData.svc/
// https://services.odata.org/northwind/northwind.svc/
// https://services.odata.org/northwind/northwind.svc/?$format=json
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap/ui/model/Filter} Filter
     * @param {typeof sap/ui/model/FilterOperator} FilterOperator
     */
    function (Controller,
	Filter,
	FilterOperator,
	model) {
        "use strict";

        return Controller.extend("invascelogali.invoiceascelogali.controller.viewAsceLogali", {
            onInit: function () {
                const oJSModel = new sap.ui.model.json.JSONModel()
                const oView = this.getView()
                oJSModel.loadData("./model/selectionScreenMenu.json")
                oView.setModel(oJSModel, "ctrlselectionScreen") // (modelo, nombre)
            },

            onFilter: function(oEvent){
                const oData = this.getView().getModel("ctrlselectionScreen").getData()    
                console.log('oData',oData)
                let lv_filter = []
                // alert('ValsOdata',oData.shipName, oData.CountryKey)
                console.log('ValsOdata',oData.shipName, oData.CountryKey)
                if (oData.shipName !== "") {
                    lv_filter.push(new Filter("ShipName", FilterOperator.Contains, oData.shipName))
                }
                if (oData.CountryKey !== "") {
                    lv_filter.push(new Filter("Country", FilterOperator.Contains, oData.CountryKey))
                }

                const oList = this.getView().byId("invoicesLisst")
                const oBinding = oList.getBinding("items")
                oBinding.filter(lv_filter)
            },

            onClearFilter: function(){
                const oModelSScreen = this.getView().getModel('ctrlselectionScreen')
                oModelSScreen.setProperty("/CountryKey", '')
                oModelSScreen.setProperty("/shipName", '')

                const oList = this.getView().byId("invoicesLisst")
                const oBinding = oList.getBinding("items")
                oBinding.filter([]) // al enviar array vacio no considera ningun filtro
            }
        });
    });
