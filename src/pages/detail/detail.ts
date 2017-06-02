import { Component } from '@angular/core';

//import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

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

    hasVoice: boolean;
    hasMedia: boolean;
    hasHabits: boolean;
    hasStatus: boolean;

    voice: string;
    media:any;
    habits: string;
    status: string;

  constructor(private navParams: NavParams, public modalCtrl: ModalController) {
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


    this.hasVoice = false;
    this.hasStatus = false;

    if (this.type == 'frog'){
      this.hasVoice = true;
      this.voice = navParams.get('voice');
      this.media = navParams.get('media');
    } else if (this.type == 'salamander'){

      if (this.id == 'Ambystomatexanum') {
        this.status = navParams.get('status');
        this.hasStatus = true;
      }
    }

  }

  openModal(item, category, itemType, itemName) {
    let obj = {item: item, category: category, itemType: itemType, itemName: itemName};
    let myModal = this.modalCtrl.create(ModalPage, obj);
    myModal.present();
  }

  modalLaunch(fileName) {
    console.log('file: ' + fileName);
  }

  zoomImage(photo) {
    console.log('photo: ' + photo);
  }
}
