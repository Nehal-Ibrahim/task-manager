import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from '../interfaces/taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url='http://localhost:3000'

  constructor( private http:HttpClient) { }
  getAlltasks(){
    return this.http.get<Tasks>(this.url+'tasks')
  }
  addTask(task:Tasks){
    return this.http.post(this.url+'tasks', task)
  }
  deleteTask(id:any){
    return this.http.delete(this.url+'tasks/'+id)
  }
  getsingletask(id:any){
    return this.http.get<Tasks>(this.url+'tasks/'+id)
  }
  updateTask(id:any, task:Tasks){
    return this.http.patch(this.url+'tasks/'+id,task)
  }

}
