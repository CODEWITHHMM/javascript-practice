
// //////////////////////////////if else////////////////////

// //01.



// // let age = 45
// // if (age >= 6 && age <= 18) {
// //     console.log("go to school");
// // } else if (age >= 18 && age <= 30) {
// //     console.log("go to college");
// // } else if (age >= 30 && age <= 40) {
// //     console.log("go to office");
// // } else if (age >= 40 && age <= 50) {
// //     console.log("enjoye your restirment");
// // } else if (age >= 50 && age <= 60) {
// //     console.log("go to mandir");
// // } else {
// //     console.log("go to hell");
// // }



// //////////////////////////////if else/////////////////////
// //2.


// // let age = 21;
// // if (age >= 10 && age <= 18) {
// //     console.log("bachha");
// // } else if (age >= 18 && age <= 25) {
// //     console.log("ghumna");
// // } else if (age >= 25 && age <= 29) {
// //     console.log("enjoy");
// // } else if (age >= 29 && age <= 34) {
// //     console.log("tour");
// // } else if (age >= 34 && age <= 39) {
// //     console.log("shopping");
// // } else if (age >= 39 && age >= 50) {
// //     console.log("retiarment");
// // } else {
// //     console.log("go to hell");
// // }

// // for(let i=1;i<=5;i++){
// //     console.log("outerloop",i);
// //     for(let j=1;j<=5;j++){
// //         console.log("inner loop",j);
// //     }
// // }



// // for (let i = 1; i <= 15; i++) {
// //     if (i == 5) {
// //         {
// //             console.log("break", i);
// //         }
// //         break;
// //     }
// //     console.log("break", i);
// // }


// // for (let i = 1; i <= 15; i++) {
// //     if (i == 5) {
// //         {
// //             console.log("didected", i);
// //         }
// //         continue;
// //     }
// //     console.log("continue", i);
// // }



// // let n=20;
// // let m=20;
// // for(let i=0;i<n;i++){
// //     for(let j=0;j<m;j++){
// //         if(i==0||i==n-1 || j==0||j==m-1){
// //             process.stdout.write("*")
// //         }else{
// //             process.stdout.write(" ")
// //         }
// //     }
// //     console.log();
// // }




// // let color = "green"
// // if (color == "red") {
// //     console.log("stop");
// // } else if (color == "yellow") {
// //     console.log("go slow");
// // } else if (color == "green") {
// //     console.log("go");
// // } else {
// //     console.log("incorect input");
// // }




// // let size = "s";
// // if (size == "xl") {
// //     console.log("xl size price 250");
// // } else if (size == "l") {
// //     console.log("l size price 200");
// // } else if (size == "m") {
// //     console.log("m size price 100");
// // } else {
// //     console.log("s size price 50");
// // }




// // let msg= "apple";
// // if (str.length > 3 && str[0] === "a") {
// //     console.log("good str");

// // } else {
// //     console.log("not a good str");
// // }






// //////////////////////////////prompt/////////////////////////////






// //1.

// // let p = prompt("Enter Your Password");
// // let c = p;
// // console.log(p);

// //2.

// // let firstName = prompt("Enter Your First Name");
// // let lastName = prompt("Enter Your Last Name");
// // let fName = firstName;
// // let lName = lastName;
// // // console.log(fName, lName);
// // let msg = "welcome back" + " " + fName + " " + lName + "!";
// // alert(msg);



// ////////////////////////////string////////////////////////

// //1.  string is a unmutable






// ////////////////////////////trim/////////////////////////






// //1.

// // let str="   himanshu   ";
// // let trr=str;
// // console.log(trr.trim())



// //2.

// // let password =prompt("set a password");
// // let trr=password.trim();
// // console.log(trr);





// ////////////////  UPPER CASE STRING  //////////////////////////////


// //1.

// // let str = "Himanshu";
// // let name=str.toUpperCase();
// // console.log(name);





// ////////////////  lower case STRING  //////////////////////////////


// //1.



// // let str="Ekta Maddeshiya";
// // let ekta= str.toLowerCase();
// // console.log(ekta);



// //2.


// // let name="Himanshu Maddeshiya";
// // console.log(name.toLocaleUpperCase());


// //3.


// // let str="Dice academy";
// // console.log(str.toLowerCase());


// /////////////////// method of aurgument/////////////////////


// //1.indexof


// // let msg = "iLoveHindiAndEnglish";
// // console.log(msg.indexOf("English"));




// ////////////////////////////method chaning//////////////////////

// //1.not method chaning



// // let str="  hello   ";
// // console.log("after trim",str.trim());
// // let upper=str;
// // console.log("after upper case",upper.toUpperCase());


// //2.method chaning


// // let str = "   hello  ";
// // let newstr =str.trim().toUpperCase();
// // console.log(newstr);




// //////////////////////slice method/////////////////////


// //1.


// // let str = "iLoveCoding";
// // console.log(str.slice(5));




// //2.


// // let str="HimanshuMadheshiya";
// // console.log(str.slice(0,8));


// //3.


// // let str = "himanshumadheshiya";
// // console.log(str.slice(8));



// //4.


// // let str = "himanshumadheshiya";
// // console.log(str.slice(-1));// 18-1=>17  == a



// /////////////////////////////////////replace/////////////////////////////////////


// //1.



// // let str="iLoveCoding";
// // let strr=str.replace("Coding","Do");
// // console.log(strr);




// /////////////////////////////////repeat////////////////////////////////////



// //1.


// // let str ="mangos";
// // let strr=str.repeat(3)
// // console.log(strr);


// //2.


// // let str ="apple";
// // let strr=str.repeat(3)
// // console.log(strr);




// //////////////////////////////////////practice///////////////////////////////////////



// //1.


// let msg="  help us!  ";
// let mmsg=msg.trim().toUpperCase();
// console.log(mmsg);



// //2.


// // let str ="ApnaCollege";
// // let astr=str.slice(4,9);
// // console.log(astr);


// //3.


// // let str ="apnacollege";
// // let sstr=str.indexOf("na");
// // console.log(sstr);


// //4.



// // let str ="apnacollege";
// // let sstr=str.replace("apna","our");
// // console.log(sstr);



// //4.



// // let str ="College";
// // let sstr=str.replace("l","t");
// // let ssstr = sstr.replace("l", "t");
// // console.log(ssstr);






// ///////////////////////////////////////////Array/////////////////////////////////

// //1. imp  ==   Array Is mutable




// //1.array


// // let student = ["himanshu", "rajat", "pushkar", "sumit", "ravi"["ss", "sss", "ssss"]];
// // console.log(student[4]);



// // 2.nested array



// // // let student = ["himanshu", "rajat", "pushkar", "sumit", "ravi"["ss", "sss", "ssss"]];
// // // console.log(student[4]);



// // //3. mute in array


// // // let fruits = ["mango", "litchi", "banana", "apple",];
// // // fruits[1]= "watermelon"
// // // console.log(fruits);




// // //3. add in array


// // let fruits = ["mango", "litchi", "banana", "apple", "watermelon"];
// // fruits[5] = "pineapple"
// // console.log(fruits);



// // //4.  add in array second method



// // // let fruits = ["mango", "litchi", "banana", "apple", "watermelon"];
// // // fruits[fruits.length - 1 + 1] = "pineapple"
// // // console.log(fruits);





// ///////////////////////////  array push method /////////////////////


// imp. push last wale array ki legnth ko add kar deta hai



// //1.

// // let car= ["maruti","honda","audi","bmw",];
// // car.push="ford";

// // console.log(car);



// ///////////////////////////  array pop method /////////////////////



// imp. pop last wale array ki legnth ko delet kar deta hai

// //1.



// let car = ["maruti", "honda", "audi", "bmw",];
// car.pop();

// console.log(car);



// /////////////////////////////  array unshift method /////////////////////



// imp. unshift first wale array ki legnth ko add kar deta hai


//1.


// let car = ["maruti", "honda", "audi", "bmw",];
// car.unshift("ford");
// console.log(car);


// /////////////////////////////  array shift method /////////////////////



// imp. shift first wale array ki legnth ko delete kar deta hai


//1.


// let car = ["maruti", "honda", "audi", "bmw",];
// let delet=car.shift();
// console.log(car);

// console.log(delet);       ///agar delete ko dekhna hai to



// /////////////////////////////  Question  /////////////////////


//1.

// let start = ["january", "july", "march", "august"];
// start.shift();
// start.shift();
// start.unshift("june");
// start.unshift("july");
// console.log(start);



// ///////////////////////////  Array method .indexof() /////////////////////

//imp. index ka maping karta hai ki kha hai


//1.


// let color=["red","blue","orange","black","white"];
// console.log(color.indexOf("orange"));




// ///////////////////////////  Array method .includs() /////////////////////

//imp. index me pata karta hai ki hai ki nahi return Hame true / false deta hai
//  yani boolean return karna hai



// let color = ["red", "blue", "orange", "black", "white"];
// let includs = color.includes("papya");
// console.log(includs);



// ///////////////////////////  Array method .concat() /////////////////////

//imp.  merge 2 aray in one (Do array ko ek  me jodna )  ==> concatenat



//1.

// let first = ["red", "blue", "orange"];
// let second=["black","white",];
// // let mix= first.concat(second);
// console.log(first.concat(second));




// ///////////////////////////  Array method .reverse() /////////////////////

//imp. ye method reverse karne me kam karta hai
//   ye orginal array me hi change hota hai


//1.

// let reverse = ['red', 'blue', 'orange', 'black', 'white'];
// console.log(reverse.reverse());


//2.

// imp. isase hum do array ko sath ek sath  reverse kar sakte hai with concat
// example -->

// let first = ["red", "blue", "orange"];
// let second=["black","white",];
// let mix= first.concat(second);
// console.log(mix.reverse());



/////////////////////////////// Array method .slice ////////////////////////

//imp. slice metheod (start,end) tak kam karta hai,


//1.

// let color = ['red', 'blue', 'orange', 'black', 'white'];
// console.log(color.slice(0));



//2.

// let color = ['red', 'blue', 'orange', 'black', 'white'];
// console.log(color.slice(2));


//3.

// let color = ['red', 'blue', 'orange', 'black', 'white'];
// console.log(color.slice(2,3));


//4.

// let color = ['red', 'blue', 'orange', 'black', 'white'];
// console.log(color.slice(-1));





/////////////////////////////// Array replace method ////////////////////////


//imp. ye word ko replace karta hai

// 1.

// let str="ilovecoding";
// console.log(str.replace("i","my"));


//2.

// let str= "ilovecoding";
// let nstr=str.replace("i","my");
// console.log(nstr);



/////////////////////////////// Array repeat method  ////////////////////////

// imp. isme value ko kitni bhi bhar repeat kar sakte hai


//1.

// let str = "apple";
// console.log(str.repeat(3));


//2.

// let str="mango";
// let nstr=str.repeat(5)
// console.log(nstr);


/////////////////////////////  Question  /////////////////////


//Q 1.

//   let msg="help!";
//
//   trim it and convert to uppercase

// let msg="  help!  ";
// console.log(msg.trim().toUpperCase());


// ANS.=>   HELP!






//Q 2.


//  predict a output

//   let str="ApnaCollege";
//   console.log(str.slice(4,9));


// ANS.=>  Colle






//Q 3.index of "na";

// let str = "ApnaCollege";
// console.log(str.indexOf("na"));

// ANS.=>  2,




//Q 3.  replace to "apna","aur";

// let str = "ApnaCollege";
// console.log(str.replace("Apna","Our"));


// ans => OurCollege




// Q 3.  replace to colleg part of ll to tt

// let clg = "college";
// console.log(clg.replace("ll","tt"));



// ans => cottege



///////////////////////// Array (Data Structure)  //////////////////////


//1.
// let student=["himanshu","ravi","manjit","deepak"];
// console.log(student[0]);









// let car=["bmw","tata"];
// let car2=["honda","hero"];

// let final=car.concat(car2).reverse();
// console.log(final);




///////////////////////// Array (sort)  //////////////////////

//imp.1



//  let abcd=["dog","ball","apple","cat"];
//  abcd.sort();
//  console.log(abcd);

//  ans.
//  ['apple', 'ball', 'cat', 'dog']


// imp.2


// let arr=[3,2,4,5,7,9,3];
// arr.sort();
// console.log(arr);

// //  ans. [2, 3, 3, 4, 5, 7, 9]



///////////////////////// Array (reffrence)  //////////////////////


// imp. jitna bhi array banata hai sabka memory alag hota hai
//      chahe value same ho ;


//  example
//  1.


// let arr=[1];
// let arr2=[1];
// console.log(arr===arr2);


// ans. false




//  example
//  2.


// let arr = ["a", "b"];
// let arr2 = arr;
// arr2.push("c")
// console.log(arr === arr2);

//
//    ans= >true


///////////////////////// Array (constant)  //////////////////////


//imp. constant aaray me push pop like  ho skta hai array
//     direct change nahi
//     ho sakta hai


//  example 1.


// const arr =["car","bmw","honda",];
// arr.pop();
// arr.push("ford");
// console.log(arr);


// ans == ['car', 'bmw', 'ford']



//  example 2.


// const arr =["car","bmw","honda",];
// arr=["himanshu","deepak","manjit"]

// console.log(arr);



// ans == Assignment to constant variable. at Object.




///////////////////////// Array (nested)  //////////////////////


//imp.


//  example 1.


// let nums= [[1,2,3],[4,5,6],[7,8,9]];
// console.log(nums[1][2]);


// ans == 6



//  example 2.


// let nums= [[1,2,3],[4,5,6],[7,8,9]];
// console.log(nums[1],nums[2]);



// // ans == [4,5,6],[7,8,9]


//  example 3.


// let nums= [[1,2,3],[4,5,6],[7,8,9]];
// console.log(nums[1][2],nums[2][1]);



// // ans == 6 8




/////////////////////////////  P.Question  /////////////////////

// Q1. make tik toe game         X |   | O
//                                 | X |
//                               0 |   | X

//  Example 1.



// let game = [["x"," ","o"],[" ","x"," "],["o"," ","x"]];
// console.log(game);


// ans =
// [  [ 'x', ' ', 'o' ],
//    [ ' ', 'x', ' ' ],
//    [ 'o', ' ', 'x' ] ]


//  Example 2.


// let game = [["x",null,"o"],[null,"x",null],["o",null,"x"]];
// console.log(game);


// // ans =
//   [[ 'x', null, 'o' ],
//    [ null, 'x', null ],
//    [ 'o', null, 'x' ] ]




//  Example 3. change in game array null to "o";


// let game = [["x", null, "o"], [null, "x", null], ["o", null, "x"]];
// game[0][1] = "0";
// game[1][0] = "0";
// game[1][2] = "0";
// game[2][1] = "0";
// console.log(game);


// ans = [['x', '0', 'o'],
//        ['0', 'x', '0'],
//        ['o', '0', 'x']]




////////////////////////////////// Loop  //////////////////////////////


////////////////////////////// for  Loop  //////////////////////////////


// example. for loop 4 kam karta hai

// 1. start
// 2. limit (kaha tak chalega)
// 3. updation (isme minus bhi ho skta hai plus bhi ho skta hai)
// 4. print in console.log()


// example

// 1.

// for(let nums=1;nums<=5;nums++){
//     console.log(nums);
// }

// ans ==  1
//         2
//         3
//         4
//         5

////////////////////////////////// dry run  //////////////////////////////

// output      dryrun

//    1          i=1 true
//    2          i=2 true
//    3          i=3 true
//    4          i=4 true
//    5          i=5 true
//               i=6 false





// example

// 2.

// for(let nums=5;nums>=1;nums--){
//     console.log(nums);
// }


// ans ==  5
//         4
//         3
//         2
//         1


////////////////////////////////// dry run  //////////////////////////////

// output      dryrun

//    5          i=5 true
//    4          i=4 true
//    3          i=3 true
//    2          i=2 true
//    1          i=1 true
//               i=0 false



///////////////////////////  print all odd number (1 to 15 )  ////////////////////////////


// example.

// 1.
// for (let i = 1; i<=15 ; i=i+2) {
//     console.log(i);

// }



///////////////////////////  print all even number (2 to 10 )  ////////////////////////////


// example.

// 1.
// for(let i=2;i<=10;i=i+2){
//     console.log(i);

// }

// ans =2
//      4
//      6
//      8
//      10



//////////////////////////////// ifinit Loop  /////////////////////////


// Example.

// aisa loop jiska condition hamesha true rahegi ya condition missing rahega
//  isase ram ka memory full hone ke wajah se website nahi chalega
// humlog infinite loop use nahi karenge


// 1.

// for(let i=1;i>=0;i++){
//     console.log(i);

// }


// 2.

// for(let i=1;i<=5;i--){
//     console.log(i);

// }



//////////////////////////////// for Loop Q. /////////////////////////

// Example. Print the multiplication table for 5

// Example 1.

// for(i=5;i<=50;i=i+5){
//     console.log(i);

// }
// ans = 5
//       10
//       15
//       20
//       25
//       30
//       35
//       40
//       45
//       50



//////////////////////////////// table in loop /////////////////////////


// Example. Print the table any number using for loop



// let n=prompt("write a number for table");
// n=parseInt(n)

// let n=5;

// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);

// }

// ans==

// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50



//////////////////////////////// Nested loop /////////////////////////


// imp 1. nested loop yah loop loop ke andar loop lagane ko nested loop kahte hai

// imp 2. isme jyadatar do loop use hota hai, usase jyada  bhi loop ho sakta hai

// imp 3. isase aise samjh sakte hai 1.(outer loop), 2.(inner loop), 3.(inner loop)

// example 1.

// for (let i = 1; i <= 3; i++) {
//     console.log("outer loop",i);

//     for (j = 1; j <= 3; j++) {
//         console.log("inner loop",j);


//     }

// }

// ans =

// outer loop 1
// inner loop 1
// inner loop 2
// inner loop 3
// outer loop 2
// inner loop 1
// inner loop 2
// inner loop 3
// outer loop 3
// inner loop 1
// inner loop 2
// inner loop 3





// example 2.

// for (let i = 1; i <= 2; i++) {
//     console.log("outer 1", i);
//     for (j = 1; j <= 2; j++) {
//         console.log("inner loop 2", j);
//         for (k = 1; k <= 2; k++) {
//             console.log("inner loop 3", k);
//         }
//     }
// }


// ans=

//     outer 1 1
// inner loop 2 1
// inner loop 3 1
// inner loop 3 2
// inner loop 2 2
// inner loop 3 1
// inner loop 3 2
// outer 1 2
// inner loop 2 1
// inner loop 3 1
// inner loop 3 2
// inner loop 2 2
// inner loop 3 1
// inner loop 3 2



//////////////////////////////// While loop /////////////////////////

// imp 1.  while loop ek loop ko likhne ka alag tarika hai


// example. while loop 4 kam karta hai

// 1. variable banana hota (for loop me andar lagana hota hai)
// 2. limit (kaha tak chalega)
// 3. print in console.log()
// 4. updation(isme minus bhi ho skta hai plus bhi ho skta hai)


//  Q. 01 1 to 5

// let i=1;
// while (i<=5) {
//     console.log(i);
//     i++;

// }

// ans =
// 1
// 2
// 3
// 4
// 5


//  Q. 02 5 to 1

// let i=5;
// while (i>=1) {
//     console.log(i);
//     i--;

// }

// ans =

// 5
// 4
// 3
// 2
// 1


//  Q. 03  0 to 20

// let i=0;
// while (i<=20) {
//     console.log(i);
//     i++


// }


//  Q. 04  print to even number 0 to 20

// let i=0;
// while (i<=20) {
//     console.log(i);
//     i=i+2


// }

// ans =
// 0
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20


//  Q. 04  print to odd number 0 to 20

// let i= 1;
// while (i<=20) {
//     console.log(i);
//     i=i+2


// }

// ans =
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19



//////////////////////////////// guess game /////////////////////////

// imp. ek aisa prompt banana hai jise guess karne pe avatar ane pe sucsess ho
//      nahi to wrong bolne par bhi loop chlta rahe aur quite karne pe
//      game ke bahar ho jaye


// const fav = "avatar";
// let guess = prompt("Enter Your Fav Actor");
// while((guess!=fav)&&(guess!="quit")){
//    guess= prompt("Please Enter Correct Actor")
// }

// if(guess==fav){
//     console.log("You are correct");

// }else{
//     console.log("you are incorect");

// }



//////////////////////////////// break /////////////////////////


// let i = 1;
// while (i <= 5) {
//     if (i == 3) {
//         break;

//     }
//     console.log(i);

//     i++;
// }


// ans == 1
//        2


////////////////////////// loop with array //////////////////////

// imp . using with break. statement

// let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango","Pineapple", "Strawberry", "Blueberry", "Peach","Plum","Kiwi", "Pear", "Cherry", "Papaya", "Watermelon","Cantaloupe", "Lemon", "Lime", "Raspberry", "Blackberry"];
// for (let i = 0; i<fruits.length ;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i,fruits[i]);

// }

// ans ==
//         0 Apple
//         1 Banana
//         2 Orange
//         3 Grapes
//         4 Mango


////////////////////////// loop with array //////////////////////

// imp . using with break. in array statement



// const fruits = [
//     "Apple", "Banana", "Orange", "Grapes", "Mango",
//     "Pineapple", "Strawberry", "Blueberry", "Peach", "Plum",
//     "Kiwi", "Pear", "Cherry", "Papaya", "Watermelon",
//     "Cantaloupe", "Lemon", "Lime", "Raspberry", "Blackberry"
// ];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Peach") {
//         console.log( "Peach found! Breaking out of the loop.");
//         break; // Exit the loop when "Peach" is found
//     }
// }


////////////////////////// Loops with Nested Arrays////////////////////////////

// imp 1.

// let hero = [
//     ["Spider-Man", "Iron Man", "Thor"],
//     ["Batman", "Superman", "Wonder Woman"]];

// for (let i = 0; i < hero.length; i++) {
//     for (let j = 0; j < hero[i].length; j++) {
//         console.log(hero[i][j]);
//     }
// }


// ans ==

// Spider - Man
// Iron Man
// Thor
// Batman
// Superman
// Wonder Woman


////////////////////////// Loops with Nested Arrays////////////////////////////

// imp 2.

// let student=[["himanshu",70],["deepak",72],["rajat",60]];

// for(let i=0;i<student.length;i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);

//     }
// }


// ans ==
// himanshu
// 70
// deepak
// 72
// rajat
// 60



////////////////////////// for of Loops ////////////////////////////

// imp . for...of loop JavaScript mein ek iterating loop hai jo arrays,
//       strings, Maps, Sets, aur iterable objects ke elements ko iterate karne ke
//       liye use hota hai. Ye loop har element ke liye ek baar iterate karta
//       hai aur aapko directly us element ki value provide karta hai.



// example 1.



// let fruits=["Apple", "Banana", "Orange", "Grapes", "Mango"];
// for(i of fruits){
//     console.log(i);

// }


// ans  ==
// Apple
// Banana
// Orange
// Grapes
// Mango

// example 2.


// for (let char of "himanshu madheshiya") {
//     console.log(char);


// }

// ans ==
// h
// i
// m
// a
// n
// s
// h
// u

// m
// a
// d
// h
// e
// s
// h
// i
// y
// a




////////////////////////// nested for of Loops /////////////////////////

// let fruits = [["Apple", "Banana", "Orange"], ["Grapes", "Mango","litchi"]];

// for(list of fruits){
//     for(nameof of list){
//         console.log(nameof);

//     }

// }

// ans ==

// Apple
// Banana
// Orange
// Grapes
// Mango
// litchi


/////////////////////////////// To Do App ///////////////////////////


// let todo = [];

// let req = prompt("please enter your request");

// while (true) {
//     if (req == "quit") {
//         console.log("you are quit");
//         break;
//     }

//     if (req == "list") {
//         console.log("list update");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("---------------");
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");

//     } else if (req == "delete") {
//         let idx = prompt("please enter the task you want to delet");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }
//     req = prompt("please enter your request");


// }




////////////////////////// js Objects Literals ////////////////////////



// imp . used to store keyed collection & complex entities


// example 1.

//  property => (key, value) pair
//  objects are a collection of properties


//          student
// name   "himanshu";
// age    " 25";
// marks  "79%"
// key    value



// example  2.

// let student={
//     name : "himanshu",
//     age  : 27,
//     marks: 71
// }
// student.address="delhi"
// student.gender="male";
// student.native="Gorakhpur";

// console.log(student["age"]);
// console.log(student.age);
// let prop=student.age;
// console.log([prop]);



////////////////////////// Creating Objects Literals /////////////////////

// example.

// const student ={
//     name : "himanshu",
//     age :27,
//     marks:98
// }
// console.log(student);

// const item={
//     product:"maggie",
//     price: 14,
//     varity:[10,12,827,838]
// }
// item.varity.push("himanshu");
// item.varity.pop();
// item.varity.pop();
// console.log(item);





////////////////////////// Creating Objects Literals /////////////////////

// example 1.

// const post = {
//     username: "@himanshu",
//     content: "this is my #firstPost",
//     like: 50,
//     repost:10,
//     tag:["himanshu","maddeshiya","gupta"]
// }

// console.log(post);


// ans ==
// {
//     username: '@himanshu',
//     content: 'this is my #firstPost',
//     like: 50,
//     repost: 10,
//     tag: ['himanshu', 'maddeshiya', 'gupta']
// }


///////////////////////////// Get Value ///////////////////////

// example. 1

// let student={
//     name :"himanshu",
//     marks:98.3,

// }

// console.log(student["name"]);   //    1
// console.log(student.name);      //    2



///////////////////////////// add updateValue ///////////////////////


//example .1


// const student={
//     name:"himanshu ",
//     age:25,
//     city:"mumbai",

// }
// student.native="gorakhpur"      // add
// student.name="deepak";          // change
// delete student.age;             // delete
// console.log(student["name"]);   // single element
// console.log(student);           // print





///////////////////////////// Object of Object ///////////////////////

//. imp   Object of Object ka matlab ek object ke andar multipal object ko create
//        karna indivisual value ko bhi pakad sakte hai using .operator

//example .1


// const student={
//     deepak:{
//        age:30,
//        city:"delhi",
//     },
//     pushkar : {
//         age: 28,
//         city: "bihar",
//     },
//     himanshu: {
//         age: 25,
//         city: "gorkhapur",
//     },
//     sumit: {
//         age: 20,
//         city: "uk",
//     }
// }

// // delete student.deepak;             // delete
// student.deepak.city = "mumbai";    // change
// console.log(student);              // print




//////////////////////////// Array of Object ///////////////////////

// imp 1. isme kya hota hai ki isme arry method ka bhi kam karta hai aur
//        object method ka bhi kam karta hai kah sakte ki array aur object dono nested hai

// Example 1.


// const student = [
//     {
//         name: "deepak",
//         age: 30,
//         city: "delhi",
//     },
//     {
//         name: "puskar",
//         age: 28,
//         city: "bihar",
//     },
//     {
//         name: "himanshu",
//         age: 25,
//         city: "gorkhapur",
//     },
//     {
//         name: "sumit",
//         age: 20,
//         city: "uk",
//     }
// ]

// // console.log(student[0]);             //print 0 index
// // console.log(student[0].name);        //print 0 index name
// // console.log(student[2].city);        //print 2 index city
// // student[1].name="shubham";           //change 1 index name puskar to shubham
// // console.log(student[1]);             //print 1 index





////////////////////////////// Math  Object ///////////////////////


// method 1. abs


// eaxample. abs methode jo ki use hota hai negative ko bhi positive me kar deta hai
//           aur positive ko bhi positive me kar deta hai



// let aa= Math.abs(-10);
// console.log(aa);



// ans == 10

////////////////////////////////////////////////////////////////////////////////////



// method 2. pow


// eaxample. pow methode jo ki use hota hai jaise 2 ki power 4 hai 16 hota
//           multification hota hai 2*2*2*2=16 aise hota hai


// let pow = Math.pow(2,5);
// console.log(pow);


// // ans == 32



////////////////////////////////////////////////////////////////////////////////////


// method 3. floor


// eaxample. floor kya hota hai jo bhi hamara number hota hai jaise 23.039 ye number hai
//           to ise round off kar dega 23.039 hai to ise floor value me iska
//           value 23 hogya .039 point ke bad wala dicrement ho jata hai
//


// let flr= Math.floor(23.039);
// console.log(flr);


// ans == 23



////////////////////////////////////////////////////////////////////////////////////


// method 4. ceil


// eaxample. ceil kya hota hai jo bhi hamara number hota hai jaise 53.838 ye number hai
//           to ise round off kar dega 53.838 hai to ise ceil value me iska
//           value 53 hogya .838 point ke bad wala increment ho jata hai
//




// let ceil = Math.ceil(53.838);
// console.log(ceil);


// ans == 54


////////////////////////////////////////////////////////////////////////////


// method 5. random

// example . random function kya karta hai koi bhi random value de deta hai
//           0 se leke 1 tak koi bhi value de dega jisme kabhi bhi 1 nahi dega
//



// let rdm = Math.random();
// console.log(rdm);


// ans == 0.4247404988007468




////////////////////////////////// Random integers ////////////////////////////


// method 6. random integers

// example 1. random function kya karta hai koi bhi random value de deta hai
//           0 se leke 1 tak koi bhi value de dega jisme kabhi bhi 1 nahi dega
//           kabhi 10 nahi dega is liye hame +1 karna padta hai



// let rdmflr = Math.floor(Math.random() * 10)+1;
// console.log(rdmflr);




// example 2. isme kya hota hai ki (Math.random()*12)+13,  12 + 13 = total 25 hua
//            to 12 se 25 ke bich me random number generate hoga


// let rdmflr=Math.floor(Math.random()*12)+13;
// console.log(rdmflr);



////////////////////////////////// Quetion  ////////////////////////////


// Q1. generate a random number between 1 to 100


// let a=Math.floor(Math.random()*100)+1;
// console.log(a);



// ans == 45;


// Q1. generate a random number between 1 to 5


// let rdmflr=Math.floor(Math.random()*5)+1;
// console.log(rdmflr);


// ans == 4;



/////////////////////////////////// function ////////////////////////////////

// method.
//          JavaScript में function एक ब्लॉक कोड को परिभाषित करने का तरीका है जिसे बाद में कई बार कॉल
//          किया जा सकता है। Function का उपयोग कोड को पुनः उपयोग करने और प्रोग्राम को modular बनाने के
//          लिए किया जाता है।


// example 01.


// function fun (name) {
//     console.log("kam");


// }
// fun();


// example 02.



// function loop1to5 (){
//     for(let i=1;i<=5;i++){
//         console.log(i);

//     }
// }
// loop1to5();




// example 03.


// function ageCheck (){
//     let age=19;
//     if (age>=18) {
//         console.log('adult');


//     }else{
//         console.log('not adult')

//     }
// }
// ageCheck();



// ans == adult


// example 04.



// function fun(name) {
//     console.log("name," + name + "!");


// }
// fun("himanshu");





// /////////////////////////////////// Question /////////////////////////////

// 1.


// function poem(){
//     console.log("twincle twincle, little star");
//     console.log("how are wonder, what you are");

// }


// poem();


// ans == twincle twincle, little star
//        how are wonder, what you are




// 2.

// function randomm(){
//    let i= Math.floor(Math.random(1)*5)+1;
//     console.log(i);

// }


// randomm();




// /////////////////////////// Functions with Arguments ///////////////////////////


// imp. Functions with arguments JavaScript mein functions ko inputs provide
//      karne ka tareeka hai. Yeh arguments function ke andar specific values
//      ko pass karte hain jisse function ka behavior customize hota hai.


// 1.



// function arr (nam,age){
//     console.log(`name ${nam} age ${age}`);

// }
// arr("deepak",24);
// arr("himanshu",26);


// ans == name deepak age 24
//        name himanshu age 26




// 2.


// function sum(first,second){
//     console.log(`first ${first} second ${second} total =`,first+second);

// }

// sum(2,2);
// sum(5,5);
// sum(40,60);



// ans == first 2 second 2 total = 4
//        first 5 second 5 total = 10
//        first 40 second 60 total = 100




// /////////////////////////////////P. Question /////////////////////////////

// 1. create a function that gives us the  3 of average value
//    lekin badiya tarika return karna hota hai

// Example 1.


// function average(a,b,c){
//    console.log((a+b+c)/3);

// }
// average(10,20,30);

// ans == 20


// // Example 2.


// function average(a, b, c) {
//     return ((a + b + c) / 3);

// }
// let a = average(10, 20, 30);
// console.log(a);

// ans == 20





// 1. create a function that prints the multification table of a number
//    lekin badiya tarika return karna hota hai




// function cal (a) {
//     for(i=a;i<=a*10;i+=a){
//         console.log(i);

//     }return;
// }
// cal(6);

// ans==

// 6
// 12
// 18
// 24
// 30
// 36
// 42
// 48
// 54
// 60





// 2. create a function that return the sum of number from 1 to n.

// example. 1


// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(getSum(10));


// example. 2


// let n=100;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// ans == 5050




// 3. create a function that return concatenation of all string in an array


// example 1.


// let arr= ["hi","bye","hello","!"];

// function concat(arr) {
//     let result ="";
//     for(let i=0;i<arr.length;i++){
//         result += arr [i];
//     }
//     return result;



// }
// console.log(concat(arr));



// /////////////////////////////// Scope. /////////////////////////////


// 1. scope determines the accessibility of variable, object and function from
//    diffresnt parts of the code

//    jo sabse pass code hoga wahi chalega jaise (css) me hota hai

// let sum =54;  // Global scope

// function calSum (a,b){
//     let sum= a+b;  // function scope
//     console.log(sum);

// }
// calSum(10,30);




// /////////////////////////////// Block Scope. /////////////////////////////

//   Example

//   ek {} ke andar jo code likhate hai to ve variable is
//   {} block ek undar hi accesseble hota hai
//   block ke bahar nahi access nahi hota hai
//   var me block scope nahi karta hai hai
//   let,const ye block scope kam karta hai



// ///////////////////////////// Lexical Scope. //////////////////////////


// Example 1. jaise nested loop hota tha waise hi nested function hota hai
//            usi ko access karna hota hai




// function outer() {
//     let a = 5;
//     let b = 10;
//     function inner() {
//         console.log(`total value ${a}+${b} =`, a + b);
//     }
//     inner();
// }
// outer();




// ///////////////////////////// Practice Q. //////////////////////////

// Q1. What will be print

// let greet = "hello";

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }

// }

// console.log(greet);
// changeGreet();


// ans =
// hello
// namaste



// ///////////////////////////// Function Expressions. //////////////////////////

// Function expressions JavaScript mein ek aise function ko define karte hain jise directly naam nahi diya jaata.Isme function ko ek variable mein assign kiya jaata hai.

// Example 1.



// const greet = function () {
//         console.log("Hello!");
// }
// greet();


// Yeh ek anonymous function hai, kyunki is function ka naam nahi hai, aur yeh greet variable mein stored hai.Function expressions ko aap function calls ke liye, arguments ke roop mein, ya setTimeout / setInterval ke saath use kar sakte ho.


// Example 2.

// let sum = function (a, b) {
//     return a + b


// }
// console.log(sum(18, 38));


// let sum=function (a,b,) {
//     return a*b*c;

// }
// sum();


// let nam = function () {
//     console.log("himanshu");


// }
// nam=function () {
//     console.log("himanshuMadheshiya");


// }
// nam();





/////////////////////////////// higher Order functions //////////////////////

//   imp.
//   Higher-order functions woh functions hote hain jo ya to dusre functions ko
//   arguments ke roop mein lete hain, ya phir ek function ko return karte hain.
//   modular aur reusable bana sakte hain.Yeh functions functional programming
//   ka ek part hain aur code ko concise aur readable banane mein help karte hain.
//   JavaScript mein, higher - order functions ka use karke aap code ko zyada

// example 1.

// function multiGreet(func, count) {
//     for (let i = 1; i <= count; i++) {
//         func();

//     }

// }
// let greet = function () {
//     console.log("hello");

// }
// multiGreet(greet,10);


// example 2.


// function sabhiGreet(func, count) {
//     for (let i = 1; i <= count; i++) {
//         func();

//     }
// }
// let greet = function () {
//     console.log("himanshu");

// }
// sabhiGreet(greet, 12);


// Example 3.

// function sabhiGreet(funku,count){
//     for(let i=1;i<=count;i++){
//         funku();
//     }

// }
// let greet=function(){
//     console.log("himanshu");

// }
// sabhiGreet(greet,15);


// Example 4.


// function puragreet(funny,count){
//     for(let i=1;i<=count;i++){
//         funny();
//     }
// }

// let card=function(){
//     console.log("himanshu");

// }

// puragreet(card,10)


// Example 5.  higher Order functions with option


// function sabhiGreet(option,count){
//     for(let i =1;i<=count;i++){
//         option();
//     }

// }
// let option1 =function(){
//     console.log("option1");
//     }

// let option2=function () {
//     console.log("option2");


// }

// sabhiGreet(option1,5)




// let odd = [];
// let even = [];

// function check(number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 == 0) {
//             // console.log("even",i);
//             even.push(i);
//         } else {
//             // console.log("odd",i);
//             odd.push(i);
//         }
//     }

// }
// check(100);
// let total = [even, odd];
// console.log(total);



//////////////////////// higher Order functions(return) ///////////////////




// function oddEvencheck(request) {
//     if (request == "odd") {
//         return function (n) {
//             console.log(!(n % 2 == 0));
//         }
//     } else if (request == "even") {
//         return function (n) {
//             console.log(n % 2 == 0);
//         }
//     } else {
//         console.log("You are wrong");
//     }
// }
// let request = "even";
// let func = oddEvencheck(request);
// func(110);





//////////////////////////// methods ///////////////////////

// Example 1.

// JavaScript mein, method ek function hota hai jo kisi object ka property hota hai.
// Methods ko objects ke andar define kiya jaata hai, aur unko call karne ke liye object ka reference use hota hai.


// Example 1.


// const detail ={
//     fname:"himanshu",
//     age: 26,
//     greet:function(){
//       return "hello" + this.fname;

//     }
// };
// console.log(detail.greet());



// Example 1.


const calculater = {
    add: function (a, b) {
       return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b;
    }
};

let add = calculater.add(50,10);
let sub =calculater.sub();
let mult=calculater.mult();

console.log(add);







































































































































