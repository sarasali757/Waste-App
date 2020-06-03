/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, OnDestroy, Optional } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
/** Container inside which all overlays will render. */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayContainer implements OnDestroy {
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    protected _platform?: Platform | undefined;
    protected _containerElement: HTMLElement;
    protected _document: Document;
    constructor(document: any, 
    /**
     * @deprecated `platform` parameter to become required.
     * @breaking-change 10.0.0
     */
    _platform?: Platform | undefined);
    ngOnDestroy(): void;
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement(): HTMLElement;
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    protected _createContainer(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OverlayContainer>;
}
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer: OverlayContainer, _document: any): OverlayContainer;
/** @docs-private @deprecated @breaking-change 8.0.0 */
export declare const OVERLAY_CONTAINER_PROVIDER: {
    provide: typeof OverlayContainer;
    deps: (Optional[] | InjectionToken<any>)[];
    useFactory: typeof OVERLAY_CONTAINER_PROVIDER_FACTORY;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb250YWluZXIuZC50cyIsInNvdXJjZXMiOlsib3ZlcmxheS1jb250YWluZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbi8qKiBDb250YWluZXIgaW5zaWRlIHdoaWNoIGFsbCBvdmVybGF5cyB3aWxsIHJlbmRlci4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE92ZXJsYXlDb250YWluZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGBwbGF0Zm9ybWAgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcGxhdGZvcm0/OiBQbGF0Zm9ybSB8IHVuZGVmaW5lZDtcbiAgICBwcm90ZWN0ZWQgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBfZG9jdW1lbnQ6IERvY3VtZW50O1xuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50OiBhbnksIFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIGBwbGF0Zm9ybWAgcGFyYW1ldGVyIHRvIGJlY29tZSByZXF1aXJlZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIF9wbGF0Zm9ybT86IFBsYXRmb3JtIHwgdW5kZWZpbmVkKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIG92ZXJsYXkgY29udGFpbmVyIGVsZW1lbnQuIEl0IHdpbGwgbGF6aWx5XG4gICAgICogY3JlYXRlIHRoZSBlbGVtZW50IHRoZSBmaXJzdCB0aW1lICBpdCBpcyBjYWxsZWQgdG8gZmFjaWxpdGF0ZSB1c2luZ1xuICAgICAqIHRoZSBjb250YWluZXIgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzLlxuICAgICAqIEByZXR1cm5zIHRoZSBjb250YWluZXIgZWxlbWVudFxuICAgICAqL1xuICAgIGdldENvbnRhaW5lckVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBvdmVybGF5IGNvbnRhaW5lciBlbGVtZW50LCB3aGljaCBpcyBzaW1wbHkgYSBkaXZcbiAgICAgKiB3aXRoIHRoZSAnY2RrLW92ZXJsYXktY29udGFpbmVyJyBjbGFzcyBvbiB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUNvbnRhaW5lcigpOiB2b2lkO1xufVxuLyoqIEBkb2NzLXByaXZhdGUgQGRlcHJlY2F0ZWQgQGJyZWFraW5nLWNoYW5nZSA4LjAuMCAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gT1ZFUkxBWV9DT05UQUlORVJfUFJPVklERVJfRkFDVE9SWShwYXJlbnRDb250YWluZXI6IE92ZXJsYXlDb250YWluZXIsIF9kb2N1bWVudDogYW55KTogT3ZlcmxheUNvbnRhaW5lcjtcbi8qKiBAZG9jcy1wcml2YXRlIEBkZXByZWNhdGVkIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IE9WRVJMQVlfQ09OVEFJTkVSX1BST1ZJREVSOiB7XG4gICAgcHJvdmlkZTogdHlwZW9mIE92ZXJsYXlDb250YWluZXI7XG4gICAgZGVwczogKE9wdGlvbmFsW10gfCBJbmplY3Rpb25Ub2tlbjxhbnk+KVtdO1xuICAgIHVzZUZhY3Rvcnk6IHR5cGVvZiBPVkVSTEFZX0NPTlRBSU5FUl9QUk9WSURFUl9GQUNUT1JZO1xufTtcbiJdfQ==