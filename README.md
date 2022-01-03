[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/TedPhillips1/calculator-app)
# *Calculator App*
A christmas project to build a calculator that is able to perform BIDMAS. By opening a live server within the public file you can select numbers and operators to calculate a result. Each time you click an operator such as +, -, /, or x, your operand moves up to the top where it shows the whole sum. When using the decimal, brackets or indicies it does not do this. You can also press the 'DEL' button to delete the last typed character. When you hit the equals button it takes any previously written formula and the current formula and works out the result of it and displays it. If you have any syntax errors it will throw an error. If you click the all-clear ('AC') it will remove anything stored in the calculator and let you start anew. 

## Why?
I wanted to build a calculator as it allows me to solidify my knowledge of the languages HTML, CSS and JavaScript. It also allowed me to practice Test-Driven Development(TDD) by writing some tests for my javascript functions and then writing out the functions to make my tests pass. 

## How?
### HTML
I did this by setting out the general structure of my calculator in HTML. I also used classes such as 'span-two' on desired buttons to make the CSS not repeat itself. 
### CSS
I then used CSS to make the calculator look how I think most calculators should look. It is basic and clearly shows how it works. To achieve this I used flexgrid to align the buttons and screen, and I used variables to set the colours.
### JavaScript
Finally, I used Javascript for the functionality of the calculator. 
I started by using the DOM to select the buttons and the operand sections. I also used the Array.from() method when selecting the buttons. This meant that I didn't have to add an event listener for each, one by one, and instead I could use the map function to add an event listener once, for all buttons. 
Within the callback function of the event listener (determineInnerText) I used a switch case. This was instead of using long, and indigestible if statements for each. 
Within determineInnerText I called two functions. I decied to do this to make the main callback function cleaner and easier to read and was a part of my refactoring of the code. 
Inside the getResult function I also included a switch case to return the correct values of some of my buttons to how they actually function in javascript. I also used a try...catch statement to throw an error if the user inputs an ivalid syntax. Within the try statement I used the eval function for the calculation of the entered string. I used eval despite reading not to as I figuired that the user can only enter characters that are on the calculator. As a current student/hobbyist I didn't see a problem with this however if working on larger projects in the future I should choose an alternative route to avoid security risks. 
### Testing and Jest
I used jest to test the functionality of my getResults function. I wrote three tests for each level of BIDMAS and three to check for errors. I used TDD to check this however I was unsure how to use TDD for the DOM parts of my code. This will give me something to build on and learn for next time. 

## What Went Well?
- I learnt many new methods in JavaScript such as switch cases and try...catch...finally statements. 
- I used flexgrid well including using grid-templates to set the amount and spacing of rows and columns. 
- I used Array.from() to reduce repetition in my code.

## What Could Be Improved?
- Write tests for functions that use the DOM.
---
## How to Run
1. Copy the code down to your machine.
2. use `npm i` in the terminal to install jest.
3. Run the tests using `npm run test` in the terminal
4. Enter the public folder.
5. Open a Live Server.
6. Use calculator.
