window.onload = function() {

  //var map = document.getElementById('#map');
  //if(map.length>0) {
    initMap();
  //}
  function initMap() {
    var lat = 49.224544,
        lng = 28.427415,
        currentCenter =  {lat: lat, lng: lng};
    var map =  new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: currentCenter,
      //styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });

    var infowindow = new google.maps.InfoWindow({
      content: 'Hi! We are here!'
    });
    var marker = new google.maps.Marker({
      position: currentCenter,
      map: map
    });
    infowindow.open(map, marker);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

};
function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function toggleClass(el, _class) {
  if (el && el.className && el.className.indexOf(_class) >= 0) {
    var pattern = new RegExp('\\s*' + _class + '\\s*');
    el.className = el.className.replace(pattern, ' ');
  } else if (el){
    el.className = el.className + ' ' + _class;
  }
}



var ankorLink = document.getElementsByClassName('ankor');

for (var i = 0; i < ankorLink.length; i++) {
  if(hasClass(ankorLink[i], 'active')){
    toggleClass(ankorLink[i], 'active');
  }
  ankorLink[i].onclick = function() {
    this.classList.add("active");
    var idItem = this.getAttribute('href').substr(1);
    console.log('idItem  --> ',idItem  );
    //goToByScroll(idItem);
    return false;
  };
}
//function goToByScroll (id) {
//  console.log('id --> ', id);
//  var idElement = document.getElementById(id);
//  //scrollTo(idElement, 0, 1250);
//}
