// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or

var myArray = [];
myArray[0] = 25;
myArray[1] = true;
myArray[2] = 10;
myArray[3] = "hello";

document.write(myArray + "<br>");
document.write(typeof(myArray)+ "<br>");

var array2 = [10, true, false, "string"];

document.write(array2 + "<br>");
document.write(typeof(array2)+ "<br>");

var array3 = new Array(5); // create array with defined  numbers of elements

//checking lenght of arrays
document.write(array2.length+ "<br>");
document.write(array3.length+ "<br>");

//sort arrays
document.write(myArray.sort()+ "<br>");
document.write(array2.sort()+ "<br>");

//sort and revers arrays
document.write(myArray.reverse()+ "<br>");
document.write(array2.reverse()+ "<br>");