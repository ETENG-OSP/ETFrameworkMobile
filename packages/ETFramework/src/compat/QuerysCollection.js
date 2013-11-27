Ext.define('ETFramework.compat.QuerysCollection',{
	alternateClassName:['Collection.paras.QuerysCollection'],
	config: {
		Server_Bo_Name: 'et.common.bc.query.CRefQueryBO',
		BodyClassName: "et.common.vo.query.QueryVO",
		Server_Bo_MethodName: "getQueryRecords",
		union_sql: 'no_unionsql',
		gridDS: 'arrayds',
		DD_BillType: 'PAGE_LIST',
		dimen_flag: null,
		FieldName: null,
		QuerySQL: "",
		refbyKey: null,
		fieldnums: 10,
		filternum: 2
	},
	getQuerySQL: function(queryvalue, refbykey,PowerctrVO) {    
		var querySql = this.QuerySQL;
		if (queryvalue != "" && queryvalue)
			querySql = querySql + " and " + this.queryField + " like '"
					+ queryvalue + "%'";

		return querySql;

	}

});