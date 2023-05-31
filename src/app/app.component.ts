import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [
    { name: 'Tarea 1', completed: false }
  ];

  filteredTasks = this.tasks;

  applyFilter(filter: string) {
    if (filter === 'todo') {
      this.filteredTasks = this.tasks;
    } else if (filter === 'completadas') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (filter === 'incompletas') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }
}
