import {app_id, app_key} from "./keys.js";



const count = 10;
let page= 0;

const input = document.querySelector('.keyword-input');
const health = document.querySelector('select[name="health"]');
const diet = document.querySelector('select[name="diet"]');
const recipesCount =document.querySelector('.recipe-count-number');
const ul= document.querySelector('ul');

const search = document.querySelector('.search-button');
const recipes = document.querySelector('#recipes');

const calorieMin=document.querySelector('input[name="calorieMin"]')  ;
const calorieMax=document.querySelector('input[name="calorieMax"]') ;

let results=[];


let url ; 

const  enableSearch = () => {
	if ((input.value!=='') && (health.value !=='') && (diet.value !== '') && (calorieMin.value !== '') && (calorieMax.value !==''))
		 {search.removeAttribute ('disabled');
		 url  = "https://api.edamam.com/search?q=" +input.value +"&app_id=" + app_id + "&app_key=" + app_key + "&from=" +page +"&to="+ (page + count) + "&calories="+ calorieMin.value + "-"+ calorieMax.value+"&health=" + health.value + "&diet=" +diet.value;
		}
		else search.disabled = true ;
}

input.addEventListener('change', enableSearch);
health.addEventListener('change', enableSearch);
diet.addEventListener('change', enableSearch);
calorieMin.addEventListener('change', enableSearch);
calorieMax.addEventListener('change', enableSearch);
search.addEventListener('click', () => {
	queryData(url); });





 const  addRecipe = (data) =>{
 	const recipeElement = document.createElement('section');
 	recipeElement.classList.add('recipe-element');


 	const image = document.createElement('img');
 	image.setAttribute('src', data.recipe.image )
 	
 	const label = document.createElement('h3');
 	label.classList.add('labels');
 	label.textContent = data.recipe.label;


 	const labels = document.createElement('article');
 	// labels.classList.add('labels');
 	labels.classList.add('label');
 	labels.innerHTML = data.recipe.healthLabels;

 	label.appendChild(labels);
 	
 	const calories=document.createElement('div');
 	calories.textContent= Math.round(data.recipe.calories/data.recipe.yield);
  	calories.setAttribute('z-index',9);
  	

 	calories.classList.add('calories');

 	recipeElement.appendChild(image);
 	recipeElement.appendChild(label);
	recipeElement.appendChild(calories);
 	// recipeElement.appendChild(labels);
 	recipes.appendChild(recipeElement);
 	
 }

 const createLink = (number) => {
	var li=document.createElement('li');
	var a= document.createElement('a')
	a.setAttribute ('value', "https://api.edamam.com/search?q=" +input.value +"&app_id=" + app_id + "&app_key=" + app_key + "&from=" +(10*number) +"&to="+ (10*number +count) + "&calories="+ calorieMin.value + "-"+ calorieMax.value+"&health=" + health.value + "&diet=" +diet.value);
	a.innerHTML=number+1;
	li.appendChild(a);
	li.addEventListener('click', () => {page=number; queryData(a.getAttribute('value')) });
	

	ul.appendChild(li);
}

const  addPagination = (pages) => {
	if (pages < 2) { for (var i=0; i<5; i++){
		createLink(i);}}
		 else {for (var i=pages-2; i<pages+3; i++) { createLink(i);}
		}
}

 const  populate = (arr) => {
 
		recipes.innerHTML='';
		ul.innerHTML="";
 	
 		arr.forEach( (e) => {addRecipe(e)});
		
		addPagination(page);

 }







const queryData = (url) => {
	let req;
	fetch(url)
	.then(data => {return data.json()}) 
	.then(req => {
		
		 recipesCount.innerHTML = req.count;
		 		recipes.innerHTML='';
				ul.innerHTMl="";
		
		
		  results = req.hits;
 			populate(results);
 		
 		}
 			) 



}

	

 


 


 //https://api.edamam.com/search?q=chicken&app_id=739cfaa5&app_key=197a5227d653c84d8174048f7515d2f5&from=0&to=3&calories=591-722&health=vegan