import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
  fullData: any;
  turtleData: any;
  frogData: any;
  salamanderData: any;

  constructor(public http: Http) {
    //this.getTurtleData();
  }

  getJsonData(){
    return this.http.get('assets/data/herpData.json')
    .map(res => res.json())
  }

}
