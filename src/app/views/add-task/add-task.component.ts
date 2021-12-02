import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskservice:TaskService , private router:Router) { }
  task:Tasks={}
  addTask(task:Tasks){
    this.taskservice.addTask(task).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.task=res
        this.router.navigate(['/tasks'])

      }
    })

  }

  ngOnInit(): void {
  }

}
