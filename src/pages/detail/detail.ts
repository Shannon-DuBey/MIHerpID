import { Component } from '@angular/core';

//import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
    type: string;
    id: string;
    commonname: string;
    latinname: string;
    identification: string;
    habitat: string;
    breeding: string;
    range: string;
    moreinfo: string;
    thumb: any;
    photos: any;

  constructor(private navParams: NavParams) {
    this.type = navParams.get('type');
    this.id = navParams.get('id');
    this.commonname = navParams.get('commonname');
    this.latinname = navParams.get('latinname');
    this.identification =navParams.get('identification');
    this.habitat = navParams.get('habitat');
    this.breeding = navParams.get('breeding');
    this.range = navParams.get('range');
    this.moreinfo = navParams.get('moreinfo');
    this.thumb = navParams.get('thumb');
    this.photos = navParams.get('photos');

    console.log(this.photos);
  }

}
