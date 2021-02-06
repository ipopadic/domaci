//task 1

function Student (name, last_name, age ,average_grade) {
	this.name = name;
	this.last_name = last_name;
	this.age = age;
	this.average_grade = average_grade;
}

var pera= new Student('Pera', 'Peric', 32, 9.34);
var mika= new Student('Mika', 'Mikic', 44, 8.22);
var laza= new Student('Laza', 'Lazic', 23, 10);
var jovan = new Student('Jovan', 'Jovanovic', 25, 9);

console.log(pera, mika, laza, jovan);




// task 2 name position, age  goals, cardY sards R
function Player(name, position, age, goals, cardY, cardR){
	this.name=name;
	this.position = position;
	this.age = age;
	this.goals = goals;
	this.cardY = cardY;
	this.cardR = cardR;
}



var frenkie =new Player ('Frenkie de Jong'	,'MF',	23,		3,	3,	0,	0	,3	,0);
var jordi= new Player('Jordi Alba'	,	'DF',	31	,	1	,3	,0	,0,	7,	0);
var lionel= new Player('Lionel Messi'		,'FW'	,33		,12	,2,	2,	3,	3,	0);
var antoine= new Player('Antoine Griezmann'	,'FW',	29	,	6,	4,	0,	1,	2,	0);
var sergio= new Player('Sergio Busquets',	'MF',	32,		0,	0,	0,	0,	5,	0);
var pedri= new Player('Pedri',			'MF',	18,		2,	2,	0,	0,	1,	0);
var marc= new Player('Marc-André ter Stegen'	,'GK',	28,		0,	0,	0,	0,	0,	0);
var clement= new Player('Clément Lenglet',		'DF',	25,		1,	0,	0,	0,	7,	1);
var serino= new Player('Sergiño Dest'	,	'DF',	20,		0,	1,	0,	0,	1,	0);
var ronald= new Player('Ronald Araújo'	,	'DF',	21	,	1,	0,	0,	0,	0,	0);



console.log(frenkie, jovan,lionel, antoine, pedri, marc, clement, serino, ronald);






// task 3
var players = [
['Frenkie de Jong',			'MF',	23,		3,	3,	0,	0,	3,	0],
['Jordi Alba',				'DF',	31,		1,	3,	0,	0,	7,	0],
['Lionel Messi',			'FW',	33,		12,	2,	2,	3,	3,	0],
['Antoine Griezmann',		'FW',	29,		6,	4,	0,	1,	2,	0],
['Sergio Busquets',			'MF',	32,		0,	0,	0,	0,	5,	0],
['Pedri',					'MF',	18,		2,	2,	0,	0,	1,	0],
['Marc-André ter Stegen',	'GK',	28,		0,	0,	0,	0,	0,	0],
['Clément Lenglet',			'DF',	25,		1,	0,	0,	0,	7,	1],
['Sergiño Dest',			'DF',	20,		0,	1,	0,	0,	1,	0],
['Ronald Araújo',			'DF',	21,		1,	0,	0,	0,	0,	0]

];
 var player=[];


for(var i=0;i<players.length;i++){
	player[i]=new Player(players[i][0],players[i][1],players[i][2],players[i][3],players[i][4],players[i][5]);

}

for(var i=0;i<players.length;i++){
console.log(player[i]);
}



// task 4



function Operation(numberOne, numberTwo, fun){
	this.numberOne =numberOne;
	this.numberTwo = numberTwo;
	this.fun = fun;
}

function multiply () {return this.numberOne * this.numberTwo;}

function devide () {return this.numberOne / this.numberTwo;}

function add () {return this.numberOne + this.numberTwo;}

function subtract () {return this.numberOne - this.numberTwo;}


var first = new Operation(1, 2, multiply);
var second = new Operation(3, 4, devide);
var third = new Operation(5, 6, add);
var fourth = new Operation(7, 8, subtract);

console.log(first.fun(), second.fun(), third.fun(), fourth.fun());
















