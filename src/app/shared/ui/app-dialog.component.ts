import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css']
})
export class AppDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDetailDialog(data): void {
    let detail: string[];
    let colsToShow: string[];
    colsToShow = [
      'detail',
    ];
    detail = [data];

    const dialogRef = this.dialog.open(AppDialogComponent, {
      data: { detail: detail, sites: '', history: '', colsToShow: colsToShow }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}


