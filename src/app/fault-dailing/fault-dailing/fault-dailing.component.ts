import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from '../../common/toastr.service';
import { FaultdataService } from '../faultdata.service';
import { MsgboxComponent } from '../msgbox/msgbox.component';

@Component({
  selector: 'app-fault-dailing',
  templateUrl: './fault-dailing.component.html',
  styleUrls: ['./fault-dailing.component.css']
})
export class FaultDailingComponent implements OnInit {
  userData:any;
  // showuserdata = true;
  exCodes:any;
  daillist :any;
  customer : any;
  type = "fault";
  exgPhone:any;
 

  exchgSelected="";
  closeResult = '';

  remarksopt = {
    fault:['Wkg - Not Satisfactory','Number Closed', 'Wkg - Satisfactory','Update Mobile No'],
    ogbar:['Unwilling - Service Issue',  'Unwilling - Billing Issue', 'Bill Paid', 'Agreed to Pay Bill', 'Update Mobile No','Others'],
    susnp:['Unwilling - Service Issue',  'Unwilling - Billing Issue', 'Bill Paid', 'Agreed to Pay Bill', 'Update Mobile No','Others'],
    Cfault:['Fault Attended - Satisfied',  'Fault Attended - Not Satisfied', 'Fault Not Attended']
  }


  constructor(private ds:FaultdataService, 
    private toastr:ToastrService, 
    private router:Router,
    private modalService:NgbModal) { }

    colorR = this.ds.colorSetting().colorR

  checkUserData(){
    let userData = JSON.parse(localStorage.getItem('userData'));

    let ivrsUsers = ['S Dhilleswara Rao','K N Begum']
   
    if(userData !== null) {
      // this.showuserdata = false;
      this.userData = userData;               
      if(ivrsUsers.includes(this.userData["user1"])){
        this.router.navigate(['/ivrscomplaints'])
      } else {
        this.getExcode()
      }
      console.log(!this.userData.hrno);
      
      if(!this.userData.hrno){
        // alert('Enter Hrno in Registration form')
        this.openMsgBox('Enter Hrno in Registration form');
        this.router.navigate(['/user'])   
      }
    }else{
      // this.showuserdata = true;   
      this.router.navigate(['/user'])   
    }
    
  }

  getExcode(){
    let data = this.userData['sdca']      
    return this.ds.getExCode(data,this.type,this.userData["desgn"]).subscribe((res) => { 
      this.exCodes = res["data"];
    })
  }

  exchgSelect(){
    let ExCode =this.exchgSelected;
    this.ds.getdaillist(ExCode,this.type,this.userData["desgn"]).subscribe((res) => { 
      this.daillist = res["data"];
    })

    this.ds.getexch_ctrl_phone().subscribe((res)=> {
       let exgPhone = res['tele'].find(x=> x.exg === ExCode)
       this.exgPhone = exgPhone
    })

  }

  loaddata(x,content){    
    this.customer = x;    
    this.customer.Answered = false;
    this.customer.feedback = '';
    /*
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
      })();
    */

   this.ds.updateDailed(x._id).subscribe((res) => { 
    x['dailed']=res['data']['dailed']
  })

   this.openfeedback(content)

   
  }

  submit(){
      this.customer.User = this.userData["user1"] + ", " + this.userData["desgn"];
      this.customer['hrno'] = this.userData['hrno']; 
      this.customer['Answered'] = true

      if(!this.customer['remarks'] ) {
        this.toastr.warning("select Remarks")
      } 
      // else if( this.customer['feedback'].length <= 5) {
      //   this.toastr.warning("Length min 5")
      // } 
      else {
        console.log(this.customer);
        return this.ds.saveData(this.customer).subscribe(res => {       
          this.toastr.success('Update Success')
          this.exchgSelect()
          this.customer = null;
        })  

      }
  }

  handleChange($event){
    this.type = $event;
    this.exchgSelected = "";
    this.getExcode()
    this.daillist = null;    
  }

  openMsgBox(msg){
    const msgbox = this.modalService.open(MsgboxComponent);
    msgbox.componentInstance.message = msg
  }

  openfeedback(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log(this.closeResult);

          if(result==='save'){
            this.submit()
          } else if(result==='cancel') {
            this.exchgSelect()
          }
          
          
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  serviceType(Service_Type){
    if(Service_Type.includes('Bharat Fiber')) return 'FTTH'
    
    return Service_Type
  }  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.checkUserData()
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log("mobile device");      
     
    }else{
      // false for not mobile device      
      console.log("Not mobile device");
    }
  }

}
