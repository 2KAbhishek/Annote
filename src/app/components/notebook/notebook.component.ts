import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService } from '../../services/note.service'

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  notebook:Note[];

  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notebook =>{
      this.notebook = notebook;
    });
  }

}
