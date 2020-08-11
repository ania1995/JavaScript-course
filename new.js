// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or

/*
var Car = function (maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        document.write(speed / time + " km/h. <br>");
    };
    this.logDriver = function () {
        document.write("name of driver is " + this.driver + "<br>");
    };

}

var myCar = new Car(80, "Ania");
var myCar2 = new Car(30, "Lukasz");
var myCar3 = new Car(70, "Zbyszek");
var myCar4 = new Car(120, "Stefan");
var myCar5 = new Car(500, "Zuzka");

myCar.drive (40,5);
myCar2.drive (60,2);
myCar2.drive (10,4);
myCar4.drive (120,1);
myCar5.drive (9,2);

myCar4.logDriver();
*/

var myDate = new Date();
document.write(myDate + "<br>");

var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2095, 3, 26, 10, 30, 15);

document.write(myPastDate+ "<br>");
document.write(myFutureDate+ "<br>");

document.write(myDate.getMonth() + "<br>");          // 0-11
document.write(myDate.getFullYear() + "<br>");      //YYYY
document.write(myDate.getDay() + "<br>");           // 1 -31
document.write(myDate.getHours() + "<br>");         // 0 -23
document.write(myDate.getTime() + "<br>");          // get milisecends since 1st Jan 1970
//getTime is use to compare date!!!


