var moviesArr = [ 
	{name: "Back to the future",
	 img: "./img/BackToTheFuture.jpg"
	},
	{name: "Back to the future 2",
	 img: "./img/BackToTheFuture2.jpg"
	},
	{name: "Back to the future 3",
	 img: "./img/BackToTheFuture3.jpg"
	},
	{name: "Juno",
	 img: "./img/Juno.jpg"
	},
	{name: "Frailty",
	 img: "./img/Frailty.jpg"
	},
	{name: "Full Metal Jacket",
	 img: "./img/FullMetalJAcket.jpg"
	},
	{name: "Saving Private Rian",
	 img: "./img/SavingPrivateRian.jpg"
	},
	{name: "Die Hard",
	 img: "./img/DieHard.jpg"
	},
	{name: "Maratonci trče počasni krug",
	 img: "./img/maratonci.png"
	},
	{name: "Ko to tamo peva",
	 img: "./img/KoToTamoPeva.jpg"
	},
	{name: "Točkovi",
	 img: "./img/Tockovi.jpg"
	},
	{name: "Mi nismo anđeli",
	 img: "./img/andjeli.jpg"
	}
];

var movies = document.querySelector('.movies');
var input = document.querySelector('input');
var title ;


function populate(arr) {
	for (var i=0; i<arr.length; i++) {
		var movie = document.createElement('div');
		var img = document.createElement('img');
		var title = document.createElement('div');
		var x = document.createElement('img');

		img.setAttribute('src', arr[i].img);
		title.innerHTML= arr[i].name;
		title.classList.add('title');

		x.classList.add('x');
		x.setAttribute('src', './img/download.png')
		movie.appendChild(img);
		movie.appendChild(title);
		movie.appendChild(x);
		movies.appendChild(movie);
	}
} 

function filter() {
	var input = document.querySelector('input');
	input.addEventListener('keyup', function(e) {
	title= e.target.value.toLowerCase();

	var list= document.querySelectorAll('.title');
	

	for (var i=0; i<list.length;i++ ) {
		if (list[i].textContent.toLowerCase().indexOf(title)>-1) {list[i].parentElement.classList.remove('hidden');}
			else {list[i].parentElement.classList.add('hidden');}
	}
})
}

function close() {
	var x = document.querySelectorAll('.x');
	for (var i=0; i<x.length; i++) {
		x[i].addEventListener('click', function(e) {
			e.target.parentElement.classList.add('hidden');
		})
	}
}

populate(moviesArr);
filter();
close();

