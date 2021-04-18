var team = { 
	teamLogo: "./img/header_logo.svg",
	teamName: "Real Madrid",
	players: 

		[
		{name: "Thibaut",
		 lastName: "Courtois",
		 number: 1,
		 age: 28,
		 position: "goalkeeper",
		 image: "./img/ThibautCourtois.jpg"
		} ,

		{name: "Sergio",
		 lastName: "Ramos",
		 number: 4,
		 age: 35,
		 position: "center-back",
		 image: "./img/SergioRamosGarcía.jpg" 
		},
		{name: "Raphaël",
		 lastName: "Varane",
		 number: 5,
		 age: 27,
		 position: "center-back",
		 image: "./img/RaphaëlVarane.jpg" 
		},
		{name: "Marcelo ",
		 lastName: "da Silva",
		 number: 12,
		 age: 32,
		 position: "left-back",
		 image: "./img/MarceloVieiradaSilva.jpg" 
		},
		{name: "Daniel  ",
		 lastName: "Carvajal ",
		 number: 2,
		 age: 29,
		 position: "right-back",
		 image: "./img/DanielCarvajalRamos.jpg" 
		},
		{name: "Carlos ",
		 lastName: "Casimiro ",
		 number: 14,
		 age: 29,
		 position: "Defensive Midfield",
		 image: "./img/CarlosHenriqueCasimiro.jpg" 
		},
		{name: "Federico  ",
		 lastName: "Valverde  ",
		 number: 15,
		 age: 22,
		 position: "center Midfield",
		 image: "./img/FedericoSantiagoValverdeDipetta.jpg" 
		},
		{name: "Toni  ",
		 lastName: "Kroos  ",
		 number: 8,
		 age: 31,
		 position: "center Midfield",
		 image: "./img/ToniKroos.jpg" 
		},
		{name: "Francisco  ",
		 lastName: "Suárez  ",
		 number: 22,
		 age: 28,
		 position: "Attaking Midfield",
		 image: "./img/FranciscoRománAlarcónSuárez.jpg" 
		},
		{name: "Karim  ",
		 lastName: "Benzema ",
		 number: 9,
		 age: 33,
		 position: " Centre-Forward",
		 image: "./img/KarimBenzema.jpg" 
		},
		{name: "Andriy",
		 lastName: "Lunin",
		 number: 13,
		 age: 22,
		 position: "goalkeeper",
		 image: "./img/AndriyLunin.jpg" 
		},
		{name: "Éder ",
		 lastName: "Militão",
		 number: 3,
		 age: 23,
		 position: " Centre-Back",
		 image: "./img/ÉderGabrielMilitão.jpg" 
		},
		{name: "Luka  ",
		 lastName: "Modric",
		 number: 10,
		 age: 35,
		 position: "Central Midfield",
		 image: "./img/LukaModrić.jpg" 
		},
		{name: "Ferland   ",
		 lastName: "Mendy",
		 number: 23,
		 age: 25,
		 position: "Left-Back",
		 image: "./img/FerlandMendy.jpg" 
		},
		{name: "Mariano   ",
		 lastName: "Díaz",
		 number: 24,
		 age: 27,
		 position: "Centre-Forward",
		 image: "./img/MarianoDíazMejía.jpg" 
		}
		]
	
}

var firstSquad = document.getElementById('first-squad');
var substitutes = document.getElementById('substitutes');

function addLogo(){
	var logo=document.createElement('img');
	var header = document.querySelector('header');

	logo.setAttribute('src', team.teamLogo);
	header.prepend(logo);

}

function getRandom(arr){
	return Math.round(Math.random()* (arr.length-1))
}

function populate(){
	while (team.players.length){
	var randomPlayer = getRandom(team.players);
	var player = createPlayer(team.players[randomPlayer]);
	var container = team.players.length > 4 ? firstSquad : substitutes ;
	container.appendChild(player);
	team.players.splice(randomPlayer,1)
}
}

function createPlayer(playerData){
	var player = document.createElement('div');
	var image= '<img src="' + playerData.image + '">';
	var name = '<div> ' + playerData.number+ ' ' + playerData.name + ' '+ playerData.lastName + '</div>';
	var age = '<div> age: ' + playerData.age + '</div>';
	var position= '<div>' + playerData.position + '</div>';
	player.innerHTML = image + name + age + position;

	return player;
}

function makeSubstitute(){
	var firstSquadPlayers = firstSquad.querySelectorAll('div');
	var substitutePlayers = substitutes.querySelectorAll('div');

	var firstSquadNumber = getRandom(firstSquadPlayers);
	var substituteNumber = getRandom(substitutePlayers);
	var firstPlayer = firstSquadPlayers[firstSquadNumber];	
	var substitutePlayer = substitutePlayers[substituteNumber];
	var previousSubsitutePlayer = substitutePlayer.previousSibling;

	var nextSubsitutePlayer = substitutePlayer.nextSibling;

	firstPlayer.before(substitutePlayer);
	previousSubsitutePlayer ? previousSubsitutePlayer.after(firstPlayer) : nextSubsitutePlayer.before(firstPlayer);

}


addLogo();
populate();
setInterval(makeSubstitute, 60000);
