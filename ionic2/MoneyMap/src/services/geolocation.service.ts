import { Injectable } from '@angular/core';
import { Geolocation, Geoposition } from 'ionic-native';

@Injectable()
export class GeolocationService {
    get() {
        //retorna una promise
        return Geolocation.getCurrentPosition();
    }
}