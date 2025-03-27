var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('auto play is set to '+ video.autoplay);
	video.loop=false;
	console.log('loop is set to '+ video.loop );
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

