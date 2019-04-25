import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { DataService } from './services/data-service';

import { AboutPage } from './about/about';
import { ContactPage } from './contact/contact';
import { HomePage } from './home/home';
import { TabsPage } from './tabs/tabs';
import { ModalPage } from './modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* App pages */
import { FrogPage } from './frog/frog';
import { TurtlePage } from './turtle/turtle';
import { SalamanderPage } from './salamander/salamander';
import { SnakePage } from './snake/snake';
import { DetailPage } from './detail/detail';

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
    BrowserModule,
    HttpModule,
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
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
