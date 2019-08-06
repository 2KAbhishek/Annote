import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Note } from '../models/Note'
import { Observable } from 'rxjs';
import { url } from 'inspector';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notebookUrl:string = 'https://my-json-server.typicode.com/2kabhishek/Annote/notebook';

  constructor(private http:HttpClient) { }

  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>(this.notebookUrl);
  }

  toggleCompleted(note: Note):Observable<any>{
    const url = `${this.notebookUrl}/${note.id}`;
    return this.http.put(url, note, httpOptions);
  }
}
