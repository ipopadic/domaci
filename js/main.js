//task 1

function toLowerCase(str){
	return str.toLowerCase();
}

var lorem = "Lorem ipsum dolor sit amet"

console.log(toLowerCase(lorem));



// task 2

function inString(str1, str2){
	if (str1.indexOf(str2) > -1) {
		console.log(str2+ " is in "+ str1)}
	else console.log(str2+ " is not in" + str1);
}


inString(lorem,'sit');

//task 3

function lastLetter(str) {
	return str.length-1;
}

console.log(lastLetter(lorem))


function split(str){
	var arr=[];
	var arr2 =str.split(' ');
	for (var i=0;i<3;i++){
		arr[i]=arr2[i];
	}
	return arr;
}

console.log(split(lorem));



// task 5

var piter="Piter is an actor.";

function switchLettters(str){
	var res='';
	var i=str.charAt(3);
	for (var j=0;j<str.length;j++){
		if (j===3){res=res + str.charAt(str.length-3);}
		else if (j===str.length-3) (res =res + i);
			else res= res + str.charAt(j);
	}
	return res;
}

console.log(switchLettters(piter));	

// task 6



var someData = [34, 23, 14, 56, 23, 44, 65];

function remove(arr, num) {
	var ind=arr.indexOf(num);
	var first = arr.slice(0, ind);
	var second = arr.slice(ind+1, arr.length);
	var res = first.concat(second);
	return res;	
}


someData = remove(someData,56);

console.log(someData)


// task 7

var someData = [34, 23, 14, 56, 23, 44, 65];

function asd(arr){
	var first =arr.slice(0,4);
	first.shift();
	var second= arr.slice(4,arr.length);
	second.sort();
	second.reverse();
	return first.concat(second);

}

otherData = asd(someData);
console.log(otherData)


//task 8


var someData = [334, 233, 212, 199, 154, 122];

function recalculate(arr){
	var res=[];
	res[0]=arr[0];
	for(i=1;i<arr.length;i++)
		{res[i]=arr[i]-arr[i-1];}
	return res;
}

console.log(recalculate(someData))


//task 9



var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
]


function over85(arr) {
	arr.forEach (function(item){item.avgGrade= item.avgGrade.toFixed(2)})
	return arr.filter(function(item){return item.avgGrade>8.5;})
}


var newData=(over85(students));

console.log(newData)