//******************without callback*************//
// function getData(endpoint){
//     let xhr = new XMLHttpRequest();
//     xhr.open("Get", endpoint);
//     xhr.onreadystatechange = function(){
//         if(this.readyState === 4){
//             if(this.status === 200){
//                 console.log(JSON.parse(this.responseText));
//             }
//         }
//     };
//     setTimeout(() => {
//         xhr.send();
//     }, Math.floor(Math.random() *3000) + 1000);
// };

// getData("./movies.json");
// getData("./actors.json");
// getData("./directors.json");

//*******************with callback we can do our async task synchronously */
function getData(endpoint, cb){
    let xhr = new XMLHttpRequest();
    xhr.open("Get", endpoint);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                cb(JSON.parse(this.responseText));
            }
        }
    };
    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() *3000) + 1000);
};
//it will prints data from movie then from actors and lastly from directors
getData("./movies.json", (data)=> {
    console.log(data);
    getData("./actors.json", (data) => {
        console.log(data);
        getData("./directors.json", (data) => {
            console.log(data);
        });
    });
});
