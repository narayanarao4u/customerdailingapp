import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { FaultdataService } from '../faultdata.service';

@Component({
  selector: 'app-ivrscompalints',
  templateUrl: './ivrscompalints.component.html',
  styleUrls: ['./ivrscompalints.component.css']
})
export class IvrscompalintsComponent implements OnInit {
  daillist :any;
  customer : any;
  userData:any;
  term:string;
  constructor(private ds:FaultdataService, private router:Router, private toastr:ToastrService) { }

  checkUserData(){
    let userData = JSON.parse(localStorage.getItem('userData'));

    if(userData !== null) {      
      this.userData = userData; 
      this.getdata()                 
    }
    else{
           this.router.navigate(['/user'])
    }
    
  }

  getdata(){
    return this.ds.getdaillistIVRS('ivrs','ivrs').subscribe((res) =>{
      this.daillist = res['data']
    })
  }

  loaddata(x){
      
    this.customer = x;    
    this.customer.Answered = true;
    // this.customer.feedback = '';
    
  }

  submit(){
    this.customer.User = this.userData["user1"] + ", " + this.userData["desgn"] ;

    if(this.customer['Answered'] == false ) {
      this.toastr.warning("Please tick Answered")
    } else if( this.customer['feedback'].length <= 5) {
      this.toastr.warning("Length min 5")
    } else {
      console.log(this.customer);
      return this.ds.saveData(this.customer).subscribe(res => {       
        this.toastr.success('Update Success')        
        this.customer = null;
        this.getdata()
        
      })  

    }
}
  ngOnInit(): void {
    this.checkUserData()
  }

}
