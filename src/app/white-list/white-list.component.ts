import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import {  eWLTypes, EnumUtils, eWLStatus} from '../shared/enums';


export class WLSite {
  whitelistId: number;
  uRI: string;
  wlType: eWLTypes;
  wlState: eWLStatus;
  createDate: string;
}

const ELEMENT_DATA: WLSite[] = [
  {whitelistId: 1, uRI: '193.232.23.1', wlType: eWLTypes.IP,
  wlState: eWLStatus['Não Activo'], createDate: '2018-09-01T12:45'},
  {whitelistId: 2, uRI: 'http://www.altice.com', wlType: eWLTypes.DNS,
  wlState: eWLStatus.Activo, createDate: '2018-09-05T12:45'}];

@Component({
  selector: 'app-white-list',
  templateUrl: './white-list.component.html',
  styleUrls: ['./white-list.component.css']
})
export class WhiteListComponent implements OnInit {

  displayedColumns: string[] = [
    'uRI',
    'wlType',
    'wlState',
    'createDate',
    'actions'
  ];

  WLSite: WLSite = new WLSite();
  wlTypes = this.enumUtils.enumSelector(eWLTypes);
  wlStatus = this.enumUtils.enumSelector(eWLStatus);
  dataSource = new MatTableDataSource<WLSite>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private enumUtils: EnumUtils) { }
}
