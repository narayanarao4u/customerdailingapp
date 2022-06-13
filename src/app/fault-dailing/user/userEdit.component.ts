import { Component, OnInit } from "@angular/core";
import { ToastrService } from "src/app/common/toastr.service";
import { FaultdataService } from "../faultdata.service";
import { userRow } from "./user";

@Component({
    selector:'useredit',
    templateUrl:'./userEdit.component.html',
    styleUrls:['./userEdit.component.css']
})

export class UserEditComponent implements OnInit{
    dataList:any;
    dataRow:userRow;

    constructor(
        private toastr:ToastrService,
        private ds:FaultdataService       
        ){}

    getList(): void {
        this.dataRow = new userRow();
        this.ds.getLink('api-user/user/').subscribe((res)=>{
            this.dataList = res['data'];
        })
    }
    
    addData(){
       
        return this.ds.saveUser(this.dataRow).subscribe(res => {       
          this.toastr.success('Update Success')
          this.dataRow = new userRow();
        }, err => {
          console.log(err)
          this.toastr.error( err.statusText )
        })  
      }

    edit(dataRow:userRow){
        this.dataRow = dataRow;
      }
    ngOnInit(): void {
        this.getList()
    }
}