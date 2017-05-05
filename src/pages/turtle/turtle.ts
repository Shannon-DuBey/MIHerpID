import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';

//import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-turtle',
  templateUrl: 'turtle.html'
})
export class TurtlePage {
  turtleData: any;

  constructor(public dataService: DataService) {
    this.getTurtleData();


  }

  getTurtleData(){
    this.dataService.getJsonData().subscribe(data => {
      this.turtleData = data.turtles;
      //console.log(this.turtleData);
      this.echoData();
    });
  }

  echoData(){
    console.log(this.turtleData);
  }
}
