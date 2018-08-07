import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.css']
})
export class PaytmComponent implements OnInit {
  company:String;
  actualAmt:Number;
  paidAmt:Number;
  dateAndTime:Date;
  constructor() { 
    this.company = "n square";
    this.paidAmt = 7000;
    this.actualAmt = 10000;
    this.dateAndTime = new Date();
  }

  ngOnInit() {
  }

}
