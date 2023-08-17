import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  constructor(private http:HttpClient) {}

  //Post request
  save(data: any){

  return this.http.post("http://localhost:8081/todos/save", data)
  }
  //Get request
  get(): Observable<any> {
    return this.http.get<any>("http://localhost:8081/todos/get/{id}");
  }
 // GetAll request
  getAll(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8081/todos/getAll");
    }
    
  delete(id:number): Observable<void> {
    return this.http.delete<void>("http://localhost:8081/todos/delete/{id}")
  }
  deleteAll(): Observable<void[]>{
    return this.http.delete<void[]>("http://localhost:8081/todos/deleteAll");
  }
  update(id:number,data:any){
    return this.http.put("http://localhost:8081/todos/update/",id,data);
  }
}
