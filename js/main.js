var images = ["./img/1.jpg", "./img/2.jpg","./img/3.jpg","./img/4.png" ]


var slider = document.getElementById('slider');
var thumbnails = document.getElementById('thumbnails');



function loadSlider(arr) {
	var n=0;
	do {
		var image = document.createElement('img');
		image.setAttribute('src', arr[n]);
		(n===0)? null : image.classList.add('hidden');
		n++;
		slider.appendChild(image);
	}
		while(n<arr.length)
}

function displayThumbnails(arr){
	var n=0;

	do {
		var thumb = document.createElement('img');
		thumb.setAttribute('src', arr[n]);
		n++;
		thumbnails.appendChild(thumb);
	}
	while(n<arr.length)

}


function sliding () {
	slider.innerHTML='';
var slide = images.shift();
images.push(slide);

loadSlider(images);
boardering();
} 


function boardering(){
	var image = slider.firstChild;
	var path = image.getAttribute('src');
	var thumbArr = document.querySelectorAll('#thumbnails img');
	for (var i=0; i<thumbArr.length; i++){
		if (thumbArr[i].getAttribute('src') === path) {thumbArr[i].classList.add('border')}
				else {thumbArr[i].classList.remove('border')};

	}
}


loadSlider(images);
displayThumbnails(images);
setInterval(sliding, 5000);
boardering();





 