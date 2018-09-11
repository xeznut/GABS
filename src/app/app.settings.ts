import { environment } from '../environments/environment';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppSettings {
    static env = { ...environment };
    constructor(private http: HttpClient) {
    }
    public load() {
        return this.http.get('config.json').subscribe(config => {
            AppSettings.env = {...AppSettings.env, ...config as any};
            console.log('API_ENDPOINT', AppSettings.env.API_ENDPOINT);
            const level = AppSettings.env.LogLevel;
            if (typeof level !== 'undefined') {
                // this._logger.setLevel(level);
            }
        });
    }
}
console.log('ENVIRONMENT API_ENDPOINT', AppSettings.env.API_ENDPOINT);
