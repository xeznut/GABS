import { Injectable } from '@angular/core';

export enum eStatus {
    Registado = 1,
    Aceite = 2,
    PoNR = 3,
    Pronto = 4,
    Rejeitado = 5,
    Cancelado = 6
}

export enum eEntityCodes {
    IGAC = 1,
    PJ = 2,
    MP = 3,
    SRIJ = 4
}

export enum eBlockTypes {
    'Live Streaming via DNS' = 1,
    'Live Streaming via IP' = 2,
    'Offline via DNS' = 3,
    'Offline via IP' = 4
}

export enum eSiteStatus {
    Blocked = 1,
    Unblocked = 2
}

export enum eRequestTypes {
    Block = 1,
    Unblock = 2
}

export enum eWLTypes {
    DNS = 1,
    IP = 2
}

export enum eWLStatus {
    'Activo' = 1,
    'Não Activo' = 2
}

@Injectable()

export class EnumUtils {
    getState(val): string {
        return eStatus[val];
    }

    getEntity(val): string {
        return eEntityCodes[val];
    }

    getRequestType(val): string {
        return eRequestTypes[val];
    }

    getBlockType(val): string {
        return eBlockTypes[val];
    }

    getSiteState(val): string {
        return eSiteStatus[val];
    }

    getWLType(val): string {
        return eWLTypes[val];
    }

    getWLState(val): string {
        return eWLStatus[val];
    }

    enumSelector(definition) {
        return Object.keys(definition)
            .filter(f => isNaN(Number(f)))
            .map(key => ({ value: definition[key], title: key }));
    }
}
