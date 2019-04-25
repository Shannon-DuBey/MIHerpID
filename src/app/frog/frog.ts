import { Component } from '@angular/core';
import { DataService } from '../services/data-service';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-frog',
  templateUrl: 'frog.html'
})
export class FrogPage {
  frogData: any;
  frogName: string;
  thumb: any;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.getFrogData();
  }

  getFrogData(){
    this.dataService.getJsonData().subscribe(data => {
      this.frogData = data.frogs;
    });
  }

  frogSelected(frog) {
    this.thumb = "frogPhotos/" + frog.thumb;
    this.navCtrl.push(DetailPage, {
      type: 'frog',
      id: frog.id,
      commonname: frog.commonname,
      latinname: frog.latinname,
      identification: frog.identification,
      habitat: frog.habitat,
      breeding: frog.breeding,
      range: frog.range,
      moreinfo: frog.moreinfo,
      thumb: this.thumb,
      photos: frog.photos,
      voice: frog.voice,
      media: frog.media
    });
  }

}
