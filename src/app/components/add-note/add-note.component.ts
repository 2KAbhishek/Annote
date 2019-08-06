import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})

export class AddNoteComponent implements OnInit {
  @Output() addNote: EventEmitter<any> = new EventEmitter();

  title:string;
  contents:string;
  readonly:boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const note = {
      title: this.title,
      contents: this.contents,
      modified: this.getDate(),
      readonly: this.readonly,
      completed: false
    }
    this.addNote.emit(note);
  }

  getDate(){
  var today = new Date();
  var time = today.toDateString()+' '+today.toTimeString().slice(0,8);
  return time;
  }

}
