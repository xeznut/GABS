import * as moment from 'moment';

export function isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function get30DaysAgo() {
    return moment().subtract(30, 'days').format('YYYYMMDD');
}

export function getDateNow() {
    const now: Date = new Date();
    const month: number = now.getMonth() + 1;
    const day: number = now.getDate();
    return now.getFullYear() + (month < 10 ? '0' + String(month) : String(month)) + (day < 10 ? '0' + String(day) : String(day));
}

export function getDateTimeNow(): string {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

export function getNMonthAgo(n: number) {
    const now: Date = new Date();
    now.setMonth(now.getMonth() - n);
    const month: number = now.getMonth() + 1;
    const day: number = now.getDate();
    return now.getFullYear() + (month < 10 ? '0' + String(month) : String(month)) + (day < 10 ? '0' + String(day) : String(day));
}

export function datetimeGreaterThan( dd, ddThan): boolean {
    const mdd = moment(dd);
    const mddThan = moment(ddThan);
    return (mdd.diff(mddThan) > 0);
}

export function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
