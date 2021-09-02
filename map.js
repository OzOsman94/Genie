



 function initMap(){
    var pintpoint = navigator.geolocation;

pintpoint.getCurrentPosition(success,failure);

function success(position){

    var myLat = position.coords.latitude;
    var myLong = position.coords.longitude;

    var coords = new google.maps.LatLng(myLat,myLong);

    var options = {

         center: coords,
         zoom: 16
         
    }

var map = new google.maps.Map(document.getElementById("map"), options);
var marker = new google.maps.Marker({map:map, position:coords});



var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location : coords,
                radius : 500,
                type : [ 'restaurant' ]
            }, callback);

function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarkerforplaces(results[i]);
                }
            }
        }

function createMarkerforplaces(place) {
            var placeLoc = place.geometry.location;
            var markerforplaces = new google.maps.Marker({
                map : map,
                position : place.geometry.location
                //icon:"meal-food.png"
            });

            google.maps.event.addListener(markerforplaces, 'click', function() {
               var infowindow;
                infowindow.setContent(place.name);
                infowindow.open(map, this);






            });
        }


}

function failure(){

}

};


