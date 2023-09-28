import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  apiURL:any="https://reqres.in/api/users";
  
  getUsersInfo():Observable<any>
  {
    return this.httpClient.get(this.apiURL);
  }


  getSingleUser(userId:any):Observable<any>
  {
    return this.httpClient.get(this.apiURL+"/"+userId);
  }


  adduser(data:any):Observable<any>
  {
    console.log(data)
    const headers={'content-type':'application/json'}
    let userObj=JSON.stringify(data);
    return this.httpClient.post(this.apiURL,userObj,{'headers':headers});
  }


  updateUserUsingPUT(data:any,id:any):Observable<any>
  {
    const headers={'content-type':'application/json'}
    let userObj=JSON.stringify(data);
    return this.httpClient.put(this.apiURL+"/"+id,userObj,{'headers':headers})
  }

  updateUserUsingPATCH(data:any,id:any):Observable<any>
  {
    const headers={'content-type':'application/json'}
    let userObj=JSON.stringify(data);
    return this.httpClient.patch(this.apiURL+"/"+id,userObj,{'headers':headers})
  }

  deleteUser(id:any):Observable<any>
  {
    return this.httpClient.delete(this.apiURL+"/"+id);
  }



}
