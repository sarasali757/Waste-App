/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy } from '@angular/core';
import { OverlayContainer } from './overlay-container';
import { Platform } from '@angular/cdk/platform';
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FullscreenOverlayContainer extends OverlayContainer implements OnDestroy {
    private _fullScreenEventName;
    private _fullScreenListener;
    constructor(_document: any, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    platform?: Platform);
    ngOnDestroy(): void;
    protected _createContainer(): void;
    private _adjustParentForFullscreenChange;
    private _addFullscreenChangeListener;
    private _getEventName;
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    getFullscreenElement(): Element;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FullscreenOverlayContainer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi1vdmVybGF5LWNvbnRhaW5lci5kLnRzIiwic291cmNlcyI6WyJmdWxsc2NyZWVuLW92ZXJsYXktY29udGFpbmVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4vb3ZlcmxheS1jb250YWluZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuLyoqXG4gKiBBbHRlcm5hdGl2ZSB0byBPdmVybGF5Q29udGFpbmVyIHRoYXQgc3VwcG9ydHMgY29ycmVjdCBkaXNwbGF5aW5nIG9mIG92ZXJsYXkgZWxlbWVudHMgaW5cbiAqIEZ1bGxzY3JlZW4gbW9kZVxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvcmVxdWVzdEZ1bGxTY3JlZW5cbiAqXG4gKiBTaG91bGQgYmUgcHJvdmlkZWQgaW4gdGhlIHJvb3QgY29tcG9uZW50LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGdWxsc2NyZWVuT3ZlcmxheUNvbnRhaW5lciBleHRlbmRzIE92ZXJsYXlDb250YWluZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2Z1bGxTY3JlZW5FdmVudE5hbWU7XG4gICAgcHJpdmF0ZSBfZnVsbFNjcmVlbkxpc3RlbmVyO1xuICAgIGNvbnN0cnVjdG9yKF9kb2N1bWVudDogYW55LCBcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBgcGxhdGZvcm1gIHBhcmFtZXRlciB0byBiZWNvbWUgcmVxdWlyZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSAxMC4wLjBcbiAgICAgKi9cbiAgICBwbGF0Zm9ybT86IFBsYXRmb3JtKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBfY3JlYXRlQ29udGFpbmVyKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBfYWRqdXN0UGFyZW50Rm9yRnVsbHNjcmVlbkNoYW5nZTtcbiAgICBwcml2YXRlIF9hZGRGdWxsc2NyZWVuQ2hhbmdlTGlzdGVuZXI7XG4gICAgcHJpdmF0ZSBfZ2V0RXZlbnROYW1lO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHBhZ2UgaXMgcHV0IGludG8gZnVsbHNjcmVlbiBtb2RlLCBhIHNwZWNpZmljIGVsZW1lbnQgaXMgc3BlY2lmaWVkLlxuICAgICAqIE9ubHkgdGhhdCBlbGVtZW50IGFuZCBpdHMgY2hpbGRyZW4gYXJlIHZpc2libGUgd2hlbiBpbiBmdWxsc2NyZWVuIG1vZGUuXG4gICAgICovXG4gICAgZ2V0RnVsbHNjcmVlbkVsZW1lbnQoKTogRWxlbWVudDtcbn1cbiJdfQ==