import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the Page1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }
  presentLoading1() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 30,
      dismissOnPageChange: true
}).present();
   }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
