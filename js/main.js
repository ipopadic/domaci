var app_id = '739cfaa5';
var app_key = '197a5227d653c84d8174048f7515d2f5';
var count = 10;
var page= 0;

var input = document.querySelector('.keyword-input');
var health = document.querySelector('select[name="health"]');
var diet = document.querySelector('select[name="diet"]');
var recipesCount =document.querySelector('.recipe-count-number');
var ul= document.querySelector('ul');

var search = document.querySelector('.search-button');
var recipes = document.querySelector('#recipes');

var calorieMin=document.querySelector('input[name="calorieMin"]')  ;
var calorieMax=document.querySelector('input[name="calorieMax"]') ;

var results=[];

input.addEventListener('change', enableSearch);
health.addEventListener('change', enableSearch);
diet.addEventListener('change', enableSearch);
calorieMin.addEventListener('change', enableSearch);
calorieMax.addEventListener('change', enableSearch);
search.addEventListener('click', function() {
	queryData(url); });

var url ; 



function enableSearch() {
	if ((input.value!=='') && (health.value !=='') && (diet.value !== '') && (calorieMin.value !== '') && (calorieMax.value !==''))
		 {search.removeAttribute ('disabled');
		 url  = "https://api.edamam.com/search?q=" +input.value +"&app_id=" + app_id + "&app_key=" + app_key + "&from=" +page +"&to="+ (page + count) + "&calories="+ calorieMin.value + "-"+ calorieMax.value+"&health=" + health.value + "&diet=" +diet.value;
		}
		else search.disabled = true ;
}

 function addRecipe(data){
 	var recipeElement = document.createElement('section');
 	recipeElement.classList.add('recipe-element');


 	var image = document.createElement('img');
 	image.setAttribute('src', data.recipe.image )
 	
 	var label = document.createElement('h3');
 	label.classList.add('labels');
 	label.textContent = data.recipe.label;


 	var labels = document.createElement('article');
 	// labels.classList.add('labels');
 	labels.classList.add('label');
 	labels.innerHTML = data.recipe.healthLabels;

 	label.appendChild(labels);
 	
 	var calories=document.createElement('div');
 	calories.textContent= Math.round(data.recipe.calories/data.recipe.yield);
  	calories.setAttribute('z-index',9);
  	

 	calories.classList.add('calories');

 	recipeElement.appendChild(image);
 	recipeElement.appendChild(label);
	recipeElement.appendChild(calories);
 	// recipeElement.appendChild(labels);
 	recipes.appendChild(recipeElement);
 	
 }

 function populate(arr) {
 
			recipes.innerHTML='';
		ul.innerHTML="";
 	// for (var i=0; i<count; i++){

 	// 	addRecipe(arr[i]);}
 	arr.forEach(function(e) {addRecipe(e)});
		
		addPagination(page);

 }


function createLink(number) {
	var li=document.createElement('li');
	var a= document.createElement('a')
	a.setAttribute ('value', "https://api.edamam.com/search?q=" +input.value +"&app_id=" + app_id + "&app_key=" + app_key + "&from=" +(10*number) +"&to="+ (10*number +count) + "&calories="+ calorieMin.value + "-"+ calorieMax.value+"&health=" + health.value + "&diet=" +diet.value);
	a.innerHTML=number+1;
	li.appendChild(a);
	li.addEventListener('click', function() {page=number; queryData(a.getAttribute('value')) });
	

	ul.appendChild(li);
}

function addPagination(pages) {
	if (pages < 2) { for (var i=0; i<5; i++){
		createLink(i);}}
		 else {for (var i=pages-2; i<pages+3; i++) { createLink(i);}
		}
				}


function queryData(url) {
	
	var req = new XMLHttpRequest;
	req.open ('GET', url);
	req.onload =function() {  
		
		 recipesCount.innerHTML = JSON.parse(req.responseText).count;
		 		recipes.innerHTML='';
				ul.innerHTMl="";
		// console.log(JSON.parse(req.responseText).hits[0]);
		
		  results = JSON.parse(req.responseText).hits;
 			populate(results);
 			// input.value='';
 			 



	};


	req.send();

 }


 


 //https://api.edamam.com/search?q=chicken&app_id=739cfaa5&app_key=197a5227d653c84d8174048f7515d2f5&from=0&to=3&calories=591-722&health=vegan