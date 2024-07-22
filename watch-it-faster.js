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
  if (skipBtn) {
    skipBtn.click()
  } else {
    console.log("couldnt find skip button")
  }
}

const skipAd = () => {
  let vp = document.querySelector('.video-stream')
  vp.muted = true
  setTimeout(() => {
    vp.muted = false
    stopSkip(vp)
  }, 5000);
}

myButton.setAttribute("onclick", "skipAd()")

//const videoPlayer = document.querySelector(".ytd-player")

document.addEventListener("keypress", function(event) {
  // if (
  //   event.keyCode == 96 ||
  //   event.keyCode == 92 ||
  //   event.keyCode == 221 ||
  //   event.keyCode == 124 ||
  //   event.keyCode == 45
  // ) {
  //   skipAd()
  //  not deprecated alternative 
  // if (event.key == '`' || '|') {
  //   skipAd()
  // }
  // supossedlt better alternative 
  if (['`', '|', '}', '\\'].includes(event.key))
    skipAd()

});

// document.addEventListener("keypress", function(event) {
//   if (event.keyCode == 96){
//     skipAd()
//   }
//   //96, 92, 191, 45
//   //190 220
// });
