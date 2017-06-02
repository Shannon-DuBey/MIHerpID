import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataService } from '../providers/data-service';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';

/* App pages */
import { FrogPage } from '../pages/frog/frog';
import { TurtlePage } from '../pages/turtle/turtle';
import { SalamanderPage } from '../pages/salamander/salamander';
import { SnakePage } from '../pages/snake/snake';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalPage,
    FrogPage,
    TurtlePage,
    SalamanderPage,
    SnakePage,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalPage,
    FrogPage,
    TurtlePage,
    SalamanderPage,
    SnakePage,
    DetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService]
})
export class AppModule {}
