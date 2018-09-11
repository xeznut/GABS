import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';


@Injectable()
export class LoadingService {

    public loading$: Observable<boolean>;
    private _observer: Observer<boolean>;
    private _jobs: Object = {};

    constructor(private _router: Router) {
        this.loading$ = new Observable<boolean>(observer => this._observer = observer).pipe(share());
        this._router.events.subscribe((event: NavigationStart) => {
            if (event instanceof NavigationStart) {
                this.clearJobs();
            }
        });
    }

    toggleLoadingIndicator(value: boolean): void {
        if (this._observer) {
            this._observer.next(value);
        }
    }

    startJob(sub$): number {
        if (!Object.keys(this._jobs).length) {
            this.toggleLoadingIndicator(true);
        }
        let id: number;
        do {
            id = Math.floor((Math.random() * 1000) + 1);
        } while (this._jobs[id] != null);
        this._jobs[id] = sub$;
        return id;
    }

    endJob(id: number): void {
        if (this._jobs[id] != null) {
            delete this._jobs[id];
        }
        if (!Object.keys(this._jobs).length) {
            this.toggleLoadingIndicator(false);
        }
    }

    clearJobs(): void {
        for (const key in this._jobs) {
            if (this._jobs.hasOwnProperty(key)) {
                if (this._jobs[key] instanceof Subscription) {
                    const element: Subscription = this._jobs[key];
                    console.log('unsubscribe:', element);
                    element.unsubscribe();
                }
            }
        }
        this._jobs = {};
        this.toggleLoadingIndicator(false);
    }

    hasJobs(): boolean {
        return Object.keys(this._jobs).length > 0;
    }
}
