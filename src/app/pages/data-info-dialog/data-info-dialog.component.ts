import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-info-dialog',
  templateUrl: './data-info-dialog.component.html',
  styleUrls: ['./data-info-dialog.component.scss']
})
export class DataInfoDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
