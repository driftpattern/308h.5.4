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

    What are the things in an array called?
    Do Arrays guarantee those things will be in order?
    What real-life thing could you model with an array?

    */
   