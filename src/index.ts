// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Sebastian";
  const lastName = "Vallin";
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`
  );
}

function runExerciseTwo() {
  const firstName : string = readLine('What is your firstname? ')
  const lastName : string = readLine('What is your lastname?')
  const fullName :string = readLine('What is your full name?')

  let splitName = fullName.split(' ') //['Jens, Österqvist]

  console.log(`Welcome ${firstName} ${lastName}`);
  console.log('Welcome ' + firstName +' ' + lastName);
  console.log('Welcome ' + splitName[0] + ' ' + splitName[1])
  console.log('Welcome', firstName, lastName)
  console.log('Welcome %s %s!', firstName, lastName )
}

function runExerciseThree() { 
  // A
  const value1 = 1;
  const value2 = 200000000000000;

  let sum = value1 + value2;
  console.log('Sum: ', sum)

  // B
  sum = value1 / value2
  
  console.log(sum.toFixed(2))

  console.log(sum)
}

function runExerciseFour() {
  const radius : number = parseFloat(readLine('Enter a radius: '));

  const area = Math.PI * radius * radius
  console.log('Area:', area)

  const sphere = area * 4
  console.log('Sphere:', sphere)
}

function runExerciseFive() {
  const user1 = parseInt(readLine('enter a value: '))
  const user2 = parseInt(readLine('enter another value: '))


  if(user1 +1 == user2 || user1 - 1 == user2) {
    console.log('You entered consecutive numbers')
  } else console.log('Not consecutive')
}

function runExerciseSix() {
  const userInput = parseInt(readLine('enter a positive int: '));

  if( userInput > 0) {
    if(userInput % 2 === 0) console.log('Even')
    else 
      console.log('odd');
  }
}

function runExerciseSeven() {
  const userInput = parseFloat(readLine('What\'s your body temperature? ')) 

  if (userInput < 37.2 ) console.log('no fever, get back to work');
  else console.log('you have fever')
/*   else if (userInput < 38) console.log('a slight fever, chill out')
  else if (userInput < 39) console.log('take a cup of tea, you need it')
  else if (userInput > 38.9) console.log ('Go get checked!') */
}

function runExerciseEight() {}

function runExerciseNine() {
  // const test = 'a man, a plan, a canal, panama';

  const userInput: string = readLine("Enter a string: ");
  const regex = userInput.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversedString: string = regex.split("").reverse().join("");
 
  if (regex === reversedString) {
    console.log(`"${userInput}" is a palindrome.`);
  } else {
    console.log(`"${userInput}" is not a palindrome.`);
  }
}

function runExerciseTen() {
  // ### A
  /* let string = "The quick fox Jumped Over the DOG"
  console.log(string)
  string = string.toLowerCase()
  console.log(string)
  string = string.replace('t', 'T' )
  console.log(string)
  string = string
    .replace('quick', 'brown')
    .replace('dog', 'lazy dog')
  console.log(string) */

  // ### B

/*   const input1 = readLine('enter a word: ')
  const input2 = readLine('enter a word: ')

  if(input1.toLowerCase() === input2.toLowerCase()) console.log('it is the same!')
    else console.log('nope') */

// ### C
/* let word = 'Donkey';
word = word.replace('D', 'M')
console.log(word) */

// ### D
/*  let longString = 
 `I am going to visit Kolmården zoo tomorrow.
 I am a big fan of the dolphin show. 
 I may watch all dolphin shows during the day.
 I would like to take a gondola safari as well. 
 I wish to visit Bamse and his team there.`.replaceAll('\n', ' ')
 
  let stringArray = longString.split(' ');

  stringArray.forEach((word, index, array) => {
    if (word === 'I') {
      array[index] = 'We'
    }
    if (word === 'am' ) array[index] = 'are'
  })

  let longreplace = longString.replaceAll('I ', 'We ').replaceAll(' am', ' are') // reqires change in config
  console.log(stringArray.join(' '))
  console.log(longreplace)
  let longregex = longString.replace(/\bI\b/g, 'We')
  longregex = longregex.replace(/\bam\b/g, 'are')

  console.log(longregex) */
  
  // ### G
/*   let string = 'Hi, my name is Jens Österqvist.';
  let array = string.split(' ');
  console.log(array.slice(array.length-2).join(' ').replace('.', ''))

  string = string.substring(string.indexOf('J'), string.length-1)
  console.log(string) */

  // ### H

  let string = "Arrays are very common in programming, they look something like: [1,2,3,4,5]"

  let reg3 = /[^\[1]/g;
  let newstring =string.replace(reg3, "").concat(",4,5,6,7,8]");
  console.log(newstring)

  let originalStr = string.split("like: ")[1];
  console.log(originalStr)


   // JENS
  console.log('### Initalizing part H... ###')
  let message = 'Arrays are very common in programming, they look something like: [1, 2, 3, 4, 5]';
  let changedArray = message.split('[');
  changedArray = changedArray[changedArray.length - 1].split(',');
  let resultArray = [1,];
  for(let i = 0; i < changedArray.length; i++) {
    let num = parseInt(changedArray[i])
    num += 3;
    resultArray.push(num);
  }
  let resultToString ='[' + resultArray.toString() + ']';
  console.log('Expected output: \n' + resultToString)
  console.log('### Completion of part H ###')

  // TIM
  let str9 = "Arrays are very common in programming, they look something like: [1,2,3,4,5]";
  str9 = str9.substring(str9.length - 11, str9.length);
  str9 = str9.replace('2,3,', '');
  str9 = str9.replace('5', '5,6,7,8');
  console.log(str9);
}

function runExerciseEleven() {}

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
