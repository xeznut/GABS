import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../loading.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-loading',
    template: `
    <mat-progress-spinner *ngIf="loading"
        class="spinner"
        diameter="30"
        color="primary"
        mode="indeterminate">
    </mat-progress-spinner>
    `,
})
export class LoadingComponent implements OnInit, OnDestroy {
    private _isLoading = false;
    private _sub: Subscription;

    constructor(private _loadingService: LoadingService) {
    }

    public get loading() {
        return this._isLoading;
    }

    showOrHideLoadingIndicator(loading) {
        this._isLoading = loading;
    }

    playLoadingAnimation() {
    }

    cancelLoadingAnimation() {
        // var animation = (document.getElementById('div.spinner') as any).animate([
    }

    ngOnInit() {
        this._sub = this._loadingService.loading$.subscribe(loading => this.showOrHideLoadingIndicator(loading));
    }

    ngOnDestroy() {
        if (this._sub) { this._sub.unsubscribe(); }
    }

}
