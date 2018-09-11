import {Injectable, Optional} from '@angular/core'

export enum Level {
    LOG,
    DEBUG,
    INFO,
    WARN,
    ERROR,
    OFF
}

export class Options {
    level: Level
}

const DEFAULT_OPTIONS: Options = {
    level: Level.WARN
}

@Injectable()
export class LoggerService {

    private _level: Level = Level.WARN

    constructor(@Optional() options?: Options) {
        const { level } = {...DEFAULT_OPTIONS, ...options} as Options
        this._level = level
        console.log('DEFAULT LOG LEVEL:', level)
    }

    private _log(level: Level, params: any[]): void {
        params.unshift(LevelDesc[level] + ':')
        switch (level) {
            case Level.LOG:
                console.log.apply(console, params)
                break
            case Level.DEBUG:
                console.log.apply(console, params)
                break
            case Level.INFO:
                console.info.apply(console, params)
                break
            case Level.WARN:
                console.warn.apply(console, params)
                break
            case Level.ERROR:
                console.error.apply(console, params)
                break
        }
    }

    error(...params: any[]): void {
        if (this._level <= Level.ERROR) { this._log(Level.ERROR, params) }
    }

    warn(...params: any[]): void {
        if (this._level <= Level.WARN) { this._log(Level.WARN, params) }
    }

    info(...params: any[]): void {
        if (this._level <= Level.INFO) { this._log(Level.INFO, params) }
    }

    debug(...params: any[]): void {
        if (this._level <= Level.INFO) { this._log(Level.DEBUG, params) }
    }

    log(...params: any[]): void {
        if (this._level <= Level.LOG) { this._log(Level.LOG, params) }
    }

    setLevel(level: Level) {
        this._level = level
        console.log('SET LOG LEVEL:', level)
    }
}

export const OFF_LOGGER_PROVIDERS: any[] = [ { provide: Options, useValue: {level: Level.OFF }}, LoggerService ]
export const ERROR_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.ERROR }}, LoggerService ]
export const WARN_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.WARN }}, LoggerService ]
export const INFO_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.INFO }}, LoggerService ]
export const DEBUG_LOGGER_PROVIDERS: any[] = [{ provide: Options, useValue: { level: Level.DEBUG }}, LoggerService ]
export const ALL_LOGGER_PROVIDERS: any[]   = [ { provide: Options, useValue: {level: Level.LOG }}, LoggerService ]

const LevelDesc = [
    'LOG',
    'DEBUG',
    'INFO',
    'WARN',
    'ERROR',
    ''
]