// task 1

var person = {
	name: "Mike",
	age: 28,
	married: true
};


function one(a) {
	a.age = 34;
	delete a.married;
	console.log(a);
}

one(person);


//task 2

 person = {
	name: "Jack",
	age: 32,
	married: true
};

function offspring(a){
	if (!('children' in a)) {
		a.children=[];
		a.children[0]= {
			name: "John",
			age: 11,
			gender: 'male'
		};
		a.children[1] ={
			name: "Ann",
			age:12,
			gender: 'female'
		};

	}
}

offspring(person);
console.log(person);

//task 3

var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];


function passed(a) {
	for(var i=0; i<a.length;i++){
		if (a[i].passed) {console.log(a[i].name+" passed exam.");
				}else { console.log(a[i].name+ " didn't pass exam");}

	}
}	

passed(students);

//task 4

var names = [];
var ages = [];
var passed =[];

function populate(a){
	for(var  i=0; i<a.length;i++) {
		names[i]=a[i].name;
		ages[i]=a[i].age;
		passed[i]=a[i].passed;

	}

}

populate(students);
console.log(names);
console.log(ages);
console.log(passed);