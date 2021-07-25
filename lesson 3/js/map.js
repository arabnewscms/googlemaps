let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:30.033333, lng: 31.233334 },
    zoom: 8,
  });


  map.addListener('click',function(event){
    console.log('lat = '+event.latLng.lat());
    console.log('lng = '+event.latLng.lng());
  });

    setTimeout(function(){
      if($('#map').find('.dismissButton').length == 1){
       $('#map').children('div:nth-of-type(2)').remove();
      }
    },1000);

}

$(document).ready(function(){

initMap();

});