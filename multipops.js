var myObject = {
    'create': function(params) {
    	if(params != null && !Array.isArray(params))
    		throw err
		var obj = Object.create(this);
		obj.prototypes = [];
		if(params != null) {
		    obj.prototypes = params;
		}
		return obj;
    },
    'call': function (funcName, params) {
		if(this.hasOwnProperty(funcName)) {
			return this[funcName](params);
		}
		var result;
		this.prototypes.forEach(
			function(obj) {
				var call = obj.call(funcName, params)
				if(call != undefined && result === undefined) {
					result = call;
				}
			}
		);
		return result;
    },
    'prototypes': []
}

try {
	var obj0 = myObject.create(null);
	obj0.func = function(params){return "func0: " + params};
	var obj1 = myObject.create([obj0]);
	var obj2 = myObject.create([]);
	obj2.func = function(params){return "func2: " + params};
	var obj3 = myObject.create([obj1, obj2]);
	console.log(obj3.call('func', 'hello'));
}
catch (err){
	console.log("Params must be Array")
}
