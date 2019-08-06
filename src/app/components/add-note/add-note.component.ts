import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
title:string;
  constructor() { }

  ngOnInit() {
  }

}
