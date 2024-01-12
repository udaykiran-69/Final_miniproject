//-----create---
const logurl = "http://localhost:3000/details";
let Cre = async () =>{
    await fetch(logurl,{
        method :'POST',
        body:JSON.stringify({
            user: document.getElementById("name").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
        }),

        headers :{
            "Content-type":"application/json ; charset=UTF-8"
        }
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => consolg.log(err));
}
localStorage.setItem('logedUser',false);

// Load users data from local storage or initialize an empty array

let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to handle login

async function login(event) {
    event.preventDefault();
    const loginUsername = document.getElementById("login_Email").value;
    const loginPassword = document.getElementById("login_Password").value;
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword) || users.find(u => u.email === loginUsername && u.password === loginPassword);
    if (user) {
        localStorage.setItem('logedUser', true);
        alert("Login successful!");

        // window.location.href="sample.html";

        const mypage = await fetch("sample.html");
        const maniContent = await mypage.text();
        document.documentElement.innerHTML = maniContent;
        if (localStorage.getItem('logedUser')) {
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
            document.getElementById("myprofile").style.display = "block";
        }
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Function to handle signup

const signurl = "http://localhost:3000/details";
let addpost = () => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            user: document.getElementById("name").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
        }),
        headers: {
            "Content-type": "application/json ; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => console.log(data));
}
function signup(event) {
    event.preventDefault();
    const signupUsername = document.getElementById("name").value;
    const signupEmail = document.getElementById("email").value;
    const signupNumber = document.getElementById("mobile").value;
    const signupPassword = document.getElementById("password").value;
    const signupConfirmPassword = document.getElementById("cpassword").value;
    if (!validateSignupForm(signupUsername, signupEmail, signupPassword, signupConfirmPassword, signupNumber)) {
        return;
    }
    if (users.some(user => user.username === signupUsername || user.email === signupEmail)) {
        alert("Username or email already taken. Please choose a different one.");
        return;
    }
    const newUser = {
        username: signupUsername,
        email: signupEmail,
        mobile: signupNumber,
        password: signupPassword,
        confirm_password: signupConfirmPassword,
    };
    users.push(newUser);

    // Save users data to local storage

    localStorage.setItem('users', JSON.stringify(users));
    alert("Signup successful!");
    console.log(users);
}
// Function to validate signup form fields

function validateSignupForm(username, email, mobile, password, confirm_password) {
    if (!username || !email || !mobile || !password || !confirm_password) {
        alert("All fields are required. Please fill in all the details.");
        return false;
    }
    return true;
}