import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';

//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-salamander',
  templateUrl: 'salamander.html'
})
export class SalamanderPage {
  salamanderData: any;

  constructor(public dataService: DataService) {
    this.getSalamanderData();
  }

  getSalamanderData(){
    this.dataService.getJsonData().subscribe(data => {
      this.salamanderData = data.salamanders;
    });
  }
}
