



const container = document.getElementById("container")

const API_URL = './db.json';
function checkLogin() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const user = JSON.parse(xhr.responseText);
            if (user.email === emailInput && user.password === passwordInput) {
                alert('Tizimga muvaffaqiyatli kirdingiz!');

                const form = document.querySelector(".form")
                form.style.display = "none"

                let user1 = document.createElement("div");
                user1.classList.add("user1");
                user1.innerHTML = `
                  <p>${user.id}</p>
                  <p>${user.email}</p>
                  <p >${user.name}</p>
                  <img src="${user.avatar}"/>
                `;
                container.append(user1);
            } else {
                alert('Email yoki parol noto\'g\'ri!');
            }
        } else {
            alert('Xatolik yuz berdi. Keyinroq urinib ko\'ring.');
        }
    };

    xhr.onerror = function () {
        alert('Tarmoq xatosi yuz berdi!');
    };

    xhr.send();





























    // const email = document.getElementById("email").value;
// const password = document.getElementById("password");

// const api = new XMLHttpRequest();
// api.open("GET","./db.json")


// function getValue() {
//     let inputValue = document.getElementById("myInput").value;
//     let password = document.getElementById("password").value;
//     if(inputValue ===api.email && password === "1234"){
//         alert('salom');
//     }else(
//         alert('hato')
//     )
// }

// function MyFunc(a,b){
//     return a * b
// }
// module.exports = {MyFunc}

// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }

//   function checkEmail() {
//     let email = document.getElementById("email").value;
//     if (validateEmail(email)) {
//       alert("Email manzil to'g'ri!");
//     } else {
//       alert("Email manzil noto'g'ri!");
//     }
//   }

}