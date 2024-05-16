#! /usr/bin/env node
import chalk from "chalk";
//"Assignment Solution of 45 Questions"
function headingPart(solutionNumber) {
    const totalWidth = 80; // Total width of the line
    const asterisksCount = (totalWidth - solutionNumber.length - 4) / 2; // Calculate the number of asterisks needed on each side, subtracting 4 for the spaces and asterisks
    const asterisks = "*".repeat(Math.floor(asterisksCount)); // Repeat asterisks for both sides
    console.log(chalk.bold.italic.hex('#001').bgYellowBright(`\n*${asterisks} ${solutionNumber} ${asterisks}*\n`));
}
headingPart(("Welcome to 45 Questions Solution!"));
//Q1: Install Node.js, TypeScript and VS Code on your computer.
headingPart("Solution#1");
console.log("I have installed Node.js, TypeScript and VS Code in my laptop.");
//Q2: Store a person’s name in a variable, and a message to that person. message should be simple.
headingPart("Solution#2");
let per_Name = "Eric";
console.log(`Hello ${per_Name}! Would you like to learn typescript today?\n`); // A person is asking a question.
//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
headingPart("Solution#3");
let perName = "\nHello Eric!\n";
console.log(perName.toLocaleLowerCase()); // done person name in lowercase.
console.log(perName.toLocaleUpperCase()); // done person name in uppercase.
console.log(perName.replace(/\b\w/g, (c) => c.toUpperCase())); // done  person name in propercase.
//Q4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks
headingPart("Solution#4");
let famousQuote = "\nA person who never made a mistake never tried anything new.";
console.log(`Albert Einstein once said: \n"${famousQuote}"`); // Author said a quote.
//Q5: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
headingPart("Solution#5");
let famous_Person = "\nAlbert Einstein";
let famous_quote = `${famous_Person} once said: \n"${famousQuote}" `;
console.log(famous_quote); // Famous person and famous quote.
//Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
headingPart("Solution#6");
let person_Name = "\t\n John Doe \n\t";
console.log(person_Name); // With white space.
console.log(person_Name.trim()); // Without white space
//Q7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
headingPart("Solution#7");
let Addition = 4 + 4;
console.log("Addition: ", Addition);
let Subtraction = 10 - 2;
console.log("Subtraction: ", Subtraction);
let Multiplication = 4 * 2;
console.log("Multiplication: ", Multiplication);
let Division = 16 / 2;
console.log("Division: ", Division);
//Q8: You should create four lines that look like this: console.log(5 + 3).Your output should simply be four lines with the number 8 appearing once on each line.
headingPart("Solution#8");
console.log(5 + 3); // (+)
console.log(10 - 2); // (-)
console.log(4 * 2); // (*)
console.log(16 / 2); // (/)
//Q9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
headingPart("Solution#9");
let favNum = 5;
let msg = `My favourite number is: ${favNum}`;
console.log(msg);
//Q10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
headingPart("Solution#10");
//Program#1 coding done by: Sahar,
//Current Date: 21/04/2024
//This program#1 will add 2 digits
console.log(2 + 2);
//Q11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
headingPart("Solution#11");
const names = ["Ayesha", "Sadaf", "Zarnam", "Sidra"];
for (const name of names) {
    console.log(name);
}
;
//Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
headingPart("Solution#12");
let message1 = "Are you interested in learning TypeScript?";
for (const name of names) {
    console.log(` Hello ${name}! ${message1}`);
}
//Q13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
headingPart("Solution#13");
//Series of statement reagarding some transports.
let transportation = ["Honda Motorcycle", "Audi", "Ferrari"];
transportation.map((items) => console.log(`I would like to own ${items}.`));
//Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
headingPart("Solution#14");
//Inviting three guests to the dinner party
let guests_Li = ["Sahar", "Ayesha", "Maryam"];
for (let i = 0; i < guests_Li.length; i++) {
    console.log(`\nDear Ms. ${guests_Li[i]} \n\nIt is our pleasure to invite you to the dinner party. \n\nThank-You! \n\n `);
}
//Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
headingPart("Solution#15");
//one guest is absent. Therefore,inviting new guest.
let absentGuest = "Sahar";
let newGuest = "Muskan";
guests_Li[0] = newGuest;
for (let i = 0; i < guests_Li.length; i++) {
    console.log(
    //List modified and sending new invitaion.
    `Dear Ms. ${guests_Li[i]} \n\nIt is our pleasure to invite you to the dinner party. \n\nThank-You! \n\n `);
}
console.log(`Ms. ${absentGuest} is not coming to the dinner party.\n`);
console.log(`${guests_Li} is still attending the party.\n`);
//Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
headingPart("Solution#16");
//Added the print statement that I found a bigger table.
console.log("I have a great news! I get a big table. Therefore, I am inviting  three more peoples.\n");
//3 more guests are inviting due to bigger space.
guests_Li.unshift("Nida");
guests_Li.splice(2, 0, "Fatima");
guests_Li.push("Zoya");
for (let i = 0; i < guests_Li.length; i++) {
    console.log(
    //New guest list with new invitation message.
    `\nDear Ms. ${guests_Li[i]} \n\nIt is our pleasure to invite you to the dinner party. \n\nThank-You!\n `);
}
//Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
headingPart("Solution#17");
// print statement to invite only 2 people.
console.log("\nBad News! I am unable to arrange a big table. Therefore, only two people are invited");
while (guests_Li.length > 2) {
    const removedGuests = guests_Li.pop();
    //Removing guests and printing a message that you are no longer invited.
    console.log(`\nSorry Ms. ${removedGuests}, You're no longer invited to the dinner due to limited space.`);
}
for (let i = 0; i < guests_Li.length; i++) {
    console.log(
    //Printing a message to those who are still invited.
    `\nDear Ms. ${guests_Li[i]} \n\nYou are still invited to the dinner party. \n\nThank-You!\n `);
}
guests_Li.splice(0, 2); //2 guest removed.
console.log(guests_Li); //guest list empty.
//Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
headingPart("Solution#18");
//Five places in the world that I want to visit.
let visitPlaces = [
    "Saudi Arabia",
    "Switzerland",
    "Palestine",
    "Egypt",
    "Turkey"
];
console.log("\nOriginal order:", visitPlaces);
console.log("Alphabetical order:", [...visitPlaces].sort());
console.log("Original order after sorting:", visitPlaces);
console.log("Reverse alphabetical order:", [...visitPlaces].sort().reverse());
console.log("Original order after reverse sorting:", visitPlaces);
visitPlaces.reverse();
console.log("Reverse order:", visitPlaces);
visitPlaces.reverse();
console.log("Back to original order:", visitPlaces);
visitPlaces.sort();
console.log("Sorted in alphabetical order:", visitPlaces);
console.log("Sorted in reverse alphabetical order:", visitPlaces);
//Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
headingPart("Solution#19");
//Indicating number of guests that I am inviting
console.log("\nTotal no of guests are: ", guests_Li.length);
//Q20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
headingPart("Solution#20");
let languages = ["Urdu", "Arabic", "Chinese", "French", "English"];
console.log("\nList of languages:\n", languages);
//Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
headingPart("Solution#21");
let person = {
    name: "Sahar",
    gender: "Female",
    age: 22,
};
console.log("\n", person);
//Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
headingPart("Solution#22");
//creating Array.
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
// console.log(days{7}); //intentional mistake.
console.log("\n", days[6]); //Mistake is corrected.
//Q23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
headingPart("Solution#23");
let car = "Subaru";
//1st Test
console.log("\nIs car == 'Subaru'? predict True");
console.log(car == "Subaru");
//2nd Test
console.log("Is car != 'Honda city'? predict True");
console.log(car != "Honda city");
//3rd Test
console.log("Is car == 'Subaru'? predict false");
console.log(car == "subaru");
//4th Test
console.log("Is car == 'SUBARU'? predict false");
console.log(car == "SUBARU");
//5th Task
console.log("Is car.length == 6 ? predict true");
console.log(car.length == 6);
//6th Task
console.log("Is car.length !== 10 ? predict true");
console.log(car.length !== 10);
//7th Task
console.log("Is 10 > 45 ? predict false");
console.log(10 > 45);
//8th Task
console.log("Is 3 <= 2 ? predict false");
console.log(3 <= 2);
//9th Task
console.log("Is 10 < 20 ? predict True");
console.log(10 < 20);
//10th Task
console.log("Is 50 <= 100 ?  predict true");
console.log(50 <= 100);
//Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
headingPart("Solution#24");
//1:Equality test and Inequality test
console.log("\nEquality test with string: ", "Apple" === "Apple");
console.log("Inequality test with string: ", "Apple" != "orange");
//2:Test using the lower-case function
console.log("Lower-case function test: ", "HELLO".toLowerCase() === "hello");
//3: Numerical test having equality and inequality
console.log("Equality test with numbers: ", 3 === 3);
console.log("inequality test with numbers: ", 10 != 5);
//4:Greater than and Less than
console.log("Greater than test: ", 5 > 3);
console.log("Less than test: ", 10 < 20);
//5:Greater than equal to and Less than equal to
console.log("Greater than equal to test: ", 5 >= 4);
console.log("Less than equal to test: ", 5 <= 6);
//6:Test using AND and OR operator
console.log("AND operator test: ", 5 <= 6 && 5 >= 4);
console.log("OR operator test: ", 5 === 5 || false);
//7:Test whether an items is in an array
const fruits = ["Melon", "Pineapple", "Banana"];
//Item is in an array
console.log('Testing "Melon" in the array: ', fruits.includes("Melon"));
//Item is not in an array
console.log('Testing "Custard Apple" in not in an array: ', !fruits.includes("custard Apple"), "\n");
//Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
headingPart("Solution#25");
//Alien Colour#1
//Creating a variable called Alien Colour.
let alienColour = "Green";
if (alienColour === "Green") {
    console.log("Player just earned 5 points!"); //Test Pass and output is visible.
}
alienColour = "Yellow";
if (alienColour === "Green") {
    console.log("Player just earned 5 points!"); //Test failed. Therefore, no output.
}
//Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
headingPart("Solution#26");
//Alien Colour#2
//Alien Colour and creating if-else chain.
let alien_Colour = "Green";
if (alien_Colour === "Green") {
    console.log("\nPlayer just earned 5 points for shooting the Alien!"); //Alien colour is Green.
}
else {
    console.log("Player just earned 10 points !"); //Alien colour is not Green.
}
//changing the Alien colour.
alien_Colour = "Yellow";
if (alien_Colour === "Green") {
    console.log("Player just earned 5 points for shooting the Alien!");
}
else {
    console.log("\nPlayer just earned 10 points !");
}
//Q27: Alien Colors #3: Turn your if-else chain from Exercise 25-24 into an if-else chain.
headingPart("Solution#27");
//Three statements of if-else chain of three colours.
let alien_colour = "Green";
if (alien_colour === "Green") {
    console.log("\nPlayer just earned 5 points!");
}
else if (alien_colour === "Yellow") {
    console.log("Player just earned 10 points !");
}
else if (alien_colour === "Red") {
    console.log("Player just earned 15 points !");
}
else {
    console.log("Kindly select a right colour.");
}
//Version#2
alien_colour = "Yellow";
if (alien_colour === "Green") {
    console.log("\nPlayer just earned 5 points!");
}
else if (alien_colour === "Yellow") {
    console.log("Player just earned 10 points !");
}
else if (alien_colour === "Red") {
    console.log("Player just earned 15 points !");
}
else {
    console.log("Kindly select a right colour.");
}
//version#3
alien_colour = "Red";
if (alien_colour === "Green") {
    console.log("\nPlayer just earned 5 points!");
}
else if (alien_colour === "Yellow") {
    console.log("Player just earned 10 points !");
}
else if (alien_colour === "Red") {
    console.log("Player just earned 15 points !");
}
else {
    console.log("Kindly select the right colour.");
}
//Q28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then print.
headingPart("Solution#28");
let age = 25;
if (age < 2) {
    console.log("\nBaby");
}
else if (age >= 2 && age < 4) {
    console.log("\nToddler");
}
else if (age >= 4 && age < 13) {
    console.log("\nKid");
}
else if (age >= 13 && age < 20) {
    console.log("\nTeenager");
}
else if (age >= 20 && age < 65) {
    console.log("\nAdult");
}
else {
    console.log("\nElder");
}
//Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
headingPart("Solution#29");
let favFruits = ["Strawberry", "Custard Apple", "Kiwi"];
if (favFruits.includes("Kiwi")) {
    console.log("\nI really like Kiwi."); //Include in an array.
}
if (favFruits.includes("Custard Apple")) {
    console.log("I really like Custard Apple."); //Include in an array.
}
if (favFruits.includes("Strawberry")) {
    console.log("I really like Strawberries."); //include in an array.
}
if (favFruits.includes("Banana")) {
    console.log("I really like Banana."); //not include in the array.
}
//Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
headingPart("Solution#30");
const userName = ["Admin", "Aleesha", "Sana", "Kiran", "Aqsa"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "Admin") {
        console.log("\nHello Admin, Would you like to see a status report?"); //printed a message about status report.
    }
    else {
        console.log(`Hello ${userName[i]}! Thank you for logging in again.`); //Printed a Thank-you mesage to login users.
    }
}
//Q31: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
headingPart("Solution#31");
let userNames = ["Admin", "Alishba", "Mahanoor", "Laiba"];
//list is empty.
if (userNames.length === 0) {
    //Printing the line to add some users.
    console.log("\nWe need to find some users!");
}
else {
    userNames = [];
    console.log("\nAll users have been removed: " + " " + userNames.length); //All users have been removed.
}
//Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
headingPart("Solution#32");
let currentUsers = ["ADmin", "AliShba", "MaHanoor", "LaiBa", "John"];
let newUsers = ["ADmin", "Fatima", "AliShba", "Zainab", "Fariya"];
newUsers.forEach((newUsername) => {
    let lowerCase = newUsername.toLowerCase();
    if (currentUsers.map((c_user) => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`\nThe username ${newUsername} is not available. Kindly write another username`); //User name is incorrect.
    }
    else {
        console.log(`The username ${newUsername} is available.\n`); //unique user name is accepted only.
    }
});
//Q33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
headingPart("Solution#33");
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of number) {
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}\n`);
}
//Q34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
headingPart("Solution#34");
let favPizza = [
    "Arabian Wrench Pizza",
    "Veg Pizza",
    "BBQ Lava Pizza",
];
for (let Pizza of favPizza) {
    console.log(`I like ${Pizza} Pizza.`);
}
console.log("I really love all pizzas!\n"); //Added a sentence about pizza.
//Q35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
headingPart("Solution#35");
let animals = ["Goat", "Cow", "Camel"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!\n");
//Q36: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
headingPart("Solution#36");
function make_shirt(size, text) {
    console.log(`Creating a ${size} shirt with the message: ${text}\n`);
}
make_shirt("Large", "Hello World!");
make_shirt("Medium", "Hello World!");
make_shirt("Small", "Hello World!");
//Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
headingPart("Solution#37");
function shirt_making(size = "Large", text = "I love typescript") {
    console.log(`\nCreating a ${size} shirt with the message: ${text}\n`);
}
shirt_making();
shirt_making("Medium");
shirt_making("Small", "I love Python!");
//Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
headingPart("Solution#38");
function describe_city(city, country = "Default Country.") {
    console.log(`${city} is in ${country}\n`);
}
describe_city("Karachi", "Pakistan");
describe_city("Tokyo", "Japan");
describe_city("Paris");
//Q39: City Names: Write a function called city_country() that takes in the name of a city and its country.
headingPart("Solution#39");
function city_country(city, country) {
    return `${city} ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France\n"));
//Q40: Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
headingPart("Solution#40");
// Function to create an album object
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    // If tracks parameter is provided, add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums.
const album1 = makeAlbum("Artist 1", "Album Title 1");
const album2 = makeAlbum("Artist 2", "Album Title 2", 12); //number of tracks provided
const album3 = makeAlbum("Artist 3", "Album Title 3", 8); //number of tracks provided
// Printing each album object to show that the information is stored correctly
console.log(album1);
console.log(album2);
console.log(album3, "\n");
//Q41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
headingPart("Solution#41");
let magician = ["Harry Houdini", "David Copperfield", "Criss Angel"];
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
show_magicians(magician);
//Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
headingPart("Solution#42");
let magician1 = ["Harry Houdini", "David Copperfield", "Criss Angel"];
function make_great(magician1Array) {
    for (let i = 0; i < magician1Array.length; i++) {
        magician1[i] = "The Great" + " " + magician1Array[i];
    }
}
function show_magicians1(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
make_great(magician1);
console.log();
show_magicians1(magician1);
//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
headingPart("Solution#43");
let magician2 = ["Harry Houdini", "David Copperfield", "Criss Angel"];
function copyArray(arr) {
    return [...arr];
}
function make_great2(magician2Array) {
    for (let i = 0; i < magician2Array.length; i++) {
        magician2[i] = "The Great" + " " + magician2Array[i];
    }
}
function show_magicians2(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
const copyMagicainArray = copyArray(magician2);
make_great2(copyMagicainArray);
console.log("\nThis is my original array: ");
show_magicians2(magician2);
console.log("\nThis is my modified copy of the array: ");
show_magicians2(copyMagicainArray);
//Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
headingPart("Solution#44");
function makeSandwich(items) {
    console.log("\nMaking your sandwich with: ");
    items.forEach((element) => console.log("- " + element));
    console.log("Enjoy your Sandwich!");
}
makeSandwich(["Ham", "Cheese", "Lettuce"]);
makeSandwich(["Turkey", "Bacon"]);
makeSandwich(["Peanut butter", "Jelly"]);
//Q45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
headingPart("Solution#45");
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption),
    };
    return carInfo;
}
const carInfo = storeCarInfo("Honda", "Civic", { colour: "Black" }, { features: ["Navigation", "Power_window"] });
console.log(carInfo, "\n\n");
headingPart("Thank-You");
