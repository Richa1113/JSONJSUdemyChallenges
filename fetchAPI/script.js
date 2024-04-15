//********************fetching a JSON file**************//
// fetch("./movies.json")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
//or

//fetchAPI returns a promise always
//fetch("./movies.json")
//.then((response) => response.json()) //here we can ommit return coz by default it returns response
//.then((data) => console.log(data));

//********************fetching a Text file***************//

//fetch("./text.txt")
//.then((response) => response.text())
//.then((data) => console.log(data));

//********************fetching from api */

//fetch("https://api.chucknorris.io/jokes/random")
//.then((response) => response.json())
//.then((data) => console.log(data));

//fetch("https://api.github.com/users/bradtraversy/repos")
//.then((response) => response.json())
//.then((data) => console.log(data));
//or
// .then((data) => console.log(data.value));


//********************posting data on fakeAPI(server, REST API) **********/
// post method--- url + method + body + header
// function createPost(title, body){
//    fetch("https://jsonplaceholder.typicode.com/posts", {
//        method : "POST",
//        body : JSON.stringify({
//         title,
//         body         //we can write here post or can write data to be send
//         }),
//         headers : {
//             "Content-Type" : "application/json",
//             token : "abc123"
//         },
//    })
//    .then(response => response.json())
//    .then(data => console.log(data));
// }

// createPost({title : "my post", body : "this is my first post" });
