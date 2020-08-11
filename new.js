// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or

var str = "hello, world!";

var str2 = str.slice(2, 9);
document.write(str2 + "<br>");

var str3 = str.slice(2);
document.write(str3 + "<br>");

var tags = " meat, ham, salami, pork, beef, chicken";
var tagsArray = tags.split(",");


for (i = 0; i < tagsArray.length; i++) {
    document.write("the " + (i + 1) + " world from array is" + tagsArray[i] + "<br>");
}