import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getNotes() {
    return [
      {
        id: 1,
        title: 'Title One',
        contents: 'Generic Todo One',
        modified: Date.now.toString(),
        readonly: false,
        completed: true
      },
      {
        id: 2,
        title: 'Title Two',
        contents: 'Generic Todo Two',
        modified: Date.now.toString(),
        readonly: true,
        completed: false
      },
      {
        id: 3,
        title: 'Title Three',
        contents: 'Generic Todo Three',
        modified: Date.now.toString(),
        readonly: false,
        completed: true
      }
    ]
  }
}
