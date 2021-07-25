let map;
var markers = [
  ['Test Marker ',29.833395918953304,32.20287745703124],
  ['Test Marker ',30.237613442065754,30.807613785156242],
  ['Test Marker ',29.895324123782157,30.225338394531242],
  ['Test Marker ',29.566189784188747,30.813106949218742],
  ['Test Marker ',30.213881636896133,31.939205582031242],
  ['Test Marker ',30.583444084289955,31.477779800781242],
  ['Test Marker ',30.194892070217932,31.604122574218742],
];

let myMarkers = [];

function addMarker(latlng,title){
 return  new google.maps.Marker({
        position:latlng,
        map:map,
        title:title,
        animation:google.maps.Animation.DROP,
        draggable:true,
    });

}
 
function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:30.033333, lng: 31.233334 },
    zoom: 8,
  });
  setTimeout(function(){
     map.setZoom(12);
  },5000);

  // const infoWindow = new google.maps.InfoWindow();

  // for(let i=0; i < markers.length;i++){
 
  //    var marker = addMarker({lat:markers[i][1],lng:markers[i][2]},markers[i][0]+''+i);

  //   myMarkers.push(marker);

  //    myMarkers[i].addListener('click',function(){
  //      infoWindow.close();
  //      infoWindow.setContent('<h1>'+myMarkers[i].getTitle()+'</h1>');
  //      infoWindow.open(myMarkers[i].getMap(),myMarkers[i]);
  //    });
    
  //    $('.latlng').append(`
  //         <p>Lat`+i+` : <span id="lat`+i+`"></span> 
  //         Lng`+i+` : <span id="lng`+i+`"></span>
  //          <a href="#" class="removemarker" marker="`+i+`">remove Marker</a>
  //         </p>

  //      `);

  //    google.maps.event.addListener(marker,'dragend',function(markerevent){
  //     $('#lat'+i).text(markerevent.latLng.lat());
  //     $('#lng'+i).text(markerevent.latLng.lng());
  //   });
  // }

  $(document).on('click','.removemarker',function(){
    var mark = $(this).attr('marker');
    console.log(mark);
     myMarkers[mark].setMap(null);
     $('#lat'+mark).parent('p').remove();
     //console.log(myMarkers);
    return false;
  });

  map.addListener('click',function(event){
    var marker = addMarker({lat:event.latLng.lat(),lng:event.latLng.lng()},'Test Marker');
    google.maps.event.addListener(marker,'dragend',function(markerevent){
      $('#lat').text(markerevent.latLng.lat());
      $('#lng').text(markerevent.latLng.lng());
      map.setZoom(12);
      map.setCenter(markerevent.latLng);
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