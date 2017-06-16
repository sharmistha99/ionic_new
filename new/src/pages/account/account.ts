import { Component } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import 'rxjs/add/operator/map';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';


import { MainPage} from '../main/main';
import { HomePage } from '../home/home';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
   
  name:string = '';
  email:string = '';
  password:string = '';
  mobile:string ='';
  pincode:string ='';
  building:string ='';
  street:string ='';
  district:string ='';
  city:string ='';
  country:string ='';
  usertype:string ='';

constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: Http, public loadingCtrl:LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
       register(){

       let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      if( this.name === '' || this.password === '' || this.email === '' || this.mobile === ''|| this.pincode === ''|| this.building === ''|| this.street === ''|| this.district === ''|| this.city === ''|| this.country === '' || this.usertype === '')
      {
          let alert = this.alertCtrl.create({
              title:'Register Error',
              subTitle:'All fields are required',
              buttons:['OK']
          });
          alert.present();
          return;
         }
         
         


         let loader = this.loadingCtrl.create({
        content: "Registering your account...",
        duration: 300,
        dismissOnPageChange: true
        });
      loader.present();

       
       
       let data=JSON.stringify({username:"raja"});
       this.http.post("http://staging.euphern.com:8001/onelinkapp/registeruser/", data,headers)
       .map(res =>res.json())
       .subscribe(res => {
        let alert = this.alertCtrl.create({
              title:'Alert',
              subTitle:'success',
              buttons:['OK']
          });
          alert.present();
           this.navCtrl.push(HomePage);

        }, err => {
        let alert = this.alertCtrl.create({
              title:'Alert',
              subTitle:'failed',
              buttons:['OK']
          });
          alert.present();
          return;
       
        });
        
        
         
      
         }
      
}


