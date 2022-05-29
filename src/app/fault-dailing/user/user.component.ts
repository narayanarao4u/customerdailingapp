import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { FaultdataService } from '../faultdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
sdes:any;
user1 ="";
desgn ="";
hrno="";
sdca=[];
hideExchg=true;

  constructor(private ds:FaultdataService, 
              private toastr:ToastrService, 
              private router:Router) { }

  getSDEList(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    
    if(userData !== null) {
      this.user1 = userData["user1"]
      this.desgn = userData["desgn"]
      this.hrno = userData["hrno"]
      this.hideExchg1(this.desgn)
    }

    return this.ds.getFaultDataSDE().subscribe((res) => {      
      this.sdes = res["data"];
    })
  }

  regt(frmData){
                 
    if(this.user1.length <=4  ){
      this.toastr.warning("Name Min Length 5")
    } else if(this.hrno.length <8 || this.hrno.length > 9){
      this.toastr.warning("Enter valid HRNO")
    } else if(this.desgn.length <1){
      this.toastr.warning("Select Designation")      
    } else if(this.sdca.length == 0 && !this.hideExchg){
      this.toastr.warning("Select Exchange")
    } else {
      frmData['sdca'] = this.sdca;
     
      
      localStorage.setItem('userData', JSON.stringify(frmData));
      this.router.navigate(['/faultDailing'])
      
      
    }

  }

  checkChange(x){
    let sdca = this.sdca;
    if(sdca.indexOf(x) !== -1){       
       this.sdca.splice(sdca.indexOf(x),1)      
    } else
    {
      this.sdca.push(x)
     }
    
  }

  hideExchg1(desgn){
    let ACDesgn = ['JAO', 'AO', 'CAO', 'IFA','IVRS','PS'];
    let ifAC =ACDesgn.findIndex(e => e===desgn);
      if(ifAC>=0){
        this.hideExchg = true;        
    }
    else{
      this.hideExchg = false;
      console.log("false",ifAC,  this.hideExchg);
    }
  }
  selectionchange(e){
    
    let desgn = e.target.value;
    this.hideExchg1(desgn)
    
    

  }

  ngOnInit(): void {
    this.getSDEList()
    
  }

}
