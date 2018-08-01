import { Injectable } from "@angular/core";
import 'rxjs/Rx';

import { Bill } from "../models/bill";

@Injectable()
export class AddService {
    private addbill: Bill[] = [];

    constructor() { }

    addBill(bill: string,
        amount: number) {
        this.addbill.push(new Bill(bill, amount));
        console.log(this.addbill);
    }

    getBill() {
        return this.addbill.slice();
    }

    updateBill(index: number,
        bill: string,
        amount: number) {
        this.addbill[index] = new Bill(bill, amount);
    }

    removeBill(index: number) {
        this.addbill.splice(index, 1);
    }

    
}
