  /*
  let js = 'amazing';
    console.log(40 + 8 + 23 - 10);
    console.log("sami");
    console.log(28);

    let firstName ="sami";
    console.log(firstName);

    let myFirstJob = 'programmer';
    let myCurrentJob = 'software engineer';
    console.log(myFirstJob);
    console.log(myCurrentJob);
    

    let javaScriptIsFun = true;
    console.log(javaScriptIsFun);

    // console.log(typeof true);
    console.log(javaScriptIsFun);
    // console.log(typeof 20);
    // console.log(typeof 'sam');

    javaScriptIsFun = 'YES';
    console.log(javaScriptIsFun);

    let year;
    console.log(year);
    console.let age = 20;
    log(typeof year);
    year = 1995;
    console.log(typeof year);
    

//    let age = 20;
//    age = 22;

//    const birthYear= 1995;

   const ageSami = 2023 - 1995;
   const ageSara = 2023 - 2001;
   console.log(ageSami , ageSara);
   console.log(ageSami * 2 , ageSara / 2 , 2 ** 3);
//2**3 means 2 to the power of 3 which is 2*2*2

    const firstName = 'Sami';
    const lastName = 'fadlallah';
    console.log(firstName , lastName);

    let x = 10 + 5 ;
    console.log(x);
    x += 10; //x=x+10=25
    console.log(x);

    //comparison operators
    console.log(ageSami > ageSara);
    console.log(ageSara >= 22);
    console.log(ageSami <= 25);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92; 
const heightJohn = 1.95;


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark , BMIJohn , markHigherBMI);



const firstName = 'sami';
const job = 'programmer';
const birthYear = 1995;
const year = 2023;

const sami = "I'm " + firstName + ', a ' + ( year - 
    birthYear) + ' years old' + job + '!';

console.log(sami);

const samiNew = `I am ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(samiNew);


const age = 19;
const  isOldEnough = age >= 18;
if(isOldEnough) {
console.log('sami can strat his driving licence 🚙');

}

const age = 15;
if(age >= 18) {
console.log('sami can strat his driving licence 🚙');
} else {
    const yearLeft = age - 18;
    console.log(`sami is too young. wait another ${yearLeft} years :)`);
}


//type conversion
const inputYear = '1995';
console.log(Number(inputYear));
console.log(Number(inputYear)+18);

console.log(Number('sami'));
console.log(typeof NaN);

console.log(String (23) , 23);


//type coersion
console.log('I a m ' + 23  + 'years old');
console.log('23' - '10' - 3);
console.log('23' / 2);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('sami'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if ( money ) {
    console.log('dont spend it all');
}
else {
    console.log('you should get a job');
}

let height;
if (height){
    console.log('YAY! height is defined');
}
else {
    console.log('height is UNDEFINED');
}


const age = '18';
if (age === 18) console.log('you just became an adult (strict)');

 
if (age ==18) console.log('you just became an adult (loose)');

const favorite = Number(prompt('what is your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23){
    console.log('cool , 23 is an amazing number');

}
else if (favorite === 7){
    console.log('7 is also a cool number');
}
else if (favorite === 9){
    console.log('9 is also a cool number');
}
else {
    console.log("number is not 23 or 7");
}


const hasDriverLicence = true; //A
const hasGoodVision = true; //B

//AND operator
console.log(hasDriverLicence && hasGoodVision);

//Or operator
console.log(hasDriverLicence || hasGoodVision);

//NOT operator
console.log(!hasDriverLicence);
const sheShouldDrive = hasDriverLicence && hasGoodVision;
//if(hasDriverLicence){
//  console.log('sara is able to drive')
//}
//else {
//  console.log('someone else should drive..')
//}

const isTired = false //C
console.log(hasDriverLicence || hasGoodVision || isTired);

if(hasDriverLicence && hasGoodVision && ! isTired){
    console.log('sara is able to drive')
}
else {
    console.log('someone else should drive..')
}


const scoreDolphins = (96 + 108 +89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins , scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy 🏆 ")
} else if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy 🏆 ")
} else if (scoreDolphins === scoreKoalas){
    console.log("Both wins the trophy 🏆😍 ")
}


const scoreDolphins = (97 + 112 +90) / 3;
const scoreKoalas = (109+ 95 + 50) / 3;
console.log(scoreDolphins , scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy 🏆 ")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
    console.log("Koalas win the trophy 🏆 ")
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100
    && scoreKoalas >= 100){
    console.log("Both wins the trophy 🏆😍 ")
} else {
    console.log("No one wins the trophy")
}


const day = 'friday';
switch(day){
    case 'monday': //day === monday
        console.log('plan course structure')
        console.log('go to coding meet up')
    break;
    case 'tuseday':
        console.group('prepare theory videos')
    break;
    case 'wednesday':
    case 'thursday':
        console.log('code all day')
    break;
    case 'friday':
    console.log('rest all day')
    break;
    case 'saturday':
    case 'sunday':
        console.log('enjoying the weekend')
        break;
        default:
        console.log('error input , not valid')
} 
if (day === 'monday'){
    console.log('plan course structure')
    console.log('go to coding meet up')
} else if (day === 'tuseday'){
    console.group('prepare theory videos')
} else if (day === 'wedensday' || 'thursday'){
    console.log('code all day')
} else if (day === 'friday' ){
    console.log('rest all day')
} else if (day === 'saturday'   || day ==='sunday'){
    console.log ('enjoying the weekend');
}


const age = 23;
age >= 18? console.log('i would like to drink wine'):
console.log('i would like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2 = age >=18 ;
if (age >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log('I would like to drink ${age >=18 ? 'wine': 'water'}');



const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/