let map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:30.033333, lng: 31.233334 },
    zoom: 8,
  });



  map.addListener('click',function(event){

  //    const image = {
  //  url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  //   // This marker is 20 pixels wide by 32 pixels high.
  //   size: new google.maps.Size(100, 100),
  //   // The origin for this image is (0, 0).
  //   origin: new google.maps.Point(0, 0),
  //   // The anchor for this image is the base of the flagpole at (0, 32).
  //   anchor: new google.maps.Point(0, 32),
  // };

  //  const shape = {
  //   coords: [1, 1, 1, 20, 18, 20, 18, 1],
  //   type: "poly",
  // };

   const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

    // console.log('lat = '+event.latLng.lat());
    // console.log('lng = '+event.latLng.lng());
    var marker = new google.maps.Marker({
        position:{lat:event.latLng.lat(),lng:event.latLng.lng()},
        map:map,
        title:'Test Marker ',
        draggable:true,
        icon:svgMarker,
        //shape:shape
    });
// drag
// dragstart 
// dragend
    google.maps.event.addListener(marker,'drag',function(markerevent){
      // document.getElementById('lat').innerHTML = markerevent.latLng.lat();
      // document.getElementById('lng').innerHTML = markerevent.latLng.lng();
      $('#lat').text(markerevent.latLng.lat());
      $('#lng').text(markerevent.latLng.lng());
      console.log(markerevent.latLng.lat());
      console.log(markerevent.latLng.lng());
    });

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