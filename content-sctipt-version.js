console.log('extension loaded')
// Create a style element for the Font Awesome stylesheet
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
stylesheet.integrity = "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
stylesheet.crossOrigin = "anonymous"
stylesheet.referrerPolicy = "no-referrer"
document.head.appendChild(stylesheet);

// Create the outer div
const containerDiv = document.createElement("div");

// Create the button with Font Awesome icon
const skipButton = document.createElement("button");
skipButton.type = "button";
skipButton.classList.add("adButtonSkip", "adButtonPosition", "show");
const icon = document.createElement("i");
icon.classList.add("fa-solid", "fa-forward");
skipButton.appendChild(icon);
containerDiv.appendChild(skipButton);

// Create the hidden tooltip
const tooltipDiv = document.createElement("div");
tooltipDiv.classList.add("hide");
const tooltipText = document.createElement("p");
tooltipText.classList.add("adButtonTooltip", "adButtonPosition");
tooltipText.textContent = "Skip ad";
tooltipDiv.appendChild(tooltipText);
containerDiv.appendChild(tooltipDiv);

// Choose a target element on the page and insert the container
// const targetElement = document.getElementById("some-element");  // Replace with your target
// targetElement.appendChild(containerDiv);

// const myButton = document.createElement("button");
// myButton.textContent = "Skip ad";
// console.log("yipi yey you")
// Style the button using inline styles
// myButton.classList.add("adButtonSkip");

// Add the button to the body of the document
// document.body.appendChild(myButton);

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

//css

skipButton.style.zIndex = "100000";
skipButton.setAttribute("onclick", "skipAd()")
document.body.appendChild(containerDiv);
skipButton.style.position = "absolute";