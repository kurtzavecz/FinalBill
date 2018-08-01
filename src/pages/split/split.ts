import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Bill } from '../../models/bill';
import { AddService } from '../../services/add';

/**
 * Generated class for the SplitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-split',
  templateUrl: 'split.html',
})
export class SplitPage {
  bill: Bill[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private addService: AddService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitPage');
  }

  ionViewWillEnter() {
    this.bill = this.addService.getBill();
  }

  


}
