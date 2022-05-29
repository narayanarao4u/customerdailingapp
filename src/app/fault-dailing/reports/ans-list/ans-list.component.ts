import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaultdataService } from '../../faultdata.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-ans-list',
  templateUrl: './ans-list.component.html',
  styleUrls: ['./ans-list.component.css']
})
export class AnsListComponent implements OnInit {
  data:any;
  Code:any;
  field:any;
  type = "fault";
  /*name of the excel-file which will be downloaded. */ 
fileName= 'CustomerDailing.xlsx';


colorR = {
  'Wkg - Satisfactory':'green',
  'Bill Paid':'green',
  'Agreed to Pay Bill':'green',
  
  'Wkg - Not Satisfactory':'red',
  'Unwilling - Service Issue':'red',
  'Unwilling - Billing Issue':'red',

  'Not Answered':'blue',

  'Number Closed':'grey',
  'Others':'grey'
}

public showAll: any = false;

  constructor(private ds:FaultdataService, private route:ActivatedRoute) { }

  triggerReadMore() {
    this.showAll = !this.showAll;
 }

getData(){
  // console.log(this.field, this.Code, this.type);
  
  return this.ds.getansList(this.field, this.Code, this.type).subscribe((res)=>{
    this.data = res['data']
  })
}

exportexcel(): void 
    {
      
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);			
    }

  

  ngOnInit(): void {
    this.Code = this.route.snapshot.params['Code']  
    this.field = this.route.snapshot.params['field']  
    this.type = this.route.snapshot.params['type'] 
    this.getData()
  }

}
