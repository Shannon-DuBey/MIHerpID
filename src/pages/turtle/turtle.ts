import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-turtle',
  templateUrl: 'turtle.html'
})
export class TurtlePage {
  turtleData: any;
  turtleName: string;
  thumb: any;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.getTurtleData();
  }

  getTurtleData(){
    this.dataService.getJsonData().subscribe(data => {
      this.turtleData = data.turtles;
    });
  }

  turtleSelected(turtle) {
    this.thumb = "turtlePhotos/" + turtle.thumb;
    this.navCtrl.push(DetailPage, {
      type: 'turtle',
      id: turtle.id,
      commonname: turtle.commonname,
      latinname: turtle.latinname,
      identification: turtle.identification,
      habitat: turtle.habitat,
      breeding: turtle.breeding,
      range: turtle.range,
      moreinfo: turtle.moreinfo,
      thumb: this.thumb,
      photos: turtle.photos
    });
  }

}
