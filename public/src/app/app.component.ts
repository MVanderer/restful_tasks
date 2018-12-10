import { Component, OnInit } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ['All the tasks','The third task'];
  long=false;
  tasks = [];
  constructor(private _taskService: TaskService){}
  
  ngOnInit(): void {
    console.log('hi');
    this.getTasksFromService();
  }

  getTasksFromService(){
    let tempObservable = this._taskService.getAllTasks();
    tempObservable.subscribe(data => {
      console.log("Here are the tasks: ", data);
      for (let i in data){
        this.tasks.push(data[i])
      }
      if (this.tasks.length>2){this.long=true}
      //this.tasks = data['tasks'];
      console.log(this.tasks);
    });
  }

}
