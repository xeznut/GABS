import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { AppDialogComponent } from '../shared/ui/app-dialog.component';
import {
  eStatus, eEntityCodes, eBlockTypes, eSiteStatus, eRequestTypes,
  EnumUtils
} from '../shared/enums';
import { AppComponent} from '../app.component';
import { SiteBlock, SiteRequest} from '../shared/request';

@Component({
  selector: 'app-lock-list',
  templateUrl: './lock-list.component.html',
  styleUrls: ['./lock-list.component.css']
})
export class LockListComponent implements OnInit {
  displayedColumns: string[] = [
    'requestId',
    'entityReference',
    'entityCode',
    'requestDate',
    'siteuri',
    'blockType',
    'requestType',
    'status',
    'history'
  ];

  status = this.enumUtils.enumSelector(eStatus);

  entityCodes = this.enumUtils.enumSelector(eEntityCodes);

  requestTypes = this.enumUtils.enumSelector(eRequestTypes);

  blockTypes = this.enumUtils.enumSelector(eBlockTypes);

  requestList: SiteBlock[];

  dataSource = new MatTableDataSource<SiteBlock>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getRequestList();
    this.dataSource = new MatTableDataSource<SiteBlock>(this.requestList);
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog, private enumUtils: EnumUtils, private app: AppComponent, private siteRequest: SiteRequest ) { }

  getRequestList(): void {
    this.requestList = this.siteRequest.getRequestList();
  }
  openDialog(data, dataType): void {
    let siteData: string;
    let historyData: string;
    let colsToShow: string[];
    let title;
    switch (dataType) {
      case 'sites':
        colsToShow = [
          'siteId',
          'contentOwner',
          'uRI',
          'detectionDate',
          'blockType',
          'validFrom',
          'validTo',
          'siteStatus',
        ];
        siteData = data;
        historyData = '';
        title = 'Sites';
        break;
      case 'history':
        colsToShow = [
          'action',
          'who',
          'datetime',
          'detail'
        ];
        siteData = '';
        historyData = data;
        title = 'Histórico';
        break;
    }

    const dialogRef = this.dialog.open(AppDialogComponent, {
      data: { sites: siteData, history: historyData, detail: '', colsToShow: colsToShow, title: title }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
