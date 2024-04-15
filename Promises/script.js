// const promise = new Promise((resolve, reject) => {
//***********************producing code     
//do some async task
//     setTimeout(() => {
//         console.log("async task 1 is completed...");
//         resolve();
//     }, 2000);
// });


//**********************consuming code */
// promise.then(() => {
//     console.log("promise is consumed.....");
// });

const getUser = new Promise((resolve, reject) =>{
    //do some async task
    setTimeout(() =>{
        let error = true;
        if(!error){
          console.log("async task 2 is completed...");
          resolve({name : "john", num : 123})
        }
        else{
          reject("Error: there is error in getting user data");
        }
    }, 1000);
    
});
//then gives the value of resolve, catch gives the value of error, and execution of finally is compulsory though promise is resolved or rejected
getUser.then((user) => {
    console.log(user);
    return user.name;
})
.then((name) => {
    console.log(name);
    return name.length;
})
.then((length) => {
   console.log(length);
})
//we can attach then after catch too whichh will be executed anyhow, we can also return values from catch
.catch((error) => {
    console.log(error);
    return 123;
})
.then((x) => {
    console.log("this will run no matter what", x);
})
.finally(() => {
    console.log("The promise has been resolved or rejected")
});

console.log("i am global console, not going to wait for anything");