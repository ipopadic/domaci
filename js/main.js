const team = { 
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

const firstSquad = document.getElementById('first-squad');
const substitutes = document.getElementById('substitutes');
const sub = document.getElementById('sub');


const addLogo= ()=>{
	const logo=document.createElement('img');
	const header = document.querySelector('header');

	logo.setAttribute('src', team.teamLogo);
	header.prepend(logo);

}

const  getRandom = (arr) => ( Math.round(Math.random()* (arr.length-1)));


const  populate = () => {
	while (team.players.length){
	const randomPlayer = getRandom(team.players);
	const player = createPlayer(team.players[randomPlayer]);
	let container = team.players.length > 4 ? firstSquad : substitutes ;
	container.appendChild(player);
	team.players.splice(randomPlayer,1)
}
}

const  createPlayer = (playerData) => {
	const player = document.createElement('div');
	const image= '<img src="' + playerData.image + '">';
	const name = '<div> ' + playerData.number+ ' ' + playerData.name + ' '+ playerData.lastName + '</div>';
	const age = '<div> age: ' + playerData.age + '</div>';
	const position= '<div>' + playerData.position + '</div>';
	player.innerHTML = image + name + age + position;

	return player;
}

const  makeSubstitute = () => {
	const firstSquadPlayers = firstSquad.querySelectorAll('div');
	const substitutePlayers = substitutes.querySelectorAll('div');

	const firstSquadNumber = getRandom(firstSquadPlayers);
	const substituteNumber = getRandom(substitutePlayers);
	const firstPlayer = firstSquadPlayers[firstSquadNumber];	
	const substitutePlayer = substitutePlayers[substituteNumber];
	const previousSubsitutePlayer = substitutePlayer.previousSibling;

	const nextSubsitutePlayer = substitutePlayer.nextSibling;

	firstPlayer.before(substitutePlayer);
	previousSubsitutePlayer ? previousSubsitutePlayer.after(firstPlayer) : nextSubsitutePlayer.before(firstPlayer);

}


addLogo();
populate();
// setInterval(makeSubstitute, 6000 );

sub.addEventListener('click', makeSubstitute);