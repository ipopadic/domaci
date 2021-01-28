// task 5

var person = {
	name: "Jack",
	age: 32,
	married: true
}

var  superPerson = Object.create(person);

superPerson.location = 'Belgrade';
superPerson.number = 1233456;



console.log(superPerson.age);

//task 6


var person = {
	name: "Mike",
	age: 28,
	married: true,
	log: function() {
		console.log(this.name, this.age);
	}
};

person.log();


// task 7


var person = {};

person.create = function (a, b, c) {
	this.name = a;
	this.age = b;
	this.married =c;
}

person.create('Ann', 23,  false);


console.log(person);
