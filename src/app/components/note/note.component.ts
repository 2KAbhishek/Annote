import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
@Input() note: Note;

  constructor() { }

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

}
