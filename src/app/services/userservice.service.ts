import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
 
  user:User={}

  getprofile(){
    return this.http.get<User>(this.url +'profile')
  }
  updateprofile(user:User){
    return this.http.patch(this.url+'profile',user)
  }
}
