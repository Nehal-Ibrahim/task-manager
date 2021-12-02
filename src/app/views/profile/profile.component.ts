import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userModel';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }
  user:User={}
  
getdata(){
  this.userservice.getprofile().subscribe({
    next:(res:any)=>{
      console.log(res)
      this.user=res
    }
  })
}
  ngOnInit(): void {
    this.getdata()
  }

}
