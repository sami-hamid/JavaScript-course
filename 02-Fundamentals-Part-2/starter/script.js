'use strict';
/*
let hasDriversLicence= false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if(hasDriversLicence)
    console.log('I can drive');

    // const interface = 'Audio';
    // const private = 500;
    

function logger(){
    console.log('my name is sami');
}
//calling / running or invoking the function , using the function that we defined earlier
logger();
logger();

function fruit(apple , Banana){

console.log(apple, Banana);
const juice=`juice with ${apple} apple and ${Banana} Banana`;
return(juice);
}
const appleJuice = fruit(5,7);
fruit('green','yellow');
console.log(appleJuice);

const appleBananaJuice = fruit(2,4);
console.log(appleBananaJuice);


//function declarition
function calcAge1(birthYear){
    return 2037 - birthYear;

}
const age1 = calcAge1(1991);
console.log(age1);

//function expression

function calcAge2(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//arrow function
const calcAge3 = birthYear=> 2037-birthYear;
const age3=calcAge3(1991);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment =65 - age;
    // return retirment;
    return `${firstName} retires in ${retirment} years`;


}
console.log(yearsUntillRetirement (1991 ,'sami'));
console.log(yearsUntillRetirement (1991 ,'hamid'));


function cutFruitPieces (fruit){
return fruit * 4;
}

function fruit(apple , Banana){
const applePieces = cutFruitPieces(apple);
const bananaPieces = cutFruitPieces(Banana);

    console.log(apple, Banana);
    const juice=`juice with ${apple} apple and ${Banana} Banana`;
    return(juice);
    }
    console.log(fruit(2, 3));

    

    const calcAverge = (a, b, c)=> (a + b + c) / 3;
    console.log(calcAverge(3, 4, 5));

    // test 1
    const scoreDolphins = calcAverge(44, 23, 71);
    const scoreKoalas = calcAverge(65, 54, 49);
    console.log(scoreDolphins, scoreKoalas);

    const checkWinner= function (avgDolphins, avgKoalas){
        if (avgDolphins => avgKoalas){
            console.log(`Dolphins Win 🏆 ${avgDolphins} vs ${avgKoalas})`);
        }else if (avgKoalas => 2 * avgDolphins){
            console.log (`Koala win 🐨 ${avgDolphins} vs ${avgKoalas})`);
        } else {
            console.log('No teams win ');
        }
    }
        checkWinner (scoreDolphins, scoreKoalas);
        
       const friend1 = 'sami';
       const friend2 = 'Hamid';
       const friend3 = 'faki';

       const friends =['sami', 'hamid', 'faki'];
       

    //    const years = new Array[1991, 1995, 2020 ,2023];

    console.log(friends[0]);
    console.log(friends[1]);
    console.log(friends[2]);

    console.log(friends.lenght);
    console.log(friends[friends.length - 1]);

    friend2 = 'fadlallah';
    console.log(friends);

    const firstName = 'sami';
    const sami = [firstName, 'hamid' , 1995 - 2024 , 'programmer'
    ,friends];
    console.log(sami);
    console.log(sami.length);


const friends = ['sami', 'hamid', 'faki'];
//add element
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('sami');
console.log(friends);

//remove element
friends.pop(); //will pop last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //will shift/remove first element
console.log(friends);

console.log(friends.indexOf('hamid'));

console.log(friends.includes('sami'));


CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

//solution:
function calcTip(bill) {
    if (50 <= bill && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

let bills = [125, 555, 44];
let tips = bills.map(calcTip);

// Bonus: Calculate the total value for each bill.
let totals = bills.map((bill, index) => bill + tips[index]);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);



// console.log('lifting weight repetition 1 🏋️‍♀️');
// console.log('lifting weight repetition 2 🏋️‍♀️');
// console.log('lifting weight repetition 3 🏋️‍♀️');
// console.log('lifting weight repetition 4 🏋️‍♀️');
// console.log('lifting weight repetition 5 🏋️‍♀️');
// console.log('lifting weight repetition 6 🏋️‍♀️');
// console.log('lifting weight repetition 7 🏋️‍♀️');
// console.log('lifting weight repetition 8 🏋️‍♀️');
// console.log('lifting weight repetition 9 🏋️‍♀️');
// console.log('lifting weight repetition 10 🏋️‍♀️');

for(let rep = 1; rep <= 10; rep ++){
    console.log(`lifting weight repetition  ${rep}🏋️‍♀️`);
}


const  sam = [
    'sami',
     'hamid',
     2023 - 1995,
     'programmer',
     ['omer', 'hassan','amin']

];
for (let i = 0; i < 5; i++ ) {
    console.log(sam[i]);
}


const  sam = [
    'sami',
     'hamid',
     2023 - 1995,
     'programmer',
     ['omer', 'hassan','amin']

];

for (let i = sam.length - 1; i >= 0; i-- ){
    console.log(sam[i]);
}
*/