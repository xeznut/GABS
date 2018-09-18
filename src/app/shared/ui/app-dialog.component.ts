import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import {
  eStatus, eEntityCodes, eBlockTypes, eSiteStatus, eRequestTypes,
  EnumUtils
} from '../enums';

@Component({
  selector: 'app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css']
})
export class AppDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private enumUtils: EnumUtils) {}

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
      data: { detail: detail, sites: '', history: '', colsToShow: colsToShow, title: 'Detalhe da mensagem' }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}


