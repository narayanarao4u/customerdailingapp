import { Component, OnInit } from '@angular/core';
import { ipData } from './ipData';
import { TelephoneDataService } from '../tele-phone/telephone-data.service';
import { ToastrService } from '../common/toastr.service';


@Component({
  selector: 'app-ipdata',
  templateUrl: './ipdata.component.html',
  styleUrls: ['./ipdata.component.css']
})
export class IpdataComponent implements OnInit {

  dataList:any;
  dataRow:ipData;

  constructor(private ds: TelephoneDataService, private toastr:ToastrService) { }

  getlist(){
    this.dataRow = new ipData();
    return this.ds.getipData().subscribe(res => {           
      this.dataList = res
      this.dataList.data = this.dataList.data.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
    }, err => {
      console.log(err)
      this.toastr.error( err.statusText )
    })
  }

  addData(){
       
    return this.ds.saveipData(this.dataRow).subscribe(res => {       
      this.toastr.success('Update Success')
    }, err => {
      console.log(err)
      this.toastr.error( err.statusText )
    })  
  }

  edit(dataRow:ipData){
    this.dataRow = dataRow;
  }

  ngOnInit(): void {
   this.getlist()
    
  }

}
