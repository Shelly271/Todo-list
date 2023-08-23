import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  constructor(private http:HttpClient) {}

  save(data: any){
  return this.http.post(`http://localhost:8082/todos/save`, data)
  }
  get(id:number): Observable<any> {
    return this.http.get<any>(`http://localhost:8082/todos/get/${id}`);
  }
  getAll(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8082/todos/getAll`);
    } 
  delete(id:number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8082/todos/delete/${id}`)
  }
  deleteAll(){
    return this.http.delete('http://localhost:8082/todos/deleteAll');
  }
  update(id:number,data:any){
    return this.http.put(`http://localhost:8082/todos/update/${id}`,data);
  }
}
