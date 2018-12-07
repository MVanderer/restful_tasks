import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http:HttpClient) {
    this.getAllTasks();
    this.getOneTask("5c094b2775c04ac5004f5820");
  }

  getAllTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Here are the tasks: ", data));
  }

  getOneTask(id){
    let tempObservable = this._http.get(`/tasks/${id}`);
    tempObservable.subscribe(data => console.log(`Here is the tasks you asked for: `, data));
  }

  
}
