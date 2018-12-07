import { Component, OnInit } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  num: number;
  constructor(private _taskService: TaskService){}
  
  ngOnInit(): void {
    console.log('hi');
    this.num = 7;
  }

}
