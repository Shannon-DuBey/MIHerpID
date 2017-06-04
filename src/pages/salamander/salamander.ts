import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-salamander',
  templateUrl: 'salamander.html'
})
export class SalamanderPage {
  salamanderData: any;
  salamanderName: string;
  thumb: any;
  isRare: boolean;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.getSalamanderData();

  }

  getSalamanderData(){
    this.dataService.getJsonData().subscribe(data => {
      this.salamanderData = data.salamanders;
    });
  }

  salamanderSelected(salamander) {
    this.thumb = "salamanderPhotos/" + salamander.thumb;
    this.navCtrl.push(DetailPage, {
      type: 'salamander',
      id: salamander.id,
      commonname: salamander.commonname,
      latinname: salamander.latinname,
      identification: salamander.identification,
      habitat: salamander.habitat,
      breeding: salamander.breeding,
      range: salamander.range,
      moreinfo: salamander.moreinfo,
      thumb: this.thumb,
      photos: salamander.photos,
      status: salamander.status
    });
  }
}
