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

  constructor(private formBuilder: FormBuilder,
    private service: ToDoServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      task: ['', Validators.required]
    });
    this.getTodos();
    // this.getTodosById();
    // this.ngOnChanges(1);
    // this.onSubmit();
    // this.onDelete(1);

  }

  // ngOnChanges(id: number){
  //   this.service.update(id, this.form.value.task).subscribe(_ => {
  //     alert('Task updated successfully');
  //   });
  // }

  onSubmit() {
    const data = {
      taskName: this.form.value.task,
      completed: false
    }
    this.service.save(data).subscribe(_ => {
      alert('Task saved successfully');
      this.getTodos()
    });
    this.form.reset();
  }

  getTodos() {
    this.service.getAll().subscribe((todos: any) => {
      this.todos = todos
      console.log(todos)
      // console.log('Done getting todos'),
      // alert('Done getting todos')
    });
  }

  getTodosById() {
    this.service.get().subscribe((result: any) => {
      const resul = result
      console.log(resul),
        console.log('Done getting Todos by id')
    })
  }


  onDelete(index: number) {
    this.service.delete(index).subscribe(_ => {
      alert('Deleted successfully');
    });
    console.log(index);
    this.todos.splice(index, 1);
    // alert('Successfully deleted');
  }

  deleteAll() {
    this.service.deleteAll().subscribe((results: any) => {
      results.forEach((result: any) => {
        this.todos.push(result);
      })
    });
  }

  Oncheck(todo: any) {
   
    this.service.update(todo.id,todo).subscribe(_ => {
      alert("Updated succesfully")
      this.getTodos()
    })

  }


}
