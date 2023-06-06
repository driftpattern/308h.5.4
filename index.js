// https://ps-react-curriculum.herokuapp.com/308H/5/lab-3/
// ALAB 308H.5.4 - JavaScript Total Recall

/*
// A. Q + A:
    1. How do we assign a value to a variable? A: with the assignemnt operator.
    2. How do we change the value of a variable? A: with the "==" equal to operator.
    3. How do we assign an existing variable to a new variable? A: with the "==" equal to operator.
    4. Remind me, what are declare, assign, and define? A: Declare - to create a variable but not necessarily provide a value for it, Assign - giving a value to a declared variable. Define - declaration with a value.
    5. What is pseudocoding and why should you do it? A: basic, instructions to plan what code should do. it can allow for solving in a structured way breaking down the problem into more manageable subcomponents.
    6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A: depending on complexity, 80/20 rule often applies: 80% planing, 20% coding.


// B. Strings:
    Create a variable called firstVariable.
    Assign it the value of the string "Hello World".
    Change the value of this variable to some number.
    Store the value of firstVariable in a new variable called secondVariable.
    Change the value of secondVariable to any string.
    What is the value of firstVariable? A: the "some number" previously assigned: 7.

    let firstVariable;
    firstVariable = "Hello World";
    firstVariable = 7;
    let secondVariable = firstVariable;
    secondVariable = "any string";

    console.log(firstVariable);

   
    Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
  
    let yourName = "Justin G";
    newString = "Hello, my name is " + yourName;


// C. Booleans

    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';

    console.log(a != b);
    console.log(c > d);
    console.log('Name' == 'Name');
    // FOR THE NEXT TWO, USE ONLY && OR ||
    console.log(true || false);
    console.log(false || false || false || false || false || true);
    console.log(false == false)
    console.log(e == 'Kevin');
    console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
    console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
    console.log(48 == '48');


// D. The Farm

    Declare a variable animal. Set it to be "cow" or some other animal.
    Write code that will print out "mooooo" if the variable is equal to cow.
    Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."


    let animal = "cat"; 

    if (animal == "cow") {
        console.log("mooooo");
        } else {
        console.log("Hey! You're not a cow.");
    }



// E. Driver's Ed
    
    Make a variable that holds a person's age; be semantic.
    Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
  
    const minimumAge = 16;
    let driverAge = 15;

    if (driverAge >= minimumAge) {
        console.log("Here are the keys!");
        } else {
            console.log("Sorry, you're too young.");
        }


// II. Loops

    A. The Basics

    Write a loop that will print out all the numbers from 0 to 10, inclusive.
    Write a loop that will print out all the numbers from 10 up to and including 400.
    Write a loop that will print out every third number starting with 12 and going no higher than 4000.

    
    for (let i = 0; i <= 10; i++) {
        console.log(i);
      }
    
    for (let i = 10; i <= 400; i++) {
    console.log(i);
    }

    for (let i = 12; i <= 4000; i += 3) {
        console.log(i);
    }
    

    B. Get Even
    
    Print out the numbers that are within the range of 1 - 100.
    Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
        console.log(i + ' <-- is an even number');
    } else {
        console.log(i);
        }
    }


    C. Give Me Five

    For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five.
    
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("I found a " + i + ". High five! Three is a crowd.");
        } else if (i % 3 === 0) {
            console.log("I found a " + i + ". Three is a crowd.");
        } else if (i % 5 === 0) {
            console.log("I found a " + i + ". High five!");
        } else {
            console.log(i);
        }
    }


    D. Savings Account
    
    Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    Check your work! Your bank_account should have $55 in it.

    You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    Check your work! Your bank_account should have $10,100 in it.

        

    let bank_account = 0;

    for (let i = 1; i <= 10; i++) {
        bank_account += i * 2;
    }

    console.log(bank_account);



// III. Arrays & Control flow

    A. Talk About It

    What are the things in an array called? A: elements.
    Do Arrays guarantee those things will be in order? A: no.
    What real-life thing could you model with an array? A: student roster (name, age, grade, etc).

    B. Easy Does It

    Create an array that contains three quotes and store it in a variable called quotes.
    let quotes = ["i think therefore i am", "it's not over till it's over", "better to be safe than sorry"];

    C. Accessing Elements

    Given the following array, const randomThings = [1, 10, "Hello", true]:
    How do you access the 1st element in the array? A: randomThings[0]
    What would you write to access the 3rd element of the array? A: randomThings[2];

    D. Change Values

    Given the following array, const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]:
    Change the value of "Github" to "Octocat".
    Add a new element, "Cloud City" to the array.
    Check the value of the array to make sure it updated the array.

    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

    ourClass[4] = "Octocat";
    ourClass.push("Cloud City");
    
    console.log(ourClass);


    E. Mix It Up

    Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
    Given the following array, const myArray = [5, 10, 500, 20]:
    Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
    Remove the 5 from the beginning of the array.
    Add the string "Bob Marley" to the beginning of the array.
    Remove the string of your choice from the end of the array.
    Reverse this array using Array.prototype.reverse().

    Did you mutate the array? What does mutate mean? Did the .reverse() method return anything? A: yes I did mutate the array. mutate means to change. .reverse() does not return any value it just alters the original array.


    let myArray = [5, 10, 500, 20];

    myArray.push("Aegon");
    myArray.push("Coffee");
    myArray.shift();
    myArray.unshift("Bob Marley");

    console.log(myArray);

    // remove "Aegon" by filtering
    myArray = myArray.filter(item => item !== "Aegon");
    myArray.reverse();
    console.log(myArray);


    F. Biggie Smalls

    Create a variable that contains an integer.
    Write an if ... else statement that:
    console.log()s "little number" if the number is entered is less than 100.
    console.log()s "big number" if the number is greater than or equal to 100.


    let myNumber = 7;

    if (myNumber < 100) {
        console.log("little number");
        } else if (myNumber >= 100) {
            console.log("big number");
    }


    G. Monkey in the Middle

    Write an if ... else statement:
    console.log() little number if the number entered is less than 5.
    If the number entered is more than 10, log "big number".
    Otherwise, log "monkey".

    let myNumber = 7;
    
    if (myNumber < 5) {
        console.log("little number");
        } else if (myNumber > 10) {
            console.log("big number");
        } else {
            console.log("monkey");
        }

    H. What's in Your Closet?

    Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.    
    
    What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.
    Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
    Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
    Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
    In the same way, access one item from Thom's pants array.
    Access one item from Thom's accessories array.
    Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
    Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas.


    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "Per Scholas hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
      ];
      
      // Thom's closet is more complicated. Check out this nested data structure!!
      const thomsCloset = [
        [
          // These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],[
          // These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],[
          // Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
      ];

    console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

    const index = kristynsCloset.indexOf("yellow knit hat");
    kristynsCloset.splice(index + 1, 0, "raybans");

    const index2 = kristynsCloset.indexOf("yellow knit hat");
    if (index2 !== -1) {
        kristynsCloset.splice(index2, 1, "stained knit hat");
    }

    // console.log(kristynsCloset);
    console.log("Thom is looking fierce in a " + 
        thomsCloset[0][0] + ", " + 
        thomsCloset[1][2] + " and " + 
        thomsCloset[2][0] + "!");

    const index3 = thomsCloset.indexOf("PJs");
    if (index3 !== -1) {
        thomsCloset.splice(index2, 1, "Footie Pajamas");
    }


// IV. Functions 

    A. printGreeting

    Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting, like so: "Hello there, Slimer!"

    function printGreeting(name) {
        return "Hello, " + name + "! Welcome!";
        }

    console.log(printGreeting("Brian"));


    B. printCool

    Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

    function printCool(name) {
        console.log(name + " is cool");
    }

    printCool("Captain Reynolds");


    C. calculateCube

    Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.


    function calculateCube(number) {
        var volume = number * number * number;
        console.log("The volume of a cube with side length " + number + " is " + volume);
    }

    calculateCube(5);


    D. isVowel

    Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

    