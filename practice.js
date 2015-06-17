/* 1
Complete the getValues function. This function should:
accept one argument, an object
return an array of each of the values in the object
For example:
getValues({name: "Rob", age: 101}) // returns ["Rob", 101]
*/

function getValues(newobj) {
	var values = [];
	var prop;
		for (prop in newobj){
			values.push(newobj[prop]);
		}
	return values;	
}

var me = {
	name: "Monica",
	Age: "26",
	Sign: "Libra"
}

console.log(getValues(me));

/* 2
Create a function returnKeys to:
Accept an object as an argument
Return the keys in the object as an array
For example:
returnKeys({name: "Person", age: 47}) // returns ["name", "age"]
*/

function returnKeys(obj2) {
	var keys = [];
	var prop;
		for(prop in obj2) {
			keys.push(prop);
		}
	return keys;
}

console.log(returnKeys(me));


/*3
Create a function matchArray to:
Accept two arguments: an object and an array of elements
Return true when all of the elements in the array are keys in the object. Otherwise return false
*/

function matchArray(obj,arr) {
	var keys = [];
	var prop;
		for(prop in obj) {
			keys.push(prop);
		}
	if(keys.toString() == arr.toString()) {
		return true
	}
	else {
		return false;
	}
}

x = {
	name: "Monica",
	age: 26,
	hometown: "Bethesda, MD"
}

y = ["name", "age", "hometown"];

z = ["apples", "bananas", "oranges"];

matchArray(x, y);
