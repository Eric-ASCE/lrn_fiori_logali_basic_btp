/*global QUnit*/

sap.ui.define([
	"invascelogali/invoiceascelogali/controller/viewAsceLogali.controller"
], function (Controller) {
	"use strict";

	QUnit.module("viewAsceLogali Controller");

	QUnit.test("I should test the viewAsceLogali controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
