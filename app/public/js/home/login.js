"use strict";

console.log("javascript in login.ejs was executed!");
console.log("hello");

const userid = document.querySelector("#id");
const password = document.querySelector("#password");
const loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login_ftn);

function login_ftn() {
    const req = {
        userid: userid.value,
        password: password.value, 
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => console.log(res.json()))
      .then((res) => console.log(res));
}