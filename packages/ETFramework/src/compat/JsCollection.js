Ext.define('ETFramework.compat.JsCollection',{
	extend: 'Ext.Base',
	alternateClassName: ['Collection.paras.JsCollection'],
	requires: ['ETFramework.compat.QuerysCollection'],
	config: {
		HeadClassName: 'null',
		DD_GridStreamName: 'rts',
		WebInfo_Collection: 'WebInfo_Collection',
		DD_BillHeadCartStream_Name: 'bhcs',
		BodyClassName: 'null',
		Server_Bo_Name: '',
		Server_Bo_MethodName: '',
		DD_BillType: '',
		SD_WherePart: '',
		SD_OrderPart: '',
		Js_DD_RootWar_Path: '',
		extra: {}
	},
	constructor: function (config) {
        this.initConfig(config);
        return this;
    },
	toString: function () {
		var result = {
			HeadClassName: this.getHeadClassName(),
			DD_GridStreamName: this.getDD_GridStreamName(),
			WebInfo_Collection: this.getWebInfo_Collection(),
			DD_BillHeadCartStream_Name: this.getDD_BillHeadCartStream_Name(),
			BodyClassName: this.getBodyClassName(),
			Server_Bo_Name: this.getServer_Bo_Name(),
			Server_Bo_MethodName: this.getServer_Bo_MethodName(),
			DD_BillType: this.getDD_BillType(),
			SD_WherePart: this.getSD_WherePart(),
			SD_OrderPart: this.getSD_OrderPart(),
			Js_DD_RootWar_Path: this.getJs_DD_RootWar_Path()		
		};

		var extra = this.getExtra();

		Object.keys(extra).map(function (key) {
			result[key] = extra[key];
		});
		return JSON.stringify(result);
	},
	initEnvParas : function() {		
		envCollection = new Collection.paras.QuerysCollection
		envCollection.Server_Bo_MethodName = "initEnvParas";
		var tmpUrl = 'WebInfo_Collection' + "="
				+ encodeURIComponent(Ext.util.JSON.encode(envCollection));
		Ext.Ajax.request({
					url : envCollection.Js_DD_RootWar_Path
							+ "/servlet/WebPageSubmitAction?",
					params : Ext.urlDecode(tmpUrl),
					success : function(oResponse, opts) {
						var tmpObj = oResponse.responseText
						var retInfos = eval("(" + tmpObj + ")");
						if (retInfos.DD_Server_RetTF == 'true') {
							envParas=retInfos.selfCollections;
							envParas.getData=function(){
								var myDate = new Date();
								myDate=myDate.format('Y-m-d');
								return myDate;
							};
						}
					},
					failure : function() {
						Ext.MessageBox.alert('Alter Message', 'No Network!');
					},
					scope:this
				});

	}
});