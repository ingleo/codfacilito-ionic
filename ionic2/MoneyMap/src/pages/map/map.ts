import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';
import { GeolocationService } from '../../services/geolocation.service';
import { Transaction } from '../../database';
/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class Map {

  //se crea la variable GoogleMap 
  map: GoogleMap = null;

  constructor(public navCtrl: NavController, public geolocator: GeolocationService) { }

  ionViewDidEnter() {
    //obtener ubicacion del usuario para centrar el mapa
    this.geolocator.get().then((result) => {
      //llamado al método para cargar el mapa
      this.loadMap(result.coords.latitude, result.coords.longitude);
    }).catch((err) => console.log(err));
  }

  //carga los marcadores para el mapa
  loadMarkers() {
    Transaction.all().then((result) => this.loadTransactionMarkers(result));
  }

  //carga los marcadores por transaccion que se encuentra en la base de datos
  loadTransactionMarkers(transactions) {
    for (var i = 0; i < transactions.length; ++i) {
      let transaction = transactions[i];

      //se crea un objeto markerLocation para definir la posicion en que posicion esta un punto
      let markerLocation: GoogleMapsLatLng = new GoogleMapsLatLng(transaction.lat, transaction.lng);

      //opciones con las que se va a mostrar el marcador de google
      let markerOptions: GoogleMapsMarkerOptions = {
        position: markerLocation,
        title: transaction.title,
        icon: "blue"
      };

      //se agrega el marker con las opciones al mapa
      this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      }).catch(err => console.log(err));
    }
  }

  //carga el mapa recibiendo la latitud y longitud
  loadMap(lat, lng) {
    let location: GoogleMapsLatLng = new GoogleMapsLatLng(lat, lng);
    this.map = new GoogleMap("map", {
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    //para que el mapa se muestre cuando termine de cargarse y asi cargue los marcadores
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => this.loadMarkers());
  }
}
