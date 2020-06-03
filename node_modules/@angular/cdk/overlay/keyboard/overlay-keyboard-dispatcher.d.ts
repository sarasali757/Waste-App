/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, OnDestroy, Optional } from '@angular/core';
import { OverlayRef } from '../overlay-ref';
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayKeyboardDispatcher implements OnDestroy {
    /** Currently attached overlays in the order they were attached. */
    _attachedOverlays: OverlayRef[];
    private _document;
    private _isAttached;
    constructor(document: any);
    ngOnDestroy(): void;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef: OverlayRef): void;
    /** Remove an overlay from the list of attached overlay refs. */
    remove(overlayRef: OverlayRef): void;
    /** Detaches the global keyboard event listener. */
    private _detach;
    /** Keyboard event listener that will be attached to the body. */
    private _keydownListener;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayKeyboardDispatcher>;
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher: OverlayKeyboardDispatcher, _document: any): OverlayKeyboardDispatcher;
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER: {
    provide: typeof OverlayKeyboardDispatcher;
    deps: (Optional[] | InjectionToken<any>)[];
    useFactory: typeof OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1rZXlib2FyZC1kaXNwYXRjaGVyLmQudHMiLCJzb3VyY2VzIjpbIm92ZXJsYXkta2V5Ym9hcmQtZGlzcGF0Y2hlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4uL292ZXJsYXktcmVmJztcbi8qKlxuICogU2VydmljZSBmb3IgZGlzcGF0Y2hpbmcga2V5Ym9hcmQgZXZlbnRzIHRoYXQgbGFuZCBvbiB0aGUgYm9keSB0byBhcHByb3ByaWF0ZSBvdmVybGF5IHJlZixcbiAqIGlmIGFueS4gSXQgbWFpbnRhaW5zIGEgbGlzdCBvZiBhdHRhY2hlZCBvdmVybGF5cyB0byBkZXRlcm1pbmUgYmVzdCBzdWl0ZWQgb3ZlcmxheSBiYXNlZFxuICogb24gZXZlbnQgdGFyZ2V0IGFuZCBvcmRlciBvZiBvdmVybGF5IG9wZW5zLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvKiogQ3VycmVudGx5IGF0dGFjaGVkIG92ZXJsYXlzIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgYXR0YWNoZWQuICovXG4gICAgX2F0dGFjaGVkT3ZlcmxheXM6IE92ZXJsYXlSZWZbXTtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9pc0F0dGFjaGVkO1xuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50OiBhbnkpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqIEFkZCBhIG5ldyBvdmVybGF5IHRvIHRoZSBsaXN0IG9mIGF0dGFjaGVkIG92ZXJsYXkgcmVmcy4gKi9cbiAgICBhZGQob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQ7XG4gICAgLyoqIFJlbW92ZSBhbiBvdmVybGF5IGZyb20gdGhlIGxpc3Qgb2YgYXR0YWNoZWQgb3ZlcmxheSByZWZzLiAqL1xuICAgIHJlbW92ZShvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZDtcbiAgICAvKiogRGV0YWNoZXMgdGhlIGdsb2JhbCBrZXlib2FyZCBldmVudCBsaXN0ZW5lci4gKi9cbiAgICBwcml2YXRlIF9kZXRhY2g7XG4gICAgLyoqIEtleWJvYXJkIGV2ZW50IGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgYm9keS4gKi9cbiAgICBwcml2YXRlIF9rZXlkb3duTGlzdGVuZXI7XG59XG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWShkaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBfZG9jdW1lbnQ6IGFueSk6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI7XG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVI6IHtcbiAgICBwcm92aWRlOiB0eXBlb2YgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcjtcbiAgICBkZXBzOiAoT3B0aW9uYWxbXSB8IEluamVjdGlvblRva2VuPGFueT4pW107XG4gICAgdXNlRmFjdG9yeTogdHlwZW9mIE9WRVJMQVlfS0VZQk9BUkRfRElTUEFUQ0hFUl9QUk9WSURFUl9GQUNUT1JZO1xufTtcbiJdfQ==