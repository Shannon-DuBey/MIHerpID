import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';

//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-frog',
  templateUrl: 'frog.html'
})
export class FrogPage {
  frogData: any;

  constructor(public dataService: DataService) {
    this.getFrogData();
  }

  getFrogData(){
    this.dataService.getJsonData().subscribe(data => {
      this.frogData = data.frogs;
    });
  }

}
