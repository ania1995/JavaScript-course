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
var myTitle = document.getElementById("p");
myTitle.textContent = "Ababababab"


//Get Element Attributes
var link = document.getElementById("test");
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


//Changing Style
var title = document.getElementById("test2");
title.setAttribute("style", "color: black; font-size: 48px ");

//Adding properties for style
title.style.left = "40px";
title.style.top = "20px";
title.style.color = "red";
title.style.backgroundColor = "blue";

//Adding elements to the DOM

var newTh = document.createElement("th");
var newA = document.createElement("a");

var getTable = document.getElementsByTagName("table")[0];
getTable.appendChild(newTh);
newTh.appendChild(newA);

newA.innerHTML = "New link"


