// hoopCount

/*

Alex just got a new hula hoop, he lvoes it but feels discouraged because his little brother is better than him.

Write a program where Alex can input(n) how many times the hoop goes around and it will return him an Encouraging message:

if alex gets 10 or more hoops return the string "Great, now move on to tricks"

if Alex doesnt get 10 hoops return the string "Keep at it until you get it" 

*/

function hoopCount(n) {
    if(n > 10) {
        return "Great, now move on to tricks";
    } else if(n < 10) {
        return "Keep at it until you get it";
    }
}
