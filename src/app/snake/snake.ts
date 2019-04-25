import { Component } from '@angular/core';
import { DataService } from '../services/data-service';
import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-snake',
  templateUrl: 'snake.html'
})
export class SnakePage {
  snakeData: any;
  snakeName: string;
  thumb: any;

  constructor(public navCtrl: NavController, public dataService: DataService) {
    this.getSnakeData();
  }

  getSnakeData(){
    this.dataService.getJsonData().subscribe(data => {
      this.snakeData = data.snakes;
    });
  }

  snakeSelected(snake) {
    this.thumb = "snakePhotos/" + snake.thumb;
    this.navCtrl.push(DetailPage, {
      type: 'snake',
      id: snake.id,
      commonname: snake.commonname,
      latinname: snake.latinname,
      identification: snake.identification,
      habitat: snake.habitat,
      breeding: snake.breeding,
      range: snake.range,
      moreinfo: snake.moreinfo,
      thumb: this.thumb,
      photos: snake.photos
    });
  }

}
