import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl="https://openlibrary.org/search.json?q=the+lord+of+the+rings&page= 2";
  constructor(private http:HttpClient) { }

  getBooks():Observable<any>{
  return  this.http.get<any>(this.apiUrl);
  
  }
}
