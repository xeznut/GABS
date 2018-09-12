import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock-form',
  templateUrl: './lock-form.component.html',
  styleUrls: ['./lock-form.component.css']
})

export class LockFormComponent implements OnInit {
  lockSite: LockSite = new LockSite();
  status = this.enumSelector(eStatus);
  entityCodes = this.enumSelector(eEntityCodes);
  constructor() { }

  ngOnInit() {
    this.lockSite.sites = [];
    const s = {} as Site;
    s.siteuri = 'http://somesite.com';
    s.siteip = '193.235.12.5';
    s.siteurl = '';
    this.lockSite.sites.push(s);
    const s2 = {} as Site;
    s2.siteuri = '';
    s2.siteip = '';
    s2.siteurl = '';
    this.lockSite.sites.push(s2);

    this.lockSite.files = [];
    const f = {} as File;
    f.file = 'DocMuitoBom.docx';
    this.lockSite.files.push(f);
    const f2 = {} as File;
    f2.file = '';
    this.lockSite.files.push(f2);
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
}

export class Site {
  siteuri: string;
  siteip: string;
  siteurl: string;
}

export class File {
  file: string;
}

export class LockSite {
  originId: number;
  requestId: number;
  requestdate: string;
  contentOwner: string;
  sites: Site[];
  detectionDate: string;
  validFrom: string;
  validTo: string;
  lockStatus: eStatus;
  files: File[];
}

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
