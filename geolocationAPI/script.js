//getCurrentPosition()
function curSuccess(pos){
    //console.log(pos);
    const coords  = pos.coords;
    
    console.log(`Accuracy: ${coords.accuracy}`);
    console.log(`Latitude: ${coords.latitude}`);
    console.log(`Longitude: ${coords.longitude}`);
}

function curError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy : true, //use GSP if available
    timeout : 5000,  //Time to wait to stop trying for location
    maximumAge : 0,  // Do not use a cached position
};

//navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

//************************* Showing on map ***********************/
