import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {Page1Page} from '../page1/page1';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public loadingCtrl: LoadingController,app: App, menu: MenuController) {

  }
  alertP(){
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
      }).present();
   }
   presentLoading1() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30,
      dismissOnPageChange: true
    }).present();
}
Loading() {
  this.navCtrl.push(Page1Page);
}
      

}
