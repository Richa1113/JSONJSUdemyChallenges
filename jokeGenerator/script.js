const button = document.getElementById("results");
const p = document.getElementById("jokeDisplay");
let getJokes = () => {
  //console.log("hello");
  const xhr = new XMLHttpRequest();
  xhr.open("Get", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const joke = JSON.parse(this.responseText);
        p.innerHTML = `${joke.value}`;
      } else {
        p.innerHTML = `something went wrong`;
      }
    }
  };
  xhr.send();
};

button.addEventListener("click", getJokes);
document.addEventListener("DOMContentLoaded", getJokes);
