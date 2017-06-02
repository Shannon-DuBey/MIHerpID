import { Component } from '@angular/core';

//import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {
    itemToShow: string;
    itemName: string;
    category: string;
    itemType: string;
    isAudio: boolean;
    isPhoto: boolean;

    constructor(private navParams: NavParams, public viewCtrl: ViewController) {
      this.itemToShow = navParams.get('item');
      this.itemName = navParams.get('itemName');
      this.itemType = navParams.get('itemType');
      this.category = navParams.get('category');

      if (this.itemType == 'sound') {
        this.isAudio = true;
      } else {
        this.isPhoto = true;
      }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
