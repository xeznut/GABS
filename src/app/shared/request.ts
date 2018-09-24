import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { eStatus, eEntityCodes, eBlockTypes, eSiteStatus, eRequestTypes } from '../shared/enums';

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
        requestId: 1, entityReference: 'REF-001', entityCode: eEntityCodes.MP,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: 'site.pirata.com', detectionDate: '2018-09-07 18:35',
            blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Unblocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
    {
        requestId: 2, entityReference: 'REF-002', entityCode: eEntityCodes.IGAC,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Pronto,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: '195.45.12.23', detectionDate: '2018-09-07 18:35',
            blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
    {
        requestId: 3, entityReference: 'REF-003', entityCode: eEntityCodes.PJ,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.PoNR,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: '198.345.152.23', detectionDate: '2018-09-07 18:35',
            blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Unblocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
    {
        requestId: 4, entityReference: 'REF-004', entityCode: eEntityCodes.SRIJ,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: 'site.pirata.com', detectionDate: '2018-09-07 18:35',
            blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
    {
        requestId: 5, entityReference: 'REF-005', entityCode: eEntityCodes.IGAC,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Unblock, status: eStatus.Rejeitado,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: '195.45.12.23', detectionDate: '2018-09-07 18:35',
            blockType: 2, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
    {
        requestId: 6, entityReference: 'REF-006', entityCode: eEntityCodes.PJ,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Registado,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: 'site.pirata.com', detectionDate: '2018-09-07 18:35',
            blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Unblocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
    {
        requestId: 7, entityReference: 'REF-007', entityCode: eEntityCodes.MP,
        requestDate: '2018-09-07 21:43', requestType: eRequestTypes.Block, status: eStatus.Aceite,
        sites: [{
            siteId: '0001', contentOwner: 'SportTV', uRI: 'site.pirata.com', detectionDate: '2018-09-07 18:35',
            blockType: 3, validFrom: '2018-09-08 19:45', validTo: '2018-09-10 10:32', siteStatus: eSiteStatus.Blocked,
        }],
        history: [
            { datetime: '2018-09-09 21:34', who: 'pmiguel', action: 'Criação', detail: xmlString },
            { datetime: '2018-09-09 21:40', who: 'pmiguel', action: 'Processamento' },
            { datetime: '2018-09-09 21:45', who: 'pmiguel', action: 'Activação', detail: 'delivered' },
        ],
    },
];

@Injectable({
    providedIn: 'root',
  })

export class SiteRequest {
    getRequestList(): SiteBlock[] {
        return ELEMENT_DATA;
    }
}
