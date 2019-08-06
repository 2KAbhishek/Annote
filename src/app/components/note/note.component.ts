import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
@Input() note: Note;

  constructor(private noteService:NoteService) { }

  ngOnInit() {
  }

  // Set Dynamic classes
  setClasses(){
    let classes ={
      note: true,
      'is-completed': this.note.completed,
      'is-readonly': this.note.readonly
    }
    return classes;
  }

  onCompletedToggle(note){
    note.completed = !note.completed;
    this.noteService.toggleCompleted(note).subscribe(note => console.log(note));
  }

  onDeleted(note){
    console.log('delete');
  }
}
