import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoServiceService } from './service/to-do-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  todos: any = [];
  taskName: string = ''
  currentTime!: Date;

  constructor(private formBuilder: FormBuilder,
    private service: ToDoServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', Validators.required]
    });
    this.getTodos();
    setInterval(() => {
      this.currentTime = new Date();
    },1000);
  }

  onSubmit() {
    const data = {
      taskName: this.form.value.task,
      isCompleted: true
    }
    this.service.save(data).subscribe(_ => {
      this.getTodos()
    });
    this.form.reset();
  }

  getTodos() {
    this.service.getAll().subscribe((todos: any) => {
      this.todos = todos
      console.log(todos)
    });
  }

  // getTodosById(id: number) {
  //   this.service.get(id).subscribe((result: any) => {
  //     const resul = result
  //     console.log(resul),
  //       console.log('Done getting Todos by id')
  //   })
  // }

  onDelete(index: number) {
    this.service.delete(index).subscribe(_ => {
      alert("Successfully deleted")
      this.getTodos()
    })
  }

  OnDeleteAll() {
    this.service.deleteAll().subscribe(_ => {
      alert("Deleted all")
      this.getTodos()
    })
  }

  Oncheck(todo: any) {
    console.log(todo)
    this.service.update(todo.id, todo).subscribe(_ => {
      alert("Updated succesfully")
      this.getTodos()
    })
  }
}
