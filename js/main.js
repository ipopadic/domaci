
// TASK 5:



var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

someData.hasName = function () {
	if ('name' in this) {
		delete this.name;
		console.log(this);
		this.thirdMethod =function() {
			this.name = 'Mike';
			console.log(this);
		}
		this.thirdMethod();

}
}

someData.hasName();
someData.name = 'Peter';
console.log(someData);


//task 1

var data = [[1,2,3],[4,5,6],[7,8,9]]

function loop(a) {
	for (i=0;i<a.length;i++) {
		for (j=0; j<a[i].length; j++){
			console.log("At position "+i+", subposition "+j+", value is "+a[i][j])
		}
	}
}

loop(data);


// task 2

Object.prototype.method = function () {
	console.log(this.name, this.age);

}

data = [ {
	name:'Mike',
	age:23
},
	{
		name:'Suzzanne',
		age:34
	},
	{
		name: 'Peter',
		age:44
	},
	{
		name:'Ann',
		age:12
	},
	{
		name:'Michael',
		age: 54
	}
];

for (var i=0;i<data.length;i++)
	{	data[i].method();}

































