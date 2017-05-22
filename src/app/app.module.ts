import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DataService } from '../providers/data-service';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

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
    FrogPage,
    TurtlePage,
    SalamanderPage,
    SnakePage,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FrogPage,
    TurtlePage,
    SalamanderPage,
    SnakePage,
    DetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataService]
})
export class AppModule {}
