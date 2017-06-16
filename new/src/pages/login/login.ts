import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AccountPage } from '../account/account';

import { MainPage } from '../main/main';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 showLogin:boolean = true;
  username:string = '';
  password:string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  sign(){

      if(this.username === '' || this.password === '') {
        let alert = this.alertCtrl.create({
          title:'Login Error', 
          subTitle:'All fields are rquired',
          buttons:['OK']
        });
        alert.present();
        return;
      }     


    let loader = this.loadingCtrl.create({
        content: "Logging in...",
        duration: 300
      });
      loader.present();

   console.log('ok');
        loader.dismissAll();
        this.navCtrl.setRoot(MainPage);                
      }
	  

    onclick(){
    this.navCtrl.push(AccountPage);
    }
 }



