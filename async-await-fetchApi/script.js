const apiUrl = "https://jsonplaceholder.typicode.com/users";

//promise with then/catch
//producing code(have 3 states-- pending, fullfilled, rejected)
const promise = new Promise((resolve, reject) => {
    const bool = true;
    if(bool){
        setTimeout(function(){
            resolve({name : "john", age : "30"});
         }, 3000)
    } 
    else{
        reject("something went wrong");
    }
});
//console.log(promise);// before 3 seconds it will give pending state,
//after that it will give fullfilled if resolved or else rejected 

// promise.then(data => console.log(data));
// promise.catch(err => console.log(err));

//********************** promise in fetching api*****/
// fetch(apiUrl)
// .then(res => res.json())
// .then(data => console.log(data));

//******** now async await *********************/
// for normal promise function
const getPromise = async() => {
    const response = await promise;
    console.log(response);
}

getPromise();

// for fetchAPI
const getAPI = async()=> {
   const response = await fetch(apiUrl);
   const result= await response.json();
   console.log(result);
}
getAPI();
