function createClass(name, superClasses){
	function newObj() {
		return Object.create(this);
	}
	function call(funcName, params) {
		var visited = [];
		return this.findFunc(funcName, params, visited);
	}
	function getName() {return name}
	function findFunc(funcName, params, visited) {
		visited.push(this);
		if(this.hasOwnProperty(funcName)) {
			return this[funcName](params);
		}
		var result;
		this.superClassList.forEach(
			function(obj) {
				if(visited.indexOf(obj) == -1) {
					var call = obj.findFunc(funcName, params, visited)
					if(call != undefined && result === undefined) {
						result = call;
						return;
					}
				}
				else
					console.log("WARNING: Circular inheritance detected!");
			}
		);
		return result;
	}
	return {
		className: name,
		superClassList: superClasses,
		newObj: newObj,
		call: call,
		findFunc: findFunc,
		getName: getName
	};
}

var class0 = createClass("Class0", null);
class0.func = function(arg) {return "func0: " + arg};
var class1 = createClass("Class1", [class0]);
var class2 = createClass("Class2", []);
class2.func = function(arg) {return "func2: " + arg};
var class3 = createClass("Class3", [class1, class2]);
var obj3 = class3.newObj();
console.log(obj3.call('func', 'hello'));