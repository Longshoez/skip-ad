// Add the styling for the button, which somehow is not showing up ;C
const Custom_Styles = css => document.head.appendChild(document.createElement('style')).innerHtml = css
Custom_Styles(`@import url('./watch-it-faster.css');`)

const myButton = document.createElement("button");
myButton.textContent = "Skip ad"; 

// Style the button using inline styles
myButton.classList.add("adButtonSkip");

// Add the button to the body of the document
document.body.appendChild(myButton);

// let vp = document.querySelector('.video-stream')
let adBanner = document.querySelector('.ytp-ad-player-overlay-flyout-cta')
//ytp-ad-skip-button-modern ytp-button

const stopSkip = (vp) => {
	// let skipBtn = document.querySelector('.ytp-ad-skip-button-modern')
	let skipBtn = document.querySelector('.ytp-skip-ad-button')
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
	// vp.playbackRate = 16
	//it seems stopping the playback is the fastest way to skip the ad. 
	//yes it was, but sometimes youtube ads (the test subject). doesnt let you skip it, sometimes
	//it forces you to play the whole thing. thats why the speed up method came back
	vp.playbackRate = 16
	setTimeout(() => {
		vp.muted = false
		vp.playbackRate = 1
		stopSkip(vp)
	}, 350);
} 

myButton.setAttribute("onclick", "skipAd()")

//const videoPlayer = document.querySelector(".ytd-player")

document.addEventListener("keypress", function(event) {
  if (
      event.keyCode == 96 || 
      event.keyCode == 92 || 
      event.keyCode == 191 ||
      event.keyCode == 45
  ) 
    skipAd()
  }
  
  //190 220
});
