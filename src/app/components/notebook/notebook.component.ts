import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  notebook:Note[];

  constructor() { }

  ngOnInit() {
    this.notebook = [
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
