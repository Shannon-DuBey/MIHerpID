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
    return this.http.get('../assets/data/data.json')
    .map(res => res.json())
  }

  getTurtleData(){
    return this.getJsonData()
    .subscribe(data => {
      this.turtleData = data.turtles;

    });
  }

  getFrogData(){
    this.getJsonData()
    .subscribe(data => {
      this.frogData = data.frogs;
    });
  }

  getSalamanderData(){
    this.getJsonData()
    .subscribe(data => {
      this.salamanderData = data.salamanders;
    });
  }

  echoData(){
    console.log(this.turtleData);
  }

}
