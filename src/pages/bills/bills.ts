import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bill } from '../../models/bill';
import { AddService } from '../../services/add';

@IonicPage()
@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html',
})
export class BillsPage {
  bills: Bill[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private addService: AddService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillsPage');
  }

  ionViewWillEnter() {
    this.bills = this.addService.getBill();
  }

  

}
