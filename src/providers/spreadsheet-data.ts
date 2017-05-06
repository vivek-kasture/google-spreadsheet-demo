import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class SpreadsheetData {
  items:any;
  url:string = 'https://script.googleusercontent.com/a/macros/techjoomla.com/echo?user_content_key=J2PM89kdIWllq7Wg4hW7GF6Y8DxxDKgvysbmJ0cLK2i1SrMG45qco9ry19wTJ57Y0AoT2ZZBme9exPsyLiV7V9461DThGQbpOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKCCQtwYZJ0MJkSGypRR1KYgaAD8aA7uc1eb0hs6KxpE3qCOQzFD0cBuzUDk9cDRPqYoTCVgJ0QpfwOHmlAPz0KyvgAoLqOop5o3u3fl3qbN0V_DaAgoCAscqYqhmgVPwONYUakQOC0lrpZRFEDMtVFY7ZvG_5YdtxznLsUuo5XROTbsHxGHhAlN&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx';
  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello SpreadsheetData Provider');
  }

  fetchCountryData(){
    let loading = this.loadingCtrl.create({
    content: 'Please wait'
  });
  loading.present();
    this.http.get(this.url).map(res => res.json()).subscribe(
      data =>{
          this.items = data.Sheet1;
          setTimeout(() => {
            loading.dismiss();
          },800);
      },
      error =>{
        console.log("DATA"+this.items);
      }
    );
  }
}
