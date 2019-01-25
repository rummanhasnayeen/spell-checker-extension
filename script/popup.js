function hello() {
	// ducument.getElementByClassName('loader').css
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(response) {
       
    });
   }); 

}
function hellooff() {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {greeting: "farewell"}, function(response) {
       
    });
   }); 

}

document.getElementById('butt').addEventListener('click', hello);
document.getElementById('buttoff').addEventListener('click', hellooff);

// $('#butt').click(function()
// {
//    chrome.tabs.getSelected(null, function(tab) {
//     chrome.tabs.sendRequest(tab.id, {greeting: "hello"}, function(response) {
       
//     });
//    });
// });
