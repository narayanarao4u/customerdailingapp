import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaultdataService {
  link = window.location.hostname;
  //link ='117.239.146.106';
  port = '3001';
  // link ='bsnlvm.com';

  constructor(private http:HttpClient) { }

  getLink(params){
    let url = `http://${this.link}:${this.port}/${params}`;
    console.log(url);

    return this.http.get(url);
  }

  getFaultDataSDE(){
    let url = `http://${this.link}:${this.port}/api-faultData/distSDE/`;
    return this.http.get(url);
  }

  getExCode(data:any,type,desgn){
    let url = `http://${this.link}:${this.port}/api-faultData/distExch/${type}/${desgn}`;
    return this.http.post(url, data);
  }

  getdaillist(ExCode: any, type, desgn){
    let url = `http://${this.link}:${this.port}/api-faultData/daillist/${ExCode}/${type}/${desgn}`;
    return this.http.get(url);
  }

  getdaillistIVRS(ExCode:any, type){
    let url = `http://${this.link}:${this.port}/api-faultData/daillist/${ExCode}/${type}`;
    return this.http.get(url);
  }

  getansList(field: any, Code: any, type:any){
    let url = `http://${this.link}:${this.port}/api-faultData/ansList/${field}/${Code}/${type}`;
    return this.http.get(url);
  }

  getansweredTotal(field, type){
    let url = `http://${this.link}:${this.port}/api-faultData/answeredTotal/${field}/${type}`;
    return this.http.get(url);
  }

  getansweredTotal2(field){
    let url = `http://${this.link}:${this.port}/api-faultData2/answeredTotal/${field}`;
    return this.http.get(url);
  }

  getUserSummary(type){
    let url = `http://${this.link}:${this.port}/api-faultData/UserSummary/${type}`;
    return this.http.get(url);
  }

  getexch_ctrl_phone(){
    let url = `http://${this.link}:${this.port}/api-tele/exch_ctrl_phone`;
    return this.http.get(url);
  }

  getUserData(hrno){
    let url = `http://${this.link}:${this.port}/api-user/user/${hrno}`;
    return this.http.get(url);
  }


  saveUser(newData){
    var returndata;
    let url = `http://${this.link}:${this.port}/api-user/user/`;

    if(newData._id){
      returndata = this.http.put(url, newData);
    }else{
      returndata = this.http.post(url, newData);
    }

    return returndata;
  }

  saveData(newData){
    var returndata;
    let url = `http://${this.link}:${this.port}/api-faultData/`;

    if(newData._id){
      returndata = this.http.put(url, newData);
    }else{
      returndata = this.http.post(url, newData);
    }

    return returndata;
  }

  colorSetting(){
    let mysetting = {
      colorR : {
        'Wkg - Satisfactory':'green',
        'Bill Paid':'green',
        'Agreed to Pay Bill':'green',
        
        'Wkg - Not Satisfactory':'red',
        'Unwilling - Service Issue':'red',
        'Unwilling - Billing Issue':'red',
      
        'Not Answered':'blue',
      
        'Number Closed':'grey',
        'Others':'grey',


        'Fault Attended - Satisfied':'green',  
        'Fault Attended - Not Satisfied':'orange', 
        'Fault Not Attended':'red'
      }
    }
    return mysetting
  }


}
