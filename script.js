//code to inject to website

const myButton = document.createElement("button");
myButton.textContent = "Skip ad"; 

// Style the button using inline styles
myButton.classList.add("adButtonSkip");

// Add the button to the body of the document
document.body.appendChild(myButton);

// let vp = document.querySelector('.video-stream')
										//find the streaming website skip ad button, in this example im using yt
let adBanner = document.querySelector('.ytp-ad-player-overlay-flyout-cta')
//ytp-ad-skip-button-modern ytp-button

const stopSkip = (vp) => {
	let skipBtn = document.querySelector('.ytp-ad-skip-button-modern')
	vp.muted = false
	vp.playbackRate = 1
	if (skipBtn) {
		skipBtn.click()	
	}else{
		console.log("couldnt find skip button")
	}
}

const skipAd = () => {
	let vp = document.querySelector('.video-stream')
	// let skipBtn = document.querySelector('.ytp-ad-skip-button-modern')
	// let skipBtn2 = document.getElementsByClassName('ytp-ad-skip-button-modern')[0]
	vp.muted = true 
	vp.playbackRate = 0
	// vp.playbackRate = 16
	setTimeout(() => {
		vp.muted = false
		vp.playbackRate = 1
		stopSkip(vp)
	}, 350);
} 

myButton.setAttribute("onclick", "skipAd()")

//const videoPlayer = document.querySelector(".ytd-player")

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 96 || event.keyCode == 92) {
    skipAd()
  }
  
  //190 220
});