import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Note } from '../models/Note'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notebookUrl:string = 'https://jsonplaceholder.typicode.com/notebook';

  constructor(private http:HttpClient) { }

  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>(this.notebookUrl);
  }
}
