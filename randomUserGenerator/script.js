//fetching data from api
function fetchAPI(){
    fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((info) => {
        //console.log(data);
        displayData(info.results[0]);
    });
};

//selecting elements from HTML
let image = document.getElementById("image");
let name = document.getElementById("name");
let email = document.getElementById("email");
let ph = document.getElementById("ph");
let loc = document.getElementById("loc");
let age = document.getElementById("age");
let generateUser = document.getElementById("generator");

function displayData(data){
    //console.log(`${data.picture.medium}`);
    image.src = `${data.picture.large}`;
    name.innerHTML = `Name : ${data.name.first} ${data.name.last}` ;
    email.innerHTML = `Email : ${data.email}`;
    ph.innerHTML = `Phone : ${data.phone}`;
    loc.innerHTML = `Location : ${data.location.city} ${data.location.state} ${data.location.country}`;
    age.innerHTML = `Age : ${data.dob.age}`;
};

//fetchAPI("https://randomuser.me/api");

generateUser.addEventListener("click", fetchAPI);
