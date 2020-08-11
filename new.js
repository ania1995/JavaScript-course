// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or



var myBody = document.getElementsByTagName("body");
//myBody[0].innerHTML = "<p>I am paragraph</p>"


//Change Text Method
var myTitle = document.getElementById ("p");
myTitle.textContent = "Ababababab"


//Get Element Attributes
var link =document.getElementById("test");
var href_link = link.getAttribute("href");      //"https://www.lasy.gov.pl/pl"
var class_link = link.getAttribute("class");    //newClass

//Change Element Attributes
link.setAttribute("class", "pie");
var class_link2 = link.getAttribute("class");   //pie

//Create new Attributes
link.setAttribute("alt", "hello");
var alt_link = link.getAttribute("alt");        //"hello"

link.className;                                 //"pie"
link.className = "apple";                       //"apple"

