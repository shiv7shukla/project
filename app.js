// let gameseq = [], userseq = [], btns = ["teal", "coral", "yellow", "purple"], level = 0;
// let started = false, h3 = document.querySelector("h3");

// document.addEventListener("keypress", function () {
//     if (!started) {
//         started = true;
//         levelup();
//     }
// });

// function levelup() {
//     userseq = [];
//     level++;
//     h3.innerText = `Level ${level}`;
//     let btn = Math.floor(Math.random() * 4); // Fixed: Should be 4, not 3
//     flash(document.querySelector(`.${btns[btn]}`));
//     gameseq.push(btns[btn]);
// }

// function flash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 100);
// }

// function btnpress() {
//     let btn = this;
//     flash(btn);
//     userseq.push(btn.classList[1]); // Fixed: Store clicked button color
//     check(userseq.length - 1);
// }

// let allbtn = document.querySelectorAll("#button");
// for (let btn of allbtn) { // Fixed: Added `let` in for-loop
//     btn.addEventListener("click", btnpress);
// }
// function check(level) 
// {
//     if (userseq[level] === gameseq[level])
//     {
//         if (userseq.length == gameseq.length)
//             setTimeout(levelup, 1000);
//     }
//     else
//     {
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 100);
//         h3.innerText = "Game Over, Press Any Key to Restart";
//         reset();
//     }
// }
// function reset()
// {
//     level = 0;
//     started = false;
//     gameseq = [];
//     userseq = []; 
// }
// function savetoDB(data)
// {
//     return new Promise((resolve, reject) => {
//         if(Math.floor(Math.random() * 10+1)>4)
//             resolve("Data saved");
//         else
//             reject("Data not saved");
//     });
// }
// let request=savetoDB("shiv");
// request.then((result)=>{
//     console.log(result);
//     return savetoDB("shiv");
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });
// console.log("Hello");
//changed the code to make it work