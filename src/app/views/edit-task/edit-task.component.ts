import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskservice:TaskService , private route:ActivatedRoute , private router:Router) { }
  task:Tasks={}
  id:string=this.route.snapshot.params['id']
  getsingletask(){
    this.taskservice.getsingletask(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.task=res
      }
    })
  }
updateTask(task:Tasks){
    this.taskservice.updateTask(this.id,task).subscribe({
      next:(res:any)=>{
        this.task=res
        this.router.navigate(['/tasks'])
       
      }

    })
  }

  ngOnInit(): void {
    this.getsingletask()
  }

}
