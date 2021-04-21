var breed="cairn";
var select=document.querySelector('select');
var img= document.createElement('img');
var section= document.querySelector('section');
section.appendChild(img);


select.addEventListener( "change", function(e) {
	breed=e.target.value;
}) ;




function image(url) {
	img.setAttribute('src', url );

}

function dogs(breed) {

var req= new XMLHttpRequest();

req.open('GET' , 'https://dog.ceo/api/breed/'+breed+"/images/random");

req.onload = function () {
	var url = JSON.parse(req.responseText).message;
	image(url);
}

req.send();

}



setInterval ( function () {dogs(breed)}, 5000);