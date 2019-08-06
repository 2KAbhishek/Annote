import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
title:string;
contents:string;
modified:string;
readonly:boolean;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const note = {
      title: this.title,
      contents: this.contents,
      modified: Date.now,
      readonly: this.readonly
    }
  }

}
