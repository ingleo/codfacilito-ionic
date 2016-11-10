import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Transaction } from '../../database';
import { GeolocationService } from '../../services/geolocation.service';
import { Camera, CameraOptions } from 'ionic-native'

/*
  Generated class for the Adding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html'
})
export class Adding {

  model: Transaction;
  shouldGeolocate: boolean = false;
  shouldSend: boolean = true;

  constructor(public navCtrl: NavController, public geolocator: GeolocationService) { }

  ionViewDidLoad() {
    this.model = new Transaction(null, "");
  }

  //método para obtener geolocalizacion
  getLocation() {
    if (this.shouldGeolocate) {
      this.shouldSend = false;
      this.geolocator.get().then((resultado) => {
        this.model.setCoords(resultado.coords);
        console.log(this.model);
        this.shouldSend = true;
      }).catch((err) => console.log(err));
    } else {
      this.model.cleanCoords();
      console.log(this.model);
    }
  }

  //método para guardar el modelo
  save() {
    if (this.shouldSend) {
      this.model.save().then(resultado => {
        this.model = new Transaction(null, "");
         this.navCtrl.pop();
      });  
    }
  }

  //método para abrir camara
  getPhoto(){
    let cameraOptions: CameraOptions = {
      quality: 80,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG
    };

    Camera.getPicture(cameraOptions).then((imageData) => {
      alert(imageData);
    }).catch(err => console.log(err));
  }
}
