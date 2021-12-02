import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Tasks[]=[]
  constructor(private taskservice:TaskService ,private route:ActivatedRoute) { }
  task:Tasks={}
  _id:string=this.route.snapshot.params['id']

  getAlltasks(){
    this.taskservice.getAlltasks().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.tasks=res
      }
    })
  }
  deleteTask(task:Tasks){
    this.taskservice.deleteTask(task._id).subscribe({
      next:()=>{
        let index=this.tasks.indexOf(task)
        this.tasks.splice(index,1)
      }
    })
  }

  getsingletask(){
    this.taskservice.getsingletask(this._id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.task=res
      }
    })
  }
  updateTask(task:Tasks){
    this.taskservice.updateTask(this._id,task).subscribe(()=>{})
  }

  ngOnInit(): void {
    this.getAlltasks()
    this.getsingletask()
  }

}
