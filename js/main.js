// first task

function isOnline() {
	if (window.navigator.onLine) {alert("browser is online")}
		else {alert("browser is offline")}
}

isOnline();

//task 2


function reload(){
	location.reload();	
}

// reload();

//task 3

// setTimeout( function(){location.href='http://www.google.com'}, 3000)



// task 4

var a=0;

function count(){
	a++;
	console.log(a);
	if (a>=15) clearInterval(pera);
}

var pera= setInterval(count, 1000)


// task 5


function random10(){
	return Math.round(Math.random()*10);
}

console.log(random10());


var users = [
		{name:'Peter',
	age: 32,
	status:'inactive'},
		{name:'Mike',
	age: 26,
	status:'inactive'},
		{name:'John',
	age: 44,
	status:'inactive'},
		{name:'Ann',
	age: 12, 
	status:'inactive'},
		{name:'Sarah',
	age: 77,
	status:'inactive'},
	];

var user = prompt("log in");

var arr= users.filter(function(item) {return item.name==user;});

if (arr.length == 0) {console.log("User "+user+" doesn't exist");}
	else {
		users.forEach(function(item){if (item.name == name) { users.status='active'};})
		localStorage.setItem("loggedInUser", user)
		console.log(localStorage.getItem("loggedInUser"));
		setTimeout(function(){users.forEach(function(item){if (item.name == name) { users.status='active'};}); localStorage.removeItem("loggedInUser");console.log(user+" is logged out")}, 60000)
	}



