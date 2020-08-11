// == compare only value
// === compare value and type of variable
// != not egual
// !== compare value if is not egual
// !=== compare value and type


// && and
// || or


for ( i =0; i < 10 ; i++){

    if( i === 5 || i ===3){ 
        continue;               // skip code in loop when i egual to 3 or 5
    }
    document.write(i + "<br>");

    if( i===7){
        break;
    }
   }
   document.write("I have broken out of loop")
