var key = "AIzaSyAyl8ot73SUeRXAs-2UAXHEEY4nTVBZ6xY";


var videoList = document.querySelector('.video-list');
var search = document.querySelector('.search input');
var searchButton = document.querySelector('.search button');
var videoPreview = document.querySelector('iframe');
var div = document.querySelector('div');

function getData (){
	var url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+ search.value +"&key=" + key;
	var req = new XMLHttpRequest();
	search.value = " ";
	req.open ("GET", url);
	req.onload = function (){
		listVideos (JSON.parse(req.responseText))
	}
	req.send();
	
}

function related(id){
	var urlRelated ="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relatedToVideoId=" +  id + "&type=video&key=" + key;
	console.log(urlRelated);
	var req = new XMLHttpRequest();
	
	req.open ("GET", urlRelated);
	req.onload = function (){
		listVideos (JSON.parse(req.responseText))
	}
	req.send();

}

function listVideos(data){
	videoList.innerHTML = "";
	data.items.forEach (function (video){
		createVideo(video);
	})
}

function createVideo (video){
	console.log(video)
	var container = document.createElement('div');
	var textWrapper = document.createElement('div');

	var image = document.createElement('img');
	image.setAttribute('src', video.snippet.thumbnails.default.url);
	container.appendChild(image);
	
	var title = document.createElement('h3');
	title.textContent = video.snippet.title;
	textWrapper.appendChild(title);
	
	var desc = document.createElement('p');
	desc.textContent = video.snippet.description;
	textWrapper.appendChild(desc);

	container.appendChild(textWrapper);
	container.addEventListener('click', function(){

	videoPreview.setAttribute('src', 'https://www.youtube.com/embed/' + video.id.videoId)
	videoPreview.classList.add('visible');
	related(video.id.videoId);
	});

	
	
	videoList.appendChild(container);
	
}



searchButton.addEventListener('click', getData);



