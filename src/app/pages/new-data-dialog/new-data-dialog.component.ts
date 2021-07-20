import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { title } from 'process';
import { IPosts } from 'src/app/shared/models/posts';
import { HelperService } from 'src/app/shared/services/helper.service';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-new-data-dialog',
  templateUrl: './new-data-dialog.component.html',
  styleUrls: ['./new-data-dialog.component.scss']
})
export class NewDataDialogComponent implements OnInit {
  newDataForm: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private postsService: PostsService, private dialog: MatDialog, private helperService: HelperService) { }

  ngOnInit(): void {
    debugger
    this.newDataForm = this.fb.group({
      title: "",
      content: "",
      lat: "",
      long: "",
      image_url: ""
    });
    if (this.data.isUpdate) {
      this.loadForm();
    }
  }

  loadForm() {
    this.newDataForm.patchValue({
      title: this.data.rowData.title,
      content: this.data.rowData.content,
      lat: this.data.rowData.lat,
      long: this.data.rowData.long,
      image_url: this.data.rowData.image_url
    });
  }
  onSubmit() {
    if (!this.data.isUpdate) {
      this.postsService.createPosts(this.newDataForm.value).subscribe((res) => {
        this.helperService.listPostsData();
        this.dialog.closeAll();
      });
    }
    else {
      this.postsService.updatePosts(this.newDataForm.value, this.data.rowData.id).subscribe((res) => {
        this.helperService.listPostsData();
        this.dialog.closeAll();
      });
    }

  }

}
