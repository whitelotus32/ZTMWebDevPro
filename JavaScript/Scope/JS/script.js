// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //3
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}
// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5


//#3
function q3() {
    window.a = "hello";
}

// first run q3() in the console to add the a property to the window. then run q32()
function q32() {
    alert(a); //hello
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); //"test"
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a); //5
}
alert(a); //5



//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//#3 return value when moveCommand("back");

//#4 return value when moveCommand("right");

//#5 return value when moveCommand("left");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!