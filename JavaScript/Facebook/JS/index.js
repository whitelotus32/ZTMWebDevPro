var database = [
    {
        username: "Nick",
        password: "sonGoku"
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

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) {
        console.log(newsFeed);
    }   else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);