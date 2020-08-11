// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or

/*
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Ania";

document.write(myCar.maxSpeed + "<br>" + myCar.driver + "<br>");

myCar.drive = function () {
    document.write("now driving myCar");
}

myCar.drive();

document.write("<br>" + myCar + "<br>");
*/

var myCar2 = {

    maxSpeed: 40,
    driver: "someone",
    drive: function (speed, time) {
        document.write("now myCar2 drive with " + speed / time + " km/h. <br>");
    },
    logDriver: function(){
        console.log("name of driver is " + this.driver);
    }
};

myCar2.logDriver();
document.write(myCar2.maxSpeed + "<br>" + myCar2.driver + "<br>");
myCar2.drive(40, 1);




