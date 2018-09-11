import { Directive, HostListener, ElementRef } from '@angular/core';
import { LoadingService } from '../loading.service';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'button.btn:not(.bypass-validation)'
})

export class LoadingDirective {
    // @Input() focus:boolean
    @HostListener('mouseenter')
    onMouseEnter() {
        if (this._loadingService.hasJobs()) {
            (this.element.nativeElement as HTMLButtonElement).style.cursor = 'wait';
        } else {
            (this.element.nativeElement as HTMLButtonElement).style.cursor = '';
        }
    }
    @HostListener('click', ['$event'])
    checkValid(event: Event) {
        // console.info('clicked: ' + $event)
        // return window.confirm('Are you sure you want to do this?')
        // console.log('hasJobs?', this._loadingService.hasJobs())
        return !this._loadingService.hasJobs();
    }
    constructor(private element: ElementRef, private _loadingService: LoadingService) { }
}

