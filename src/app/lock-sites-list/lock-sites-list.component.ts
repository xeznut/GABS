import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { eWLTypes, EnumUtils} from '../shared/enums';
import { AppComponent} from '../app.component';


export class BlockedSite {
  uRI: string;
  wlType: eWLTypes;
}

const ELEMENT_DATA: BlockedSite[] = [
  {uRI: '193.232.23.1', wlType: eWLTypes.IP},
  {uRI: 'http://www.meo.com', wlType: eWLTypes.DNS},
  {uRI: 'http://www.firstrowsports.org', wlType: eWLTypes.DNS},
  {uRI: 'http://www.arenavision.in', wlType: eWLTypes.DNS},
  {uRI: '184.34.233.100', wlType: eWLTypes.IP},
  {uRI: 'http://www.blblblb.com', wlType: eWLTypes.DNS},
  {uRI: 'http://www.piratebay.org', wlType: eWLTypes.DNS},
  {uRI: 'http://www.piratebay.net', wlType: eWLTypes.DNS},
  {uRI: '123.45.67.89', wlType: eWLTypes.IP}];

@Component({
  selector: 'app-lock-sites-list',
  templateUrl: './lock-sites-list.component.html',
  styleUrls: ['./lock-sites-list.component.css']
})
export class LockSitesListComponent implements OnInit {

  displayedColumns: string[] = [
    'uRI',
    'wlType',
    'actions'
  ];

  BlockedSite: BlockedSite = new BlockedSite();
  wlTypes = this.enumUtils.enumSelector(eWLTypes);
  dataSource = new MatTableDataSource<BlockedSite>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private enumUtils: EnumUtils, private app: AppComponent) { }

}
