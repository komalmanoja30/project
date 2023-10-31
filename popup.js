document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var url = tabs[0].url;
        var div = document.createElement('div');
        div.textContent = 'Active URL: ' + url;
        document.body.appendChild(div);
    });
});