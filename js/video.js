var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('auto play is set to '+ video.autoplay);
	video.loop=false;
	console.log('loop is set to '+ video.loop );
});

// play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log('video should start playing');
	document.querySelector("#volume").innerText = video.volume*100 + "%"
});

// pause
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log('video should pause');
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log('video new speed is ' + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log('video new speed is ' + video.playbackRate);
});

// skip ahead
// document.querySelector("#skip").addEventListener("click", function(){
// 	console.log('Time before skip: '+ video.currentTime);
// 	video.currentTime += 10;
// 	console.log('Time after skip: ' + video.currentTime)
// })
// https://stackoverflow.com/questions/36731230/how-to-fast-forward-or-rewind-an-html5-video-to-a-certain-time-point/36731430
document.querySelector("#skip").addEventListener("click", function(){
	console.log('Time before skip: '+ video.currentTime);
	if (video.currentTime+ 10 <= video.duration){
		video.currentTime+= 10
	} else{
		video.currentTime = 0
	}
	console.log('Time after skip: ' + video.currentTime)
})

// mute and unmute
let muteButton = document.getElementById("mute");
muteButton.addEventListener("click", function(){
	if (muteButton.muted){
		muteButton.muted = false;
		video.muted = false;
		muteButton.innerHTML = "Mute"
	} else{
		muteButton.muted = true;
		video.muted = true;
		muteButton.innerHTML = "Unmute"
	}
})

// volume
// https://www.w3schools.com/jsref/prop_range_value.asp
document.querySelector("#slider").addEventListener("input", function(){
	var x = document.getElementById("slider").value;
	video.volume = x / 100;
	document.querySelector("#volume").innerText = video.volume*100 + "%";
} )

// styled
// https://forum.freecodecamp.org/t/how-can-i-add-css-to-the-dynamically-created-elements-in-javascript/504351/8
document.querySelector("#vintage").addEventListener("click", function(){
	// video.className = "Old School";
	// video.className
	video.classList.add("oldSchool")
})

// original
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
})