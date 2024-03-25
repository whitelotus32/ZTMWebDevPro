var database = [
    {
        username: "Nick",
        password: "sonGoku"
    },
    {
        username: "Jiraiya",
        password: "333"
    },
    {
        username: "Itachi",
        password: "444"
    }
];

var newsFeed = [
    {
        username: "Jordyn",
        timeline: "So tired from all that pizza!"
    },
    {
        username: "JupiPoopy",
        timeline: "I like to eat pizza upside down"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    }   else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);