import { Directive, OnInit, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import { TaskService } from './task.service';

@Directive({
  selector: '[aaTask]',
  standalone: true,
})
export class TaskDirective implements OnInit {
  control = inject(NgControl);
  taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.tasks.subscribe((response) => console.log('yep', response));
  }
}
