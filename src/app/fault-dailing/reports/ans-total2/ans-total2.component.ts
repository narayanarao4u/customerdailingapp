import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaultdataService } from '../../faultdata.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-ans-total2',
  templateUrl: './ans-total2.component.html',
  styleUrls: ['./ans-total2.component.css'],
})
export class AnsTotal2Component implements OnInit {
  data: any;
  field: any;
  fileName= 'CustomerDailing.xlsx';

  constructor(private ds: FaultdataService, private route: ActivatedRoute) {}
  getData() {
    return this.ds.getansweredTotal2(this.field).subscribe((res) => {

      let rows = res['data'];
      rows.forEach((row) => {
        row.items.forEach((item) => {
          row[item.type] = item.ans;
        });
      });
      
      this.data = rows
    });
  }

  pivot1(item) {
    console.log(item);

    let r = {};
    item.forEach((e) => {
      r[e.type] = e.ans;
    });
    return r;
  }
  total(x){
    let result = 0 
       
    if(+x.fault >0 ){
      result  = result + (+x.fault)
      
     }
     if(+x.ogbar >0 ){
      result  = result + (+x.ogbar)
     }
     if(+x.susnp >0 ){
      result  = result + (+x.susnp)
     }
    return result;
  }
  btnClicked(data){
    console.log(data);
    

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
    this.route.params.subscribe((Params) => {
      this.field = Params['field'];
      this.getData();
    });
  }
}
