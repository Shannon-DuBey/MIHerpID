import { Component } from '@angular/core';
import { DataService } from '../../providers/data-service';

//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-snake',
  templateUrl: 'snake.html'
})
export class SnakePage {
  snakeData: any;

  constructor(public dataService: DataService) {
    this.getSnakeData();
  }

  getSnakeData(){
    this.dataService.getJsonData().subscribe(data => {
      this.snakeData = data.snakes;
    });
  }

}
