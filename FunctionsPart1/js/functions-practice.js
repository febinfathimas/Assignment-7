//STEP 1-To find half of a number
function halfNumber()
{
    "use Strict";
    var guess,output;
    guess=Number(window.prompt("Enter the number you wanted its half"));
    output=guess/2;
    window.console.log("Half of"+" "+guess+" "+"is"+ " "+output);
}

       

//STEP 2-To find square of a number
function squareNumber()
{ "use Strict";
var guess,output;
guess=Number(window.prompt("Enter the number you wanted to be squared"));
output=guess*guess;
window.console.log("Square of"+" "+guess+" "+"is"+ " "+output);
}

//STEP 3-To find percentage between two numbers
function percentOf()
{
    "use Strict";
    var guess1,guess2,output2;
guess1=Number(window.prompt("Enter the first number"));
guess2=Number(window.prompt("Enter the second number"));
output2=(guess1/guess2)*100;
window.console.log(guess1+" "+"is"+ " "+output2+"percentage of"+" "+guess2);

}

//STEP 4- To find modulus between two numbers
function findModulus()
{
    "use Strict";
    var guess3,guess4,output3;
    guess3=Number(window.prompt("Enter the first number"));
    guess4=Number(window.prompt("Enter the second number"));
    output3=guess3 % guess4;
    window.console.log(output3 +"is the modulus of"+" "+guess3+" "+"and"+ " "+guess4);
}
//STEP 5- add all the numbers entered
function findSum()
{
    "use Strict";
    
   var str=[], sum=0 ,i,len;
    str = window.prompt("Enter the numbers seperated by commas");
    len=str.length;
    
   for (i = 0; i < len; i+=2) {
       
        
      sum=sum+parseInt((str[i]));
    }
    
    window.console.log("The sum of numbers entered = "+sum);


}
