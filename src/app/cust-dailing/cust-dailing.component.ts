import { Component, OnInit } from '@angular/core';
import { TelephoneDataService } from '../tele-phone/telephone-data.service';
import { custDailing } from './custDailing';

declare let toastr;
@Component({
  selector: 'app-cust-dailing',
  templateUrl: './cust-dailing.component.html',
  styleUrls: ['./cust-dailing.component.css']
})
export class CustDailingComponent implements OnInit {
dataRow:custDailing;
user:string;
phone:number;

  constructor(private ds: TelephoneDataService) { }

  addData(){
    this.dataRow.user = this.user;
    this.dataRow.phone = this.phone;
    return this.ds.savecustDailing(this.dataRow).subscribe(res =>{  
      console.log(res);    
      toastr.success('Update Success')      
      this.dataRow = new custDailing;
    })
  }




  ngOnInit(): void {
    this.dataRow = new custDailing;       

  }

}
