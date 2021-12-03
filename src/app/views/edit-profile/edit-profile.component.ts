import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userModel';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userservice:UserserviceService , private router:Router) { }
  file:any
  user:User={}
  getuser(){
    this.userservice.getprofile().subscribe({
      next:(res:any)=>{
        console.log(res)
      }
    })
  }
  updateuser(user:User){
    this.userservice.updateprofile(user).subscribe({
      next:()=>{
        this.router.navigate(['/profile'])
        this.uploadfile()
        
      }
    })
  }
  handleupload(event:any){
    console.log(event.target.files)
    this.file=event.target.files
  }
  uploadfile(){
    const myData=new FormData()
    for(let i=0;i<this.file.length;i++){
      myData.append('avatar',this.file[i])

    }
    this.userservice.addImage(myData).subscribe(()=>{})
  }

  ngOnInit(): void {
    this.getuser()
  }

}
