//we can also sync our async task by promises as well.

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("Get", endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        }
        else {
            reject("something went wrong");
        }
      } 
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
};
//it will prints data from movie then from actors and lastly from directors
// getData("./movies.json")
//   .then((movies) => {
//     console.log(movies);
//     return getData("./actors.json");
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData("./directors.json");
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

  //getting data by async await
  async function getAlldata(){
     const resMovies = await fetch("./movies.json");
     const movies = await resMovies.json();
     console.log(movies);

     const resactors = await fetch("./actors.json");
     const actors = await resactors.json();
     console.log(actors);

     const resdirectors = await fetch("./directors.json");
     const directors = await resdirectors.json();
     console.log(directors);


  }

  getAlldata();
