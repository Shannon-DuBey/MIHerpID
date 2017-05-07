import { Component } from '@angular/core';

//import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
    id: string;
    commonname: string;
    latinname: string;
    narrative: string;
    moreinfo: string;
    thumb: any;
    photos: any;

  constructor(private navParams: NavParams) {
    this.id = navParams.get('id');
    this.commonname = navParams.get('commonname');
    this.latinname = navParams.get('latinname');
    this.narrative =navParams.get('narrative');
    this.moreinfo = navParams.get('moreinfo');
    this.thumb = navParams.get('thumb');
    this.photos = navParams.get('photos');
  }

}
