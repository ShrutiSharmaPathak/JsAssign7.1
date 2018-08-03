function largest()
{

var numbers={}; //Array declaration.
//Prompt is used to input a value before entering a page. 
var num1=window.prompt("Enter first number");
var num2=window.prompt("Enter second number");
var num3=window.prompt("Enter third number");
var num4=window.prompt("Enter fourth number");
var num5=window.prompt("Enter fifth number");
var numbers=[num1,num2,num3,num4,num5];// initialization of an array

var max=numbers[0];
for(var i=0;i<numbers.length ;i++)
{
    if(Number(numbers[i]) >Number(max)) //Number() can be used to convert JavaScript variables to numbers
    {
        max=numbers[i];
    }
    /*This code is to create an element run time and put the value in that */
    var para = document.createElement("P");  // Create a <p> element
    var t = document.createTextNode(numbers[i]); // Create a text node
    para.appendChild(t);                         // Append the text to <p>
    document.body.insertBefore(para,document.getElementById("span1")); /* The insertBefore() method inserts a node as
                                                                          a child,right before specified existing child,*/
}
document.getElementById("span1").innerHTML="Largest no is "+max; // largest no is to be shown in element <span>
}
