import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';

/* App pages */
import { FrogPage } from '../frog/frog';
import { TurtlePage } from '../turtle/turtle';
import { SalamanderPage } from '../salamander/salamander';
import { SnakePage } from '../snake/snake';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})
export class HomePage {
  TurtlePage = TurtlePage;
  FrogPage = FrogPage;
  SalamanderPage = SalamanderPage;
  SnakePage = SnakePage;

  constructor(public navCtrl: NavController, public dataService: DataService) {

  }

}
