//storing all body HTML

var allText = document.body.innerHTML;
// console.log(allText);


//storing core words
var xyz=0;
var corewords=[];
while(xyz>=0){
  var corestring = document.getElementsByTagName('p')[xyz].innerText;
  var corewar = corestring.split(" ");
  for(var kisu=0;kisu<corewar.length;kisu++){
    corewords.push(corewar[kisu]);
  }
  corewords.push(29);
  xyz++;

  if (typeof document.getElementsByTagName('p')[xyz] == 'undefined') {
    break;
  }
  


}

//recieving request from popup.js

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

  if (request.greeting == "hello"){

    var i = 0,k = 0;
    var truthtable=[];
    var stockwords=[];

var reply;
var promises = [];

var cwords=[];



while (i >= 0) {
    
    var str = document.getElementsByTagName('p')[i];
   
    var str1 = document.getElementsByTagName('p')[i].innerText;
    var words = str1.split(" ");
    
    
    for (var j in words) {
      // words[j].replace("↵", "");
      if (words[j]!=null && words[j]!="&nbsp") {

      url = "https://bangla-banan.herokuapp.com/api/" + words[j];

      promises.push($.ajax({
        type : "GET",
        url:  url,
        
        dataType: "json", 
        success : function(response) {
            // truthtable.push(response.correct);
            truthtable.push(response.correct);
            cwords.push(response.origWord);
            console.log(response.suggestions[0]);
            // setTimeout(function(){  }, 3000);

            
            
            
            
            
          },
          error : function(response) {
            console.log(response);
            console.log(response.responseText);
          }
        }));




    }
  }
    $.when.apply($, promises).then(function() {



     var difference=(corewords.length-k);
     var finalwords=[];
     var test=[];
     // console.log(corewords);
     // console.log(cwords);
     // console.log(truthtable);
            // bwords=bwords.toString();
            // console.log(corewords.length);
            var maincount=0;
            loop1:
            for(var sesh=0;sesh<corewords.length;sesh++){
              loop2:
              for(var kile=0;kile<cwords.length;kile++){
                if(corewords[sesh]==29){
                  kaaj=corewords[sesh].toString();
                  
                  test.push(kaaj);
                  maincount++;
                  break loop2;
                  

                }
                
                if( corewords[sesh]==cwords[kile] ){
                  if(truthtable[kile]){

                    kaaj=corewords[sesh].toString();
                    test.push(kaaj);
                    
                    maincount++;
                    break loop2;
                    
                  }

                  else{
                    kaaj=corewords[sesh].toString();
                    check=kaaj

                    kaaj=" "+"<u>"+kaaj+"</u>"+" ";
                    // console.log(kaaj);
                    test.push(kaaj);
                    maincount++;
                    break loop2;

                  }

                } 

              }
              if(maincount==0){
                kaaj=corewords[sesh].toString();

                test.push(kaaj);


              }
            }

                // else{
                //     test.push(bwords[sesh]);
                // }
                

                
                
                // console.log(test);
                var icom=0;

                for(var sesh=0;sesh<test.length;sesh++){





                  if(test[sesh]=="29" )

                  {
                    finalwords.push("<br>");
                    var final = finalwords.toString();
                    final = final.replace(/,/g, ' ');
                    final=final+" "
                    document.getElementsByTagName('p')[icom++].innerHTML = final;
                    // console.log(final);
                    finalwords=[];

                  }
                  else{
                    finalwords.push(test[sesh]);

                  }
                }




              }, function() {
    // error occurred
  });


    i++;
    if (typeof document.getElementsByTagName('p')[i] == 'undefined') {
      break;
    }



  }


  // console.log(k);



}

else if (request.greeting == "farewell")
{


 document.body.innerHTML=allText;

// var finalcorewords=[];
// var coreicom=0;
// for(var sesh=0;sesh<corewords.length;sesh++){





//                   if(corewords[sesh]=="29" )

//                   {
//                     finalcorewords.push("<br>");
//                     var corefinal = finalcorewords.toString();
//                     corefinal = corefinal.replace(/,/g, ' ');
//                     corefinal=corefinal+" "
//                     document.getElementsByTagName('p')[coreicom++].innerHTML = corefinal;
//                     // console.log(final);
//                     finalcorewords=[];

//                   }
//                   else{
//                     finalcorewords.push(corewords[sesh]);

//                   }
//                 }  





    } // snub them.
  });
//


