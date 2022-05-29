import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { TelephoneDataService } from '../../tele-phone/telephone-data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
dataRow:any;

  constructor(private ds:TelephoneDataService, private route:ActivatedRoute,
          private toastr:ToastrService) { }

  getData(){    
    return this.ds.getcustDailing().subscribe(res => {   
      this.dataRow = res['data'].sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
      console.log(this.dataRow);      
    }, err => {
      console.log(err)
      this.toastr.error( err.statusText )
    })
  }

  getDataPhone(){
    let phone = {phone:this.route.snapshot.params['phone']}  
    console.log(phone);
      
    return this.ds.getDailedByNo(phone).subscribe(res => {   
      this.dataRow = res['data'].sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
      console.log(this.dataRow);      
    }, err => {
      console.log(err)
      this.toastr.error( err.statusText )
    })
  }
  ngOnInit(): void {
    this.getDataPhone()
  }

}
