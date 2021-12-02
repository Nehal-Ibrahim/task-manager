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

  constructor(private taskservice:TaskService , private route:ActivatedRoute) { }
  task:Tasks={}
updateTask(task:Tasks){
    this.taskservice.updateTask(task._id,task).subscribe({
      next:()=>{
       
      }

    })
  }

  ngOnInit(): void {
  }

}
