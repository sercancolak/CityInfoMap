import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPosts } from 'src/app/shared/models/posts';
import { HelperService } from 'src/app/shared/services/helper.service';
import { MapService } from 'src/app/shared/services/map.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { DataInfoDialogComponent } from '../data-info-dialog/data-info-dialog.component';
import { NewDataDialogComponent } from '../new-data-dialog/new-data-dialog.component';

declare var L: any;
export interface PeriodicElement {
  title: string;
  content: string;
  lat: string;
  long: string;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'content', 'lat', 'long', 'Action'];
  constructor(private postsService: PostsService, public helperService: HelperService, private dialog: MatDialog, private postService: PostsService, private mapService: MapService) { }

  ngOnInit(): void {
    this.helperService.listPostsData();
  }


  deleteData(e) {
    var answer = window.confirm('Are you sure for this ? ');
    if (answer) {
      this.postService.deletePosts(e.id).subscribe(res => {
        this.helperService.listPostsData();
        console.log('Delete success.');
      })
    }
  }

  openUpdateDialog(e) {
    this.dialog.open(NewDataDialogComponent, {
      data: { rowData: e, isUpdate: true }
    });

  }

  showInfoDialog(e) {
    this.dialog.open(DataInfoDialogComponent, {
      data: { rowData: e }
    });
  }
}
