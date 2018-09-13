import { Component, OnInit } from '@angular/core';
import {
  eStatus, eEntityCodes, eBlockTypes, eSiteStatus, eRequestTypes,
  EnumUtils
} from '../shared/enums';

@Component({
  selector: 'app-lock-form',
  templateUrl: './lock-form.component.html',
  styleUrls: ['./lock-form.component.css']
})

export class LockFormComponent implements OnInit {
  SiteBlock: SiteBlock = new SiteBlock();
  status = this.enumUtils.enumSelector(eStatus);
  entityCodes = this.enumUtils.enumSelector(eEntityCodes);
  requestTypes = this.enumUtils.enumSelector(eRequestTypes);
  siteStatus = this.enumUtils.enumSelector(eSiteStatus);
  blockTypes = this.enumUtils.enumSelector(eBlockTypes);

  constructor(private enumUtils: EnumUtils) { }

  ngOnInit() {
    this.SiteBlock.sites = [];
    const s = {} as Site;
    s.uRI = 'http://somesite.com';
    s.siteId = '1';
    s.contentOwner = 'SportTV';
    s.detectionDate = '2018-09-08T15:43:00';
    s.blockType = 3;
    s.validFrom = '2018-09-10T13:45';
    s.validTo = '2018-09-11T13:45';
    s.siteStatus = eSiteStatus.Blocked,
    this.SiteBlock.sites.push(s);
    const s2 = {} as Site;
    s2.uRI = '';
    this.SiteBlock.sites.push(s2);

    this.SiteBlock.files = [];
    const f = {} as File;
    f.file = 'DocMuitoBom.docx';
    f.date = '2018-09-09T13:54';
    this.SiteBlock.files.push(f);
  }

  add(): string {
    return '';
  }

  process(): string {
    return '';
  }

  delete(): string {
    return '';
  }
}

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
  history?: HistoryAction[];
  files?: File[];
}
export class File {
  file: string;
  date: string;
}
