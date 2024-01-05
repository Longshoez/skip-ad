chrome.action.onClicked.addListener(() => {
  console.log("extension clicked")
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "script.js"
    });
  });
});