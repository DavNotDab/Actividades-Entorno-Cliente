
// ACTIVIDAD 1
const KEY_SECRET = "cuOYxiOXebW5b6JVnai9KgG0NCwhDVk6NPNGLTDOojA";


// Comprueba que la localización esté disponible
// Si no está disponible, muestra un mensaje de error
function geolocationAvaliable() {
    try {
        return navigator.geolocation;
    } catch (e) {
        window.alert(e.message);
        return false;
    }
}

// Obtiene la localización del usuario si está disponible
function getLocation() {
    let location = geolocationAvaliable();
    if (location) {
        location.getCurrentPosition(showPosition);
    }
}

// Almacena las localizaciones del usuario cada vez que se obtiene una nueva
let locations = [];
function storeLocation(lat, lon) {
    locations.push([lat, lon]);
}

// Muestra la localización del usuario en el documento
function showPosition(position) {
    let geolocation = document.getElementById("geolocation");
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    geolocation.innerHTML = "Latitud: " + lat + " Longitud: " + lon + "<br>";
    storeLocation(lat, lon);
    if (map != null) {
        createMarker(lat, lon, map);
    }
}

// Obtiene la ubicación del usuario y la actualiza cada segundo durante 10 segundos
let tracking = false;
function getLocationConstantly() {
    let distancia = document.getElementById("distancia");
    if (!tracking) {
        tracking = setInterval(getLocation, 500);
        setTimeout(() => {
            clearInterval(tracking);
            tracking = false;
            let distance = getDistanceBetweenPoints(locations[0], locations[locations.length - 1]);
            distancia.innerHTML = "Distancia recorrida: " + distance + " kilómetros";
        }, 15000);
    }
}

// Obtiene la distancia entre dos puntos de latitud y longitud en kilómetros
function getDistanceBetweenPoints([lat1, long1], [lat2, long2]) {
    let long = long1 - long2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(lat1 * (Math.PI/180)) * Math.sin(lat2 * (Math.PI/180)) +
        Math.cos(lat1 * (Math.PI/180)) * Math.cos(lat2 * (Math.PI/180)) * Math.cos(long * (Math.PI/180))
    );
    return Math.round(distance * 1609.344) / 1000;
}

getLocation();

// ACTIVIDAD 2

let platform = new H.service.Platform({
    'apikey': KEY_SECRET
});

let map = null;
// Funcion que crea el mapa
function initMap() {
    let latitud = locations[locations.length - 1][0];
    let longitud = locations[locations.length - 1][1];

    let mapDiv = document.getElementById("mapContainer");
    mapDiv.innerHTML = "";

// Obtain the default map types from the platform object:
    let defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
    map = new H.Map(
        mapDiv,
        defaultLayers.vector.normal.map,
        {
            zoom: 18,
            center: { lat: latitud, lng: longitud }
        });

    let ui = H.ui.UI.createDefault(map, defaultLayers);

    createMarker(latitud, longitud, map);
    addRoute(map, latitud, longitud)

}

let lastMarker = undefined;
// Funcion que crea el marcador
function createMarker(latitud, longitud, map) {
    if (lastMarker != undefined) {
        map.removeObject(lastMarker);
    }

    let ubicacion = document.getElementById("ubicacion");
    //let svgMarkup = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
    let animatedMarker = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" ' +
        'y="0px" style="margin:-112px 0 0 -32px" width="136px"' +
        'height="150px" viewBox="0 0 136 150"><ellipse fill="#1b468d" ' +
        'cx="26" cy="20" rx="10" ry="12"><animate attributeName="cy" ' +
        'from="20" to="20" begin="0s" dur="1s" values="70;90;70" ' +
        'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes=" 0;0.6;1" ' +
        'calcMode="spline" repeatCount="indefinite"/> ' +
        '<animate attributeName="ry" from="16" to="16" begin="0s" ' +
        'dur="1s" values="16;12;16" keySplines=".6 .0 .8 .0; .0 .8 .0 1" ' +
        'keyTimes="0;0.6;1" calcMode="spline" ' +
        'repeatCount="indefinite"/></ellipse></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    let icon = new H.map.DomIcon(animatedMarker),
        coords = {lat: latitud, lng: longitud},
        marker = new H.map.DomMarker(coords, {icon: icon});

    map.addObject(marker);
    map.setCenter(coords);
    lastMarker = marker;

    let service = platform.getSearchService();

    service.reverseGeocode({
        at: latitud+","+longitud
    }, (result) => {
        result.items.forEach((item) => {
            ubicacion.innerHTML = "<b>Ubicacion actual: </b>" + item.address.label;
        });
    });
}


// Funcion que añade la ruta
function addRoute(map, latitud, longitud) {
    // Create the parameters for the routing request:
    let routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        // The start point of the route:
        'origin': `${latitud},${longitud}`,
        // The end point of the route:
        'destination': `${latitud+.0006},${longitud+.003}`,
        // Include the route shape in the response
        'return': 'polyline'
    };

// Define a callback function to process the routing response:
    let onResult = function(result) {
        // ensure that at least one route was found
        if (result.routes.length) {
            result.routes[0].sections.forEach((section) => {
                // Create a linestring to use as a point source for the route line
                let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

                // Create a polyline to display the route:
                let routeLine = new H.map.Polyline(linestring, {
                    style: { strokeColor: 'blue', lineWidth: 3 }
                });

                // Create a marker for the start point:
                let startMarker = new H.map.Marker(section.departure.place.location);

                // Create a marker for the end point:
                let endMarker = new H.map.Marker(section.arrival.place.location);

                // Add the route polyline and the two markers to the map:
                map.addObjects([routeLine, startMarker, endMarker]);

                // Set the map's viewport to make the whole route visible:
                map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
            });
        }
    };

// Get an instance of the routing service version 8:
    let router = platform.getRoutingService(null, 8);

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
    router.calculateRoute(routingParameters, onResult,
        function(error) {
            alert(error.message);
        });
}
