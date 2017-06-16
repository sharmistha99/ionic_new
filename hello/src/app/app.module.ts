import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { Page1Page } from '../pages/page1/page1';

import { MenuPage } from '../pages/menu/menu';
import { ModalsPage} from '../pages/modals/modals';
import { LoadingPage} from '../pages/loading/loading';
import { InputsPage } from '../pages/inputs/inputs';
import {AlertsPage  } from '../pages/alerts/alerts';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AlertsPage,
    InputsPage,
    LoadingPage,
    ModalsPage,
    MenuPage,
    Page1Page 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlertsPage,
   InputsPage,
   LoadingPage,
   ModalsPage,
   MenuPage,
   Page1Page 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
