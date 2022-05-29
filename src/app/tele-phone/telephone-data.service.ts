import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelephoneDataService {
  link = window.location.hostname;
  constructor(private http:HttpClient) { }


  getTeleData(){
    let url = `http://${this.link}:3001/api-tele/`;     
    return this.http.get(url + 'telephone');
  }
// #region ipData
  getipData(){
    let url = `http://${this.link}:3001/api/ipData/`;     
    return this.http.get(url);
  }

  saveipData(newData){
    let returndata;
    let url = `http://${this.link}:3001/api/ipData/`;  

    if(newData._id){
      returndata = this.http.put(url, newData);
    }else{
      returndata = this.http.post(url, newData);
    }

    return returndata;
  }

  delipData(id){
    let url = `http://${this.link}:3001/api/ipData/`;  
    return this.http.delete(url + id)
  }
// #endregion ipData  

// #region custDailing
getcustDailing(){
  let url = `http://${this.link}:3001/api/custDailing/`;     
  return this.http.get(url);
}

getDailedByNo(find){
  let url = `http://${this.link}:3001/api/custDailing/find`;     
  return this.http.post(url, find);
}


savecustDailing(newData){
  let returndata;
  let url = `http://${this.link}:3001/api/custDailing/`;  

  if(newData._id){
    returndata = this.http.put(url, newData);
  }else{
    returndata = this.http.post(url, newData);
  }

  return returndata;
}

delcustDailing(id){
  let url = `http://${this.link}:3001/api/custDailing/`;  
  return this.http.delete(url + id)
}
// #endregion ipData 

}
