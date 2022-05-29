import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { FaultdataService } from '../faultdata.service';

@Component({
  selector: 'app-action-taken',
  templateUrl: './action-taken.component.html',
  styleUrls: ['./action-taken.component.css']
})
export class ActionTakenComponent implements OnInit {
  PHONE_NO:any;
  id:any;
  data:any;
  row:any;
  actionTaken:any;
  userData:any;

  constructor(private ds:FaultdataService, private route:ActivatedRoute,   
     private router:Router, private toastr:ToastrService ) { }

  checkUserData(){
    let userData = JSON.parse(localStorage.getItem('userData'));
   
    if(userData !== null) {
      // this.showuserdata = false;
      this.userData = userData;                    
      if(!this.userData.hrno){        
        this.router.navigate(['/user'])   
      }
    }else{
      // this.showuserdata = true;   
      this.router.navigate(['/user'])   
    }
    
  }

  getData(){
    let link = `api-faultData/find/PHONE_NO/${this.PHONE_NO}`;
    return this.ds.getLink(link).subscribe((res)=>{
     this.data =  res['data'];
     console.log(this.data);
     this.data.forEach(element => {
       if(element._id === this.id)
       {
         this.row = element;
       }
     }); 
     console.log(this.row);
     
      
    })

  }

  submit(){
    let action ={}
     action['User'] = this.userData["user1"] + ", " + this.userData["desgn"];
     action['hrno'] = this.userData['hrno']; 
     action['action'] = this.actionTaken; 

     if(!!this.row['actionTaken']){
        console.log("true");        
        this.row['actionTaken'].push(action)
     }
     else{
        console.log("false");
        this.row['actionTaken'] = [action] 
     }
       

      return this.ds.saveData(this.row).subscribe(res => {       
       console.log(res);
       
        this.toastr.success('Update Success')        
        this.row = null;
        this.actionTaken = null
        this.getData()
      })  

    }


  ngOnInit(): void {
    this.checkUserData()
    this.route.params.subscribe((Params) => {
      this.PHONE_NO = Params['PHONE_NO'];
      this.id = Params['id'];      
    });

    this.getData()
  }

}

