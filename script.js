let email = document.querySelector("#email");
let locat = document.querySelector("#location");
let phone = document.querySelector("#phone");
let button = document.querySelector("#button_submit");

let form = document.querySelector("form");


form.addEventListener("submit",function(e){
      e.preventDefault();
    
})
let e = document.querySelector(".email");
let l = document.querySelector(".location");
let p = document.querySelector(".phone");

button.addEventListener("click",function(){

       e.innerHTML = email.value;
       l.innerHTML = locat.value;
       p.innerHTML = phone.value;
console.log('keyup');
      

})








//  <div class="container">
// <div class="wrapper">
// <div class="card">
//     <div class="image">
//         <img src="image/img1.jpeg" alt="">
//         <button class="btn_white">Uplaod Picture</button>
//     </div>
//     <div class="card_data">
//         <h1>System Administrator</h1>
//         <h3>System Administrator at Empty</h3>
//         <p class="email">Email:</p>
//         <p class="location">Location:</p>
//         <p class="phone">Phone:</p>
//     </div>
// </div>
// <form>
//    <button class="btn_succes">About</button>
//    <input type="email" placeholder="Email" id="email">
//    <input type="text" placeholder="Location" id="location">
//    <input type="phone" placeholder="Phone" id="phone">
//     <button id="button_submit">Submit</button>
// </form>
// </div>
// </div>