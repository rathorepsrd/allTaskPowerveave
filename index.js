
const startSl = document.querySelector('#start');

//create array for track diffrent location
const cordinates = [];

//for geotocation Change
function geolocation(){
  navigator.geolocation.watchPosition(data => {
    cordinates.push([data.coords.latitude, data.coords.longitude])
    window.localStorage.setItem('cordinates', JSON.stringify(cordinates))
  })
}
console.log('cordinates',cordinates)

//In browser console (Press crtl+ shift+ p change sensor for diffrent geolocation) get details 



// TODO Trial 1 right paid api Google geocoder
// var x=document.getElementById("start");
// function getLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition,showError);
//     }
//     else{
//         x.innerHTML="Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position){
//     lat=position.coords.latitude;
//     lon=position.coords.longitude;
//     displayLocation(lat,lon);
// }

// function showError(error){
//     switch(error.code){
//         case error.PERMISSION_DENIED:
//             x.innerHTML="User denied the request for Geolocation."
//         break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML="Location information is unavailable."
//         break;
//         case error.TIMEOUT:
//             x.innerHTML="The request to get user location timed out."
//         break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML="An unknown error occurred."
//         break;
//     }
// }

// function displayLocation(latitude,longitude){
//     var geocoder;
//     const google = window.google;
//     geocoder = new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(latitude, longitude);

//     geocoder.geocode(
//         {'latLng': latlng}, 
//         function(results, status) {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 if (results[0]) {
//                     var add= results[0].formatted_address ;
//                     var  value=add.split(",");

//                     count=value.length;
//                     country=value[count-1];
//                     state=value[count-2];
//                     city=value[count-3];
//                     x.innerHTML = "city name is: " + city;
//                 }
//                 else  {
//                     x.innerHTML = "address not found";
//                 }
//             }
//             else {
//                 x.innerHTML = "Geocoder failed due to: " + status;
//             }
//         }
//     );
// }



// TODO Trial 2 right paid api Google geocoder 
//   function getLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(this.getReverseGeocodingData);
//     }
//     else{
//         document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function getReverseGeocodingData(position) {
//     console.log('position', position)
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     var latlng = new window.google.maps.LatLng(lat, lng);
//     console.log('latlng', latlng)
//     // This is making the Geocode request
//     var geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//         if (status !== window.google.maps.GeocoderStatus.OK) {
//             alert(status);
//         }
//         // This is checking to see if the Geoeode Status is OK before proceeding
//         if (status == window.google.maps.GeocoderStatus.OK) {
//             console.log(results);
//             var address = (results[0].formatted_address);
//         }
//     });
//   }





