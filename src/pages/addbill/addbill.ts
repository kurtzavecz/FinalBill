import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormControl} from '../../../node_modules/@angular/forms';
import { Bill } from '../../models/bill';
import { AddService } from '../../services/add';

@IonicPage()
@Component({
  selector: 'page-addbill',
  templateUrl: 'addbill.html',
})
export class AddbillPage {
  billForm: FormGroup;
  bill: Bill;
  index: number;


  constructor(private navParams: NavParams, private navCtrl: NavController, private addService: AddService) {
  }

  onGoToBills() {
    this.navCtrl.parent.select(0);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbillPage');
  }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    const value = this.billForm.value;

    this.addService.addBill(value.bill, value.amount);
    
    this.billForm.reset();
    this.navCtrl.parent.select(0);
  }

  private initializeForm() {
    let bill = null;
    let amount = null;


    this.billForm = new FormGroup({
      'bill': new FormControl(bill, Validators.required),
      'amount': new FormControl(amount, Validators.required)
    });

  }
}