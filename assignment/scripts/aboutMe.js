// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Daniel';
console.log(firstName);

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Fenske';
console.log(lastName);

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 4 - Console log the value of `fullName`
console.log(fullName);

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 7
console.log(luckyNumber);

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

let sentence = ('My name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!');
console.log(sentence); //Statement output: 'My name is Daniel Fenske and I think 7 is a winner!

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true
console.log(adventurous);

// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = 'pizza';
console.log(food);

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 0;
console.log(pets);

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 1
console.log(friendsPets);

// 11 - Add two pets to your `pets` variable
pets = 0
console.log(pets);

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 2;
console.log(allowedPets);

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"

if (adventurous) {
console.log('Adventures are great!'); //Statement output
} else {
  console.log('How about we stay home?');
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

if (luckyNumber === 2 && adventurous) {
  console.log('Roll the dice!');
} else {
  console.log('Stay at home, kid.'); //Statement output
}

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if (pets < allowedPets)
  console.log('I can have more pets!'); //Statement output
  else if (pets === allowedPets){
    console.log('I have enough pets');
  } else if (pets > allowedPets) {
    console.log('Oh no, I have too many pets!');
  }


  //BONUS PRACTICE
  let catAndDogAllergies = true; // This one has been added by me, because I'm allergic to cats and dogs!

  if (pets < allowedPets && catAndDogAllergies === false)
    console.log('I can have more pets!');
    else if (pets === allowedPets && catAndDogAllergies === false){
      console.log('I have enough pets');
    } else if (pets > allowedPets && catAndDogAllergies === false) {
      console.log('Oh no, I have too many pets!');
    }
    else if (catAndDogAllergies){
      console.log('No pets allowed!'); // Statement output: 'No pets allowed!' Should I buy a fish?
    }

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.

pets = 0;
friendsPets = 1;

console.log(pets);
console.log(friendsPets);

let mostPets = true

if (pets > friendsPets) {
  mostPets = pets;
  console.log('I have more pets than my friend (' + mostPets + ').');
} else if (pets < friendsPets) {
  mostPets = friendsPets;
  console.log('My friend has more pets than me (' + mostPets + ').'); // Statement output
} else if (pets === friendsPets) {
  mostPets = 'My friend and I have the same number of pets (' + pets + ').';
}

console.log(mostPets); // Output = 1 (friendsPets)

// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!

pets = 4
friendsPets = 3
mostPets = true;

switch (mostPets) {
  case pets > friendsPets:
    mostPets = pets;
    console.log('I have more pets than my friend (' + mostPets + ').'); // Statement output
    break;
    case pets < friendsPets:
    mostPets = friendsPets;
    console.log('My friend has more pets than me (' + mostPets + ').');
    break;
  default:
    console.log('My friend and I have the same number of pets (' + pets + ').');
}

console.log(mostPets); // Output = 4 (pets)

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

adventurous = true;

adventurous ? console.log('Adventures are great!') : console.log('How about we stay home?'); // Statement output: 'Adventures are great!'
