function setUpEvents() {

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


    //Removing Elements from the DOM

    var parent = document.getElementById("navnav").getElementsByTagName("ul")[0];
    var child = parent.getElementsByTagName("li")[0];

    var removed = parent.removeChild(child);                       //usuwanie
    var append = parent.appendChild(removed);                      //dodawanie
    parent.removeChild(parent.getElementsByTagName("li")[1]);     //usuwanie bezpośrednie

    //Events 

    var event = document.getElementById("test2");
    event.onclick = function () {
        alert("hello!");
    };

    event.onmouseover = function () {
        alert("you hovered your mouse over me")
    }

    //addEventListener();


    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function () {

        if (content.className == "open") {
            // shrink the box
            content.className = "";
            button.innerHTML = "Show More";
        } else {
            //expand the box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    }

    var myMessage = document.getElementById("message");

    function showMessage() {
        myMessage.className = "show";
    }

    setTimeout(showMessage, 10);

    var colorChanger = document.getElementById("color-changer");

    var colors = ["red", "blue", "green", "pink"];
    var counter = 0;

    function changeColor() {

        if (counter >= colors.length) {
            counter = 0;
        }
        colorChanger.style.background = colors[counter];
        counter++;

    }

    var myTimer = setInterval(changeColor, 3000);

    colorChanger.onclick = function () {
        clearInterval(myTimer);
        colorChanger.innerHTML = "Timer stopped";
    }

    //fun with FORMS

    var myForm = document.forms.myForm;
    myForm.name.value;
    myForm.colour.value;

    myForm.name.onfocus = function(){
        myForm.name.style.border = "4px solid pink";
    }

    myForm.name.onblur = function(){
        myForm.name.style.border = "none";
    }

    var myMessage2 = document.getElementById("message2");

    myForm.onsubmit =  function(){

        if(myForm.name.value == ""){
            message2.innerHTML = "Plase enter a name";
            return false;
        }else{
            message2.innerHTML = "";
            return true;
        };
    };
}


window.onload = function () {

    setUpEvents();

};


