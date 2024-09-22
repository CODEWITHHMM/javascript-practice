////////////////////   document.getElementById ///////////////////////


// let firstImage = document.getElementById("first");
// firstImage.src = "https://cdn.pixabay.com/photo/2024/04/04/13/17/ai-generated-8675104_960_720.png";


////////////////////   document.getElementByClassName ///////////////////////


// let cname = document.getElementsByClassName("mainImage");

// for (let i = 0; i < cname.length; i++) {
//     cname[i].src = "https://cdn.pixabay.com/photo/2024/04/04/13/17/ai-generated-8675104_960_720.png";
//     console.log(`value of ${i} image has changed`);

// }


////////////////////   document.getElementByTagName ///////////////////////


// let tname= document.getElementsByTagName("p");
// tname[0].innerText = "himanshu";




////////////////////   document.querySelector ///////////////////////


// let qselect=document.querySelector("#description");
// qselect.innerText = "this is good"


// let qselect=document.querySelector("ul li");


////////////////////   document.querySelectorAll ///////////////////////


// let all = document.querySelectorAll("p");
// let all = document.querySelectorAll("p")[1];// select index



////////////////////  Manipulating Atribute  ///////////////////////

// Example 1.

// changing image source using setAttribute

// let img = document.querySelector("img");
// img.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/025/285/961/non_2x/black-panther-muzzle-dangerous-wild-predator-in-jungle-zoo-theme-animal-generative-ai-photo.jpg");


// ---------------------------------------------------------------------

// Example 2.

// changing image source using setAttribute via variable

// let img = document.querySelector("img");
// let link = "https://static.vecteezy.com/system/resources/previews/025/811/022/non_2x/rhinoceroses-in-the-african-savannah-endangered-animal-species-banner-made-with-generative-ai-photo.jpg"

// img.setAttribute("src",link );



////////////////////  Manipulating style  ///////////////////////

// Example 1.


// let heading=document.querySelector("h1");
// heading.style.color="red";// changing color
// heading.style.backgroundColor ="yellow";// changing backgroundColor


// Example 2. using loop for all


// let lists = document.querySelectorAll(".box li");
// for (let list of lists) {          // ye inline me use hua hai jyada inline use nahi karte
//     list.style.color = "red";  // sabhi red ho gya loop lagane ke bad

// }



////////////////////  Manipulating style using class  ///////////////////////

// Example 1.class add hona aur class me css dene pe css apply hoga


// var heading = document.querySelector("h1");
// // heading.classList("h1");
// // heading.classList.add("green");// class add ho gya heading Green ho
// // heading.classList.remove("green");// class remove ho gya heading pahle jaisa ho gya
// // heading.classList.contains("green");// class check karta hai ki hai ki nahi
// // heading.classList.toggle("green");// class ye basicly swtch ki tarah hai




//////////////////////  Navigation  ///////////////////////


// ==> parentElement

// ==> children

// ==> childElementCount

// ==> previousElement

// ==> nextElementSibling




//////////////////////  parentElement  ///////////////////////


// example 1.

// let parent=document.querySelector("li");

// parent is <ul>...</ul>

//   <ul>
//     <li>Eat</li>
//     <li>Code</li>
//     <li>Sleep</li>
// </ul>



//////////////////////  Children  ///////////////////////





































































