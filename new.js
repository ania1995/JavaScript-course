// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or

/*
for ( age = 5; age < 10 ; age++){
 document.write("You are under 10! You are: " + age + '<br>')
}
document.write("You are  10! <br>");
*/

var links = document.getElementsByTagName("a");

for ( i =0; i < links.length ; i++){
    document.write("this is link numer " + (i+1) + '<br>');
   }
   document.write(" all links now looped");
