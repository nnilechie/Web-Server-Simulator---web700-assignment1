/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: [Nicholas Nwanua Ilechie] Student ID: [153461223] Date: [18/05/2024]
*
********************************************************************************/

//test
//STEP 2: console.log("Hello World!");

//STEP 3: Creating the "Server Paths"
// Declaring the arrays for server verbs, paths, and response, Each array starts from [0] 
let serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
let serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by [Nicholas Nwanua Ilechie]",
    "[Nicholas Nwanua Ilechie]: [nnilechie@myseneca.ca]",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// STEP 4: Creating the "web server simulator" Function - "httpRequest"
function httpRequest(httpVerb, path) // This is our function to handle the HTTP requests and simulate a web server
{
    for (let i = 0; i < serverPaths.length; i++)  // To loop through the server paths to get the matching verb and path
    {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path)// This checks if the current verb and path match the provided parameters 
        {
            return `200: ${serverResponses[i]}`;// Returns the corresponding server response with status code 200 if match...
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`; // If no match found, return a 404 error message..
}

// STEP 5: Manually Testing the "httpRequest" Function
console.log(httpRequest("GET", "/")); // 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // 200: This assignment was prepared by [Nicholas Nwanua Ilechie]
console.log(httpRequest("GET", "/contact")); // 200: [Nicholas Nwanua Ilechie]: [nnilechie@myseneca.ca]
console.log(httpRequest("POST", "/login")); // 200: User Logged In
console.log(httpRequest("GET", "/panel")); // 200: Main Panel
console.log(httpRequest("POST", "/logout")); // 200: Logout Complete
console.log(httpRequest("PUT", "/")); // 404: Unable to process PUT request for 


// STEP 6: Automating the Tests by creating a "automateTests" Function

/* Function to generate a random integer between 0 and a specified maximum 
Copied from MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function automateTests() // Function to automate tests by sending random requests
{
    // define the arrays for test verbs and paths
    let testVerbs = ["GET", "POST"];
    let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest()  // Function to generate random request
    {
        let randVerb = testVerbs[getRandomInt(testVerbs.length)];
        let randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath)); // logs the result, so we can see the result of the request in the console.
    }

    setInterval(randomRequest, 1000); // setInterval to execute randomRequest every 1 second (1000 milliseconds)
}

// STEP 7: Invoke the "automateTests" function 
automateTests();
