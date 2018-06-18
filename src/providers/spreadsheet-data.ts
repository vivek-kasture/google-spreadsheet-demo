import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class SpreadsheetData {
  items:any;
  url:string = 'https://script.googleusercontent.com/macros/echo?user_content_key=slEel99gkNDp84RKKoq21rMZH53Ub09v0yjAOpXRRH5bgg09D0KDIhf0SzLp9bItSWVWhE31mj4OzAjEZl4quo_VZ_OwRcKcOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa62MuRIn2j5QbUzniW0sf06jnq_Ay3QVlLuOyaHCp5SMwRiHnxlG9e9vT7K2vRYzpbC7lNum4H1JN7t35d6mzdFfw2gIKAgLHKmKoZoFT8DjWFGpEDgtJa6WURRAzLVRWO2bxv-WHbcc5y7FLqOV0Tk27B8Rh4QJTQ&lib=Mu_7H1n57aUJw8R0L50Ok_4igttXMoMPk';
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
