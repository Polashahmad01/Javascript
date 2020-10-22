//Variable using VAR, LET, CONST;
// console.log('Hello World');
// let name = 'Polash';
// console.log(name);
// let firstName = 'Polash';
// let lastName = 'Ahmad';
// console.log(firstName, lastName);
// const interestRate = 5;
// console.log(interestRate);
// let userName = 'Hello World';
// let age = 30;
// let hasSchool = true;
// let firstNames = undefined;
// let hasKids = null;
// typeof operator

// let person = {
//     name: 'Polash',
//     age: 20
// }

// person.name = 'Ahmad';
// person[age] = 22;

// console.log(person.age);

// let selectedColors = ['green', 'blue'];
// selectedColors[2] = 'Polash';
// console.log(selectedColors);

// function helloToConsole(firstName, lastName) {
//     console.log('Hello ' + firstName + ' ' + lastName);
// }

// helloToConsole('Polash', 'Ahmad');

// function square(number) {
//     return number * number
// }

// console.log(square(6));

//==============================================================================================

// let x = 10;
// let y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);


// console.log(++x);
// console.log(x);
// console.log(x++);
// console.log(x);

// console.log(--y);
// console.log(y);
// console.log(y--);
// console.log(y);

// let z = 5;

// console.log(z++)

// z = z + 5;
// z += 5;
// console.log(z)


// let x = 1;

// console.log(x > 0);
// console.log(x >= 0);
// console.log(x < 0);
// console.log(x <= 0);

// console.log( x === 1);
// console.log(x !== 2);


// console.log( 5 === 5);
// console.log('5' === 5);

// console.log(5 == 5);
// console.log('5' == 5);
// console.log(false == 0);

// let money = 200;

// const memberShip = money > 90 ? 'Gold Member' : 'Silver Member';
// console.log(memberShip);


// &&
// let age = 5;
// let income = 2000;

// if(age > 0 && income > 2000) {
//     console.log(true);
// }

// // ||
// if( age > 10 || income > 10) {
//     console.log(true)
// }

// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

//==============================================================================================
// Control Flow

// let day = 'govt';

// if(day === 1) {
//     console.log('Holyday!')
// } else if(day === 'govt') {
//     console.log('It\' a govt holy Day');
// } else {
//     console.log('I have to go to office');
// }

// let role ='guest';

// switch(role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     case 'general':
//         console.log('General User');
//         break;
//     default:
//         console.log('Faul user');

// }

// if(role === 'guest') {
//     console.log('Guest User');
// } else if(role === 'moderator') {
//     console.log('Moderator User');
// } else if(role === 'general') {
//     console.log('General User');
// } else {
//     console.log('Faul User');
// }

// for(i = 1; i <= 5; i++) {
//     if(i % 2 === 1) {
//         console.log('Odd', i);
//     } else {
//         console.log('Even', i);
//     }
// }

// for( i = 5; i >= 1; i--) {
//     if(i % 2 === 1) {
//     console.log('Odd', i);
// } else {
//     console.log('Even', i);
//     }
// }

// let i = 5;

// while(i <= 5) {
//     if(i % 2 === 1) {
//         console.log('Odd', i);
//     } else {
//         console.log('Even', i);
//     }

//     i++;
// }

// while(i >= 1) {
//     if(i % 2 === 1) {
//       console.log('Odd', i);
//     } else {
//   console.log('Even', i);
//    }
        
// i--;
// }


// let i = 0;
// do {
//     if(i % 2 === 1) {
//         console.log('Odd', i);
//     } else {
//         console.log('Even', i);
//     }
//     i++;
// } while(i < 5);

// let i = 5;
// do {
//     if(i % 2 === 0) {
//         console.log('Even', i);
//     } else {
//         console.log('Odd', i);
//     }
//     i--;
// } while( i >= 1);

// const person = {
//     name: 'Polash',
//     age: 20
// }

// for(key in person) {
//     console.log(person[key]);
// }


// const colors = ['red', 'green', 'blue', 'yellow'];

// for(index in colors) {
//     console.log(index, colors[index]);
// }

// for( color of colors) {
//     console.log(color);
// }


// function maxNumber(num1, num2) {
//     if(num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log(maxNumber(100,2))

// function isLandscape(width, height) {
//     if(width > height) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLandscape(1000, 200));

const output = fizzBuzz(10);
console.log(output);

function fizzBuzz(input) {
    if(typeof input !== 'number') {
        console.log('Not a number');
    } 
    if((input % 3 === 0) && (input % 5 === 0)) {
        console.log('FizzBuzz');
    }
    if(input % 3 === 0) {
        console.log('Fizz');
    }
    if(input % 5 === 0) {
        console.log('Buzz');
    }

    return input;
}
