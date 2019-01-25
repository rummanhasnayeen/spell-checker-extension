// function onRequest(request, sender, sendResponse) {
//   var truthtable = request.table;
//   var words=request.word;
//   var paras=request.paras;
//   var length=words.length-truthtable.length;

//   sendResponse({
// length:length

//   });
// };
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     var truthtable = request.table;
//   var words=request.word;
//   var paras=request.paras;
//   var length=words.length-truthtable.length;
    
//       sendResponse({length: length});
//   });