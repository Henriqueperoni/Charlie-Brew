function initMap() {

  let charlieBrew = {lat: -27.609462, lng: -48.443661};

  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: charlieBrew});

  let marker = new google.maps.Marker({position: charlieBrew, map: map});
}
