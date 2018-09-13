import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { AppDialogComponent } from '../shared/ui/app-dialog.component';
import {
  eStatus, eEntityCodes, eBlockTypes, eSiteStatus, eRequestTypes,
  EnumUtils
} from '../shared/enums';

export class Site {
  siteId: string;
  contentOwner: string;
  uRI: string;
  detectionDate: string;
  blockType: eBlockTypes;
  validFrom: string;
  validTo: string;
  siteStatus: eSiteStatus;
}

export class HistoryAction {
  datetime: string;
  who: string;
  action: string;
  detail?: string;
}

export class SiteBlock {
  requestId: number;
  entityReference: string;
  entityCode: eEntityCodes;
  requestDate: string;
  requestType: eRequestTypes;
  status: eStatus;
  sites: Site[];
  notes?: string;
  history: HistoryAction[];
}

const xmlString = '<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n' +
  '<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" ' +
  'xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n' +
  '<soap:Body>\r\n' +
  '<WSRequestSiteBlock xmlns=\"http://www.telecom.pt/Altice/ABS/WebServices\">\r\n' +
  '<msgHdr>\r\n' +
  '<sender>string</sender>\r\n' +
  '<receiver>string</receiver> \r\n' +
  '<senderDate>string</senderDate>\r\n' +
  '<senderIDMsg>string</senderIDMsg>\r\n' +
  '<receiverIDMsg>string</receiverIDMsg>\r\n' +
  '<correlationID>string</correlationID>\r\n' +
  '<senderKey>string</senderKey>\r\n' +
  '<receiverKey>string</receiverKey>\r\n' +
  '</msgHdr>\r\n' +
  '<msgBody>\r\n' +
  '<requestInfo>\r\n' +
  '<entCode>string</entCode>\r\n' +
  '<entReference>string</entReference>\r\n' +
  '<requestType>string</requestType>\r\n' +
  '<element>\r\n' +
  '<elementID>string</elementID>\r\n' +
  '<contentOwner>string</contentOwner>\r\n' +
  '<uRI>string</uRI>\r\n' +
  '<detectionDate>string</detectionDate>\r\n' +
  '<blockType>string</blockType>\r\n' +
  '<validFrom>string</validForm>\r\n' +
  '<validTo>string</validTo>\r\n' +
  '</element>\r\n' +
  '</requestInfo>\r\n' +
  '<notes>string</notes>\r\n' +
  '</msgBody>\r\n' +
  '</WSRequestSiteBlock>\r\n' +
  '</soap:Body>\r\n' +
  '</soap:Envelope>';

const ELEMENT_DATA: SiteBlock[] = [
  {
    requestId: 1, entityReference: 'REF-001', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 4, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    requestId: 2, entityReference: 'REF-002', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 1, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    requestId: 3, entityReference: 'REF-003', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 1, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    requestId: 4, entityReference: 'REF-004', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 1, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    requestId: 5, entityReference: 'REF-005', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 1, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    requestId: 6, entityReference: 'REF-006', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 1, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
    ],
  },
  {
    requestId: 7, entityReference: 'REF-007', entityCode: eEntityCodes.IGAC,
    requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
    sites: [{
      siteId: '0001', contentOwner: 'SportTV', uRI: 'http://www.oni.pt', detectionDate: '2018-09-07 18:35',
      blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    },
    {
      siteId: '0002', contentOwner: 'SportTV', uRI: 'http://www.nowo.pt', detectionDate: '2018-09-07 18:35',
      blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
    }],
    history: [
      { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
      { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
      { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
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
    'requestId',
    'entityReference',
    'entityCode',
    'requestDate',
    'siteuri',
    'viewMore',
    'requestType',
    'status',
    'history'
  ];

  status = this.enumUtils.enumSelector(eStatus);

  entityCodes = this.enumUtils.enumSelector(eEntityCodes);

  requestTypes = this.enumUtils.enumSelector(eRequestTypes);

  dataSource = new MatTableDataSource<SiteBlock>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog, private enumUtils: EnumUtils) { }

  openDialog(data, dataType): void {
    let siteData: string;
    let historyData: string;
    let colsToShow: string[];
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
