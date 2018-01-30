window.onload = function() {
  var i;
  //var tablinks = document.getElementsByClassName("tablinks");
  //
  //if(tablinks) {
  //  var firstTabContent = tablinks[0].getAttribute("data-content");
  //  document.getElementById(firstTabContent).style.display = "block";
  //  tablinks[0].className += " active";
  //
  //  for (i = 0; i < tablinks.length; i++) {
  //    tablinks[i].addEventListener("click", function(e) {
  //      var tabContent = this.getAttribute("data-content");
  //      openContent(e,tabContent);
  //    }, false);
  //  }
  //}

  function openContent(e,tabContent) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabContent).style.display = "block";
    e.currentTarget.className += " active";
  }

  var map = document.getElementById('#map');
  if(map) {
    initMap();
  }
  function initMap() {
    var lat = 49.224544,
        lng = 28.427415,
        currentCenter =  {lat: lat, lng: lng};
    var map =  new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: currentCenter,
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
  var request = new XMLHttpRequest();
  request.open("GET", "user_profile.json", false);
  request.send(null);
  var my_JSON_object = JSON.parse(request.responseText);
  console.log(' my_JSON_object--> ',my_JSON_object.users[0].first_name );
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
