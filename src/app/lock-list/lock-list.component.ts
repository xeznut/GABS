import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { AppDialogComponent } from '../shared/ui/app-dialog.component';

enum eStatus {
  Activo = 1,
  Inactivo = 2,
  Inserido = 3,
  Rejeitado = 4
}

enum eEntityCodes {
  IGAC = 1,
  PJ = 2,
  MP = 3,
  SRIJ = 4
}

export class Site {
  siteuri: string;
  siteip: string;
  siteurl: string;
}

export class HistoryAction {
  datetime: string;
  who: string;
  action: string;
  detail?: string;
}

export class LockSite {
  originId: number;
  requestId: number;
  entityCode: eEntityCodes;
  requestdate: string;
  contentOwner: string;
  sites: Site[];
  detectionDate: string;
  validFrom: string;
  validTo: string;
  lockStatus: eStatus;
  history: HistoryAction[];
}

const ELEMENT_DATA: LockSite[] = [
  {
    originId: 1, requestId: 1, requestdate: '07-09-2018 21:43', contentOwner: 'pmiguel', entityCode: eEntityCodes.IGAC,
    sites: [{ siteuri: '', siteip: '196.43.23.05', siteurl: '' }, {
      siteuri: 'http://www.oni.pt', siteip: '196.43.23.06',
      siteurl: 'http://www.oni.pt'
    }],
    detectionDate: '07-09-2018 18:35', validFrom: '08-09-2018 19:45', validTo: '10-09-2018 10:32', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação', detail: 'xmlRequest' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    originId: 2, requestId: 2, requestdate: '07-09-2018 18:12', contentOwner: 'pmiguel', entityCode: eEntityCodes.PJ,
    sites: [{ siteuri: '', siteip: '196.43.23.65', siteurl: '' }],
    detectionDate: '07-09-2018 09:45', validFrom: '08-09-2018 05:23', validTo: '10-09-2018 12:00', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação' },
    ],
  },
  {
    originId: 3, requestId: 3, requestdate: '07-09-2018 18:12', contentOwner: 'pmiguel', entityCode: eEntityCodes.MP,
    sites: [{ siteuri: '', siteip: '196.43.23.65', siteurl: '' }],
    detectionDate: '07-09-2018 09:45', validFrom: '08-09-2018 05:23', validTo: '10-09-2018 12:00', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação' },
    ],
  },
  {
    originId: 4, requestId: 4, requestdate: '07-09-2018 18:12', contentOwner: 'pmiguel', entityCode: eEntityCodes.MP,
    sites: [{ siteuri: '', siteip: '196.43.23.65', siteurl: '' }],
    detectionDate: '07-09-2018 09:45', validFrom: '08-09-2018 05:23', validTo: '10-09-2018 12:00', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação' },
    ],
  },
  {
    originId: 5, requestId: 5, requestdate: '07-09-2018 18:12', contentOwner: 'pmiguel', entityCode: eEntityCodes.IGAC,
    sites: [{ siteuri: '', siteip: '196.43.23.65', siteurl: '' }],
    detectionDate: '07-09-2018 09:45', validFrom: '08-09-2018 05:23', validTo: '10-09-2018 12:00', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação' },
    ],
  },
  {
    originId: 6, requestId: 6, requestdate: '07-09-2018 21:43', contentOwner: 'pmiguel', entityCode: eEntityCodes.SRIJ,
    sites: [{ siteuri: '', siteip: '196.43.23.05', siteurl: '' }, {
      siteuri: 'http://www.oni.pt', siteip: '196.43.23.06',
      siteurl: 'http://www.oni.pt'
    }],
    detectionDate: '07-09-2018 18:35', validFrom: '08-09-2018 19:45', validTo: '10-09-2018 10:32', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação' },
    ],
  },
  {
    originId: 7, requestId: 7, requestdate: '07-09-2018 21:43', contentOwner: 'pmiguel', entityCode: eEntityCodes.MP,
    sites: [{ siteuri: '', siteip: '196.43.23.05', siteurl: '' }, {
      siteuri: 'http://www.oni.pt', siteip: '196.43.23.06',
      siteurl: 'http://www.oni.pt'
    }],
    detectionDate: '07-09-2018 18:35', validFrom: '08-09-2018 19:45', validTo: '10-09-2018 10:32', lockStatus: eStatus.Activo,
    history: [
      { datetime: '09-09-2018 21:34', who: 'pmiguel', action: 'Criação' },
      { datetime: '09-09-2018 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '09-09-2018 21:45', who: 'pmiguel', action: 'Activação' },
    ],
  },
];

@Component({
  selector: 'app-lock-list',
  templateUrl: './lock-list.component.html',
  styleUrls: ['./lock-list.component.css']
})
export class LockListComponent implements OnInit {
  displayedColumns: string[] = [
    'originId',
    'requestId',
    'requestdate',
    'entityCode',
    'contentOwner',
    'siteuri',
    'siteip',
    'siteurl',
    'viewMore',
    'detectionDate',
    'validFrom',
    'validTo',
    'lockStatus',
    'history'
  ];

  status = this.enumSelector(eStatus);

  entityCodes = this.enumSelector(eEntityCodes);

  dataSource = new MatTableDataSource<LockSite>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  getStatus(val): string {
    return eStatus[val];
  }

  getEntity(val): string {
    return eEntityCodes[val];
  }

  enumSelector(definition) {
    return Object.keys(definition)
      .filter(f => !isNaN(Number(f)));
  }

  constructor(public dialog: MatDialog) { }

  openDialog(data, dataType): void {
    let siteData: string;
    let historyData: string;
    let colsToShow: string[];
    switch (dataType) {
      case 'sites':
        colsToShow = [
          'siteuri',
          'siteip',
          'siteurl'
        ];
        siteData = data;
        historyData = '';
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
        break;
    }

    const dialogRef = this.dialog.open(AppDialogComponent, {
      data: { sites: siteData, history: historyData, detail: '', colsToShow: colsToShow }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
