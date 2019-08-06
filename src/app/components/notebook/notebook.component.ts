import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service'

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

  deleteNote(note:Note){
    // UI
    this.notebook = this.notebook.filter(n => n.id !== note.id);
    // Server
    this.noteService.deleteNote(note).subscribe();
  }

  addNote(note:Note){
    this.noteService.addNote(note).subscribe(note =>{
      this.notebook.push(note);
    })
  }

}
