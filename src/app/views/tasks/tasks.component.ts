import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/taskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Tasks[]=[]
  constructor(private taskservice:TaskService) { }

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

  ngOnInit(): void {
    this.getAlltasks
  }

}
