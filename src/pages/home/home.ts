import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpreadsheetData } from '../../providers/spreadsheet-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public spData:SpreadsheetData) {
    this.spData.fetchCountryData();
  }

}
