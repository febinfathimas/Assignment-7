/*eslint-env browser*/

//STEP 1

function writeMessage()
{
    window.alert("I have been Clicked");
}

function init(){

//STEP 2
var myButton = window.document.getElementById("myButton");
myButton.onclick=function(){
    window.alert("I have been Clicked 2");
}

//STEP 3
var myButton1 = window.document.getElementById("buttonListner");
function writeMessageLis()
{window.alert("I have been Clicked 3");}
 
myButton1.addEventListener("click",writeMessageLis);

//STEP 4
var myButton2 = window.document.getElementById("buttonLisFunc");
myButton2.addEventListener("click",function()
{
    window.alert("I have been Clicked 4");
});

}
//STEP 5
window.addEventListener("load",init);





