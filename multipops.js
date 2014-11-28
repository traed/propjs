var myObject = {
    'create': function(params) {
	var obj = Object.create(this);
	obj.prototypes = [];
	if(params != null) {
	    obj.prototypes = params;
	}
	return obj;
    },
    'call': function (funkName, params) {
	
    },
    'prototypes': []
}

var obj0 = myObject.create(null);
var obj1 = myObject.create([obj0]);
obj1.func = function(){return "Hejsan"};
var obj2 = myObject.create([obj0, obj1]);
//console.log(obj2.call(func, params));  TO BE IMPLEMENTED!!!
