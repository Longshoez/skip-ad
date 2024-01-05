console.log("gets here")

let vp = document.querySelector('.video-stream')

const stopSkip = () => {
	let skipBtn = document.querySelector('.ytp-ad-skip-button-modern')
	vp.muted = false
	vp.playbackRate = 1
	if (skipBtn !== null) {
		skipBtn.click()
	}
}

const skipAd = () => {
	console.log("attempting to skip add");
	let skipBtn = document.querySelector('.ytp-ad-skip-button-modern')
	vp.muted = true
	vp.playbackRate = 16
	setTimeout(function() {
		stopSkip()
	}, 1000);
}