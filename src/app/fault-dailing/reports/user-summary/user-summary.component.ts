import { Component, OnInit } from '@angular/core';
import { FaultdataService } from '../../faultdata.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
type = "fault"; 
data:any;
  constructor(private ds:FaultdataService) { }
getData(){
  return this.ds.getUserSummary(this.type).subscribe((res)=>{
    this.data = res['data']
  })
}

totalAns(){
  return this.data.map(x=>x.count).reduce((a,b)=>a+b,0);
}

handleChange($event){
  this.type = $event;
  this.getData()
     

}


  ngOnInit(): void {
    this.getData()
   
    
    
  }

}
