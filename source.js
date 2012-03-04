
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {file: "lib/gray-scale.js"});
});

