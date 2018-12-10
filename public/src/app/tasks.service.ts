import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http:HttpClient) {
    this.getOneTask("5c094b2775c04ac5004f5820");
  }

  getAllTasks(){
    return this._http.get('/tasks');
  }

  getOneTask(id){
    let tempObservable = this._http.get(`/tasks/${id}`);
    tempObservable.subscribe(data => console.log(`Here is the tasks you asked for: `, data));
  }

  
}
