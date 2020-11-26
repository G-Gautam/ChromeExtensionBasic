chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { urlMatches: '.*' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});



// var overlay = document.createElement('div');
// overlay.style.width = '100vw';
// overlay.style.height = '100vh';
// overlay.style.backgroundColor = 'black';
// overlay.style.opacity = '0.5';
// overlay.style.position = 'fixed';
// overlay.style.z-index = '9999';