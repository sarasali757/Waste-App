/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CollectionViewer, DataSource, ListRange } from '@angular/cdk/collections';
import { DoCheck, IterableDiffers, NgIterable, NgZone, OnDestroy, TemplateRef, TrackByFunction, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkVirtualScrollViewport } from './virtual-scroll-viewport';
/** The context for an item rendered by `CdkVirtualForOf` */
import * as ɵngcc0 from '@angular/core';
export declare type CdkVirtualForOfContext<T> = {
    /** The item value. */
    $implicit: T;
    /** The DataSource, Observable, or NgIterable that was passed to *cdkVirtualFor. */
    cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T>;
    /** The index of the item in the DataSource. */
    index: number;
    /** The number of items in the DataSource. */
    count: number;
    /** Whether this is the first item in the DataSource. */
    first: boolean;
    /** Whether this is the last item in the DataSource. */
    last: boolean;
    /** Whether the index is even. */
    even: boolean;
    /** Whether the index is odd. */
    odd: boolean;
};
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */
export declare class CdkVirtualForOf<T> implements CollectionViewer, DoCheck, OnDestroy {
    /** The view container to add items to. */
    private _viewContainerRef;
    /** The template to use when stamping out new items. */
    private _template;
    /** The set of available differs. */
    private _differs;
    /** The virtual scrolling viewport that these items are being rendered in. */
    private _viewport;
    /** Emits when the rendered view of the data changes. */
    viewChange: Subject<ListRange>;
    /** Subject that emits when a new DataSource instance is given. */
    private _dataSourceChanges;
    /** The DataSource to display. */
    get cdkVirtualForOf(): DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;
    set cdkVirtualForOf(value: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined);
    _cdkVirtualForOf: DataSource<T> | Observable<T[]> | NgIterable<T> | null | undefined;
    /**
     * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
     * the item and produces a value to be used as the item's identity when tracking changes.
     */
    get cdkVirtualForTrackBy(): TrackByFunction<T> | undefined;
    set cdkVirtualForTrackBy(fn: TrackByFunction<T> | undefined);
    private _cdkVirtualForTrackBy;
    /** The template used to stamp out new elements. */
    set cdkVirtualForTemplate(value: TemplateRef<CdkVirtualForOfContext<T>>);
    /**
     * The size of the cache used to store templates that are not being used for re-use later.
     * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
     */
    cdkVirtualForTemplateCacheSize: number;
    /** Emits whenever the data in the current DataSource changes. */
    dataStream: Observable<T[] | ReadonlyArray<T>>;
    /** The differ used to calculate changes to the data. */
    private _differ;
    /** The most recent data emitted from the DataSource. */
    private _data;
    /** The currently rendered items. */
    private _renderedItems;
    /** The currently rendered range of indices. */
    private _renderedRange;
    /**
     * The template cache used to hold on ot template instancess that have been stamped out, but don't
     * currently need to be rendered. These instances will be reused in the future rather than
     * stamping out brand new ones.
     */
    private _templateCache;
    /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
    private _needsUpdate;
    private _destroyed;
    constructor(
    /** The view container to add items to. */
    _viewContainerRef: ViewContainerRef, 
    /** The template to use when stamping out new items. */
    _template: TemplateRef<CdkVirtualForOfContext<T>>, 
    /** The set of available differs. */
    _differs: IterableDiffers, 
    /** The virtual scrolling viewport that these items are being rendered in. */
    _viewport: CdkVirtualScrollViewport, ngZone: NgZone);
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    measureRangeSize(range: ListRange, orientation: 'horizontal' | 'vertical'): number;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /** React to scroll state changes in the viewport. */
    private _onRenderedDataChange;
    /** Swap out one `DataSource` for another. */
    private _changeDataSource;
    /** Update the `CdkVirtualForOfContext` for all views. */
    private _updateContext;
    /** Apply changes to the DOM. */
    private _applyChanges;
    /** Cache the given detached view. */
    private _cacheView;
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    private _insertViewForNewItem;
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    private _updateComputedContextProperties;
    /** Creates a new embedded view and moves it to the given index */
    private _createEmbeddedViewAt;
    /** Inserts a recycled view from the cache at the given index. */
    private _insertViewFromCache;
    /** Detaches the embedded view at the given index. */
    private _detachView;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkVirtualForOf<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkVirtualForOf<any>, "[cdkVirtualFor][cdkVirtualForOf]", never, {
    "cdkVirtualForTemplateCacheSize": "cdkVirtualForTemplateCacheSize";
    "cdkVirtualForOf": "cdkVirtualForOf";
    "cdkVirtualForTrackBy": "cdkVirtualForTrackBy";
    "cdkVirtualForTemplate": "cdkVirtualForTemplate";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1mb3Itb2YuZC50cyIsInNvdXJjZXMiOlsidmlydHVhbC1mb3Itb2YuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZHQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQ29sbGVjdGlvblZpZXdlciwgRGF0YVNvdXJjZSwgTGlzdFJhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IERvQ2hlY2ssIEl0ZXJhYmxlRGlmZmVycywgTmdJdGVyYWJsZSwgTmdab25lLCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBUcmFja0J5RnVuY3Rpb24sIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwtdmlld3BvcnQnO1xuLyoqIFRoZSBjb250ZXh0IGZvciBhbiBpdGVtIHJlbmRlcmVkIGJ5IGBDZGtWaXJ0dWFsRm9yT2ZgICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIENka1ZpcnR1YWxGb3JPZkNvbnRleHQ8VD4gPSB7XG4gICAgLyoqIFRoZSBpdGVtIHZhbHVlLiAqL1xuICAgICRpbXBsaWNpdDogVDtcbiAgICAvKiogVGhlIERhdGFTb3VyY2UsIE9ic2VydmFibGUsIG9yIE5nSXRlcmFibGUgdGhhdCB3YXMgcGFzc2VkIHRvICpjZGtWaXJ0dWFsRm9yLiAqL1xuICAgIGNka1ZpcnR1YWxGb3JPZjogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IE5nSXRlcmFibGU8VD47XG4gICAgLyoqIFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgRGF0YVNvdXJjZS4gKi9cbiAgICBpbmRleDogbnVtYmVyO1xuICAgIC8qKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBEYXRhU291cmNlLiAqL1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgLyoqIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgRGF0YVNvdXJjZS4gKi9cbiAgICBmaXJzdDogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGlzIGlzIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIERhdGFTb3VyY2UuICovXG4gICAgbGFzdDogYm9vbGVhbjtcbiAgICAvKiogV2hldGhlciB0aGUgaW5kZXggaXMgZXZlbi4gKi9cbiAgICBldmVuOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBpbmRleCBpcyBvZGQuICovXG4gICAgb2RkOiBib29sZWFuO1xufTtcbi8qKlxuICogQSBkaXJlY3RpdmUgc2ltaWxhciB0byBgbmdGb3JPZmAgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIGRhdGEgaW5zaWRlIGEgdmlydHVhbCBzY3JvbGxpbmdcbiAqIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVmlydHVhbEZvck9mPFQ+IGltcGxlbWVudHMgQ29sbGVjdGlvblZpZXdlciwgRG9DaGVjaywgT25EZXN0cm95IHtcbiAgICAvKiogVGhlIHZpZXcgY29udGFpbmVyIHRvIGFkZCBpdGVtcyB0by4gKi9cbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmO1xuICAgIC8qKiBUaGUgdGVtcGxhdGUgdG8gdXNlIHdoZW4gc3RhbXBpbmcgb3V0IG5ldyBpdGVtcy4gKi9cbiAgICBwcml2YXRlIF90ZW1wbGF0ZTtcbiAgICAvKiogVGhlIHNldCBvZiBhdmFpbGFibGUgZGlmZmVycy4gKi9cbiAgICBwcml2YXRlIF9kaWZmZXJzO1xuICAgIC8qKiBUaGUgdmlydHVhbCBzY3JvbGxpbmcgdmlld3BvcnQgdGhhdCB0aGVzZSBpdGVtcyBhcmUgYmVpbmcgcmVuZGVyZWQgaW4uICovXG4gICAgcHJpdmF0ZSBfdmlld3BvcnQ7XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIHJlbmRlcmVkIHZpZXcgb2YgdGhlIGRhdGEgY2hhbmdlcy4gKi9cbiAgICB2aWV3Q2hhbmdlOiBTdWJqZWN0PExpc3RSYW5nZT47XG4gICAgLyoqIFN1YmplY3QgdGhhdCBlbWl0cyB3aGVuIGEgbmV3IERhdGFTb3VyY2UgaW5zdGFuY2UgaXMgZ2l2ZW4uICovXG4gICAgcHJpdmF0ZSBfZGF0YVNvdXJjZUNoYW5nZXM7XG4gICAgLyoqIFRoZSBEYXRhU291cmNlIHRvIGRpc3BsYXkuICovXG4gICAgZ2V0IGNka1ZpcnR1YWxGb3JPZigpOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgTmdJdGVyYWJsZTxUPiB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgc2V0IGNka1ZpcnR1YWxGb3JPZih2YWx1ZTogRGF0YVNvdXJjZTxUPiB8IE9ic2VydmFibGU8VFtdPiB8IE5nSXRlcmFibGU8VD4gfCBudWxsIHwgdW5kZWZpbmVkKTtcbiAgICBfY2RrVmlydHVhbEZvck9mOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgTmdJdGVyYWJsZTxUPiB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogVGhlIGBUcmFja0J5RnVuY3Rpb25gIHRvIHVzZSBmb3IgdHJhY2tpbmcgY2hhbmdlcy4gVGhlIGBUcmFja0J5RnVuY3Rpb25gIHRha2VzIHRoZSBpbmRleCBhbmRcbiAgICAgKiB0aGUgaXRlbSBhbmQgcHJvZHVjZXMgYSB2YWx1ZSB0byBiZSB1c2VkIGFzIHRoZSBpdGVtJ3MgaWRlbnRpdHkgd2hlbiB0cmFja2luZyBjaGFuZ2VzLlxuICAgICAqL1xuICAgIGdldCBjZGtWaXJ0dWFsRm9yVHJhY2tCeSgpOiBUcmFja0J5RnVuY3Rpb248VD4gfCB1bmRlZmluZWQ7XG4gICAgc2V0IGNka1ZpcnR1YWxGb3JUcmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4gfCB1bmRlZmluZWQpO1xuICAgIHByaXZhdGUgX2Nka1ZpcnR1YWxGb3JUcmFja0J5O1xuICAgIC8qKiBUaGUgdGVtcGxhdGUgdXNlZCB0byBzdGFtcCBvdXQgbmV3IGVsZW1lbnRzLiAqL1xuICAgIHNldCBjZGtWaXJ0dWFsRm9yVGVtcGxhdGUodmFsdWU6IFRlbXBsYXRlUmVmPENka1ZpcnR1YWxGb3JPZkNvbnRleHQ8VD4+KTtcbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgY2FjaGUgdXNlZCB0byBzdG9yZSB0ZW1wbGF0ZXMgdGhhdCBhcmUgbm90IGJlaW5nIHVzZWQgZm9yIHJlLXVzZSBsYXRlci5cbiAgICAgKiBTZXR0aW5nIHRoZSBjYWNoZSBzaXplIHRvIGAwYCB3aWxsIGRpc2FibGUgY2FjaGluZy4gRGVmYXVsdHMgdG8gMjAgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGNka1ZpcnR1YWxGb3JUZW1wbGF0ZUNhY2hlU2l6ZTogbnVtYmVyO1xuICAgIC8qKiBFbWl0cyB3aGVuZXZlciB0aGUgZGF0YSBpbiB0aGUgY3VycmVudCBEYXRhU291cmNlIGNoYW5nZXMuICovXG4gICAgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxUW10gfCBSZWFkb25seUFycmF5PFQ+PjtcbiAgICAvKiogVGhlIGRpZmZlciB1c2VkIHRvIGNhbGN1bGF0ZSBjaGFuZ2VzIHRvIHRoZSBkYXRhLiAqL1xuICAgIHByaXZhdGUgX2RpZmZlcjtcbiAgICAvKiogVGhlIG1vc3QgcmVjZW50IGRhdGEgZW1pdHRlZCBmcm9tIHRoZSBEYXRhU291cmNlLiAqL1xuICAgIHByaXZhdGUgX2RhdGE7XG4gICAgLyoqIFRoZSBjdXJyZW50bHkgcmVuZGVyZWQgaXRlbXMuICovXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRJdGVtcztcbiAgICAvKiogVGhlIGN1cnJlbnRseSByZW5kZXJlZCByYW5nZSBvZiBpbmRpY2VzLiAqL1xuICAgIHByaXZhdGUgX3JlbmRlcmVkUmFuZ2U7XG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGNhY2hlIHVzZWQgdG8gaG9sZCBvbiBvdCB0ZW1wbGF0ZSBpbnN0YW5jZXNzIHRoYXQgaGF2ZSBiZWVuIHN0YW1wZWQgb3V0LCBidXQgZG9uJ3RcbiAgICAgKiBjdXJyZW50bHkgbmVlZCB0byBiZSByZW5kZXJlZC4gVGhlc2UgaW5zdGFuY2VzIHdpbGwgYmUgcmV1c2VkIGluIHRoZSBmdXR1cmUgcmF0aGVyIHRoYW5cbiAgICAgKiBzdGFtcGluZyBvdXQgYnJhbmQgbmV3IG9uZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVDYWNoZTtcbiAgICAvKiogV2hldGhlciB0aGUgcmVuZGVyZWQgZGF0YSBzaG91bGQgYmUgdXBkYXRlZCBkdXJpbmcgdGhlIG5leHQgbmdEb0NoZWNrIGN5Y2xlLiAqL1xuICAgIHByaXZhdGUgX25lZWRzVXBkYXRlO1xuICAgIHByaXZhdGUgX2Rlc3Ryb3llZDtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogVGhlIHZpZXcgY29udGFpbmVyIHRvIGFkZCBpdGVtcyB0by4gKi9cbiAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgXG4gICAgLyoqIFRoZSB0ZW1wbGF0ZSB0byB1c2Ugd2hlbiBzdGFtcGluZyBvdXQgbmV3IGl0ZW1zLiAqL1xuICAgIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8Q2RrVmlydHVhbEZvck9mQ29udGV4dDxUPj4sIFxuICAgIC8qKiBUaGUgc2V0IG9mIGF2YWlsYWJsZSBkaWZmZXJzLiAqL1xuICAgIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIFxuICAgIC8qKiBUaGUgdmlydHVhbCBzY3JvbGxpbmcgdmlld3BvcnQgdGhhdCB0aGVzZSBpdGVtcyBhcmUgYmVpbmcgcmVuZGVyZWQgaW4uICovXG4gICAgX3ZpZXdwb3J0OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsIG5nWm9uZTogTmdab25lKTtcbiAgICAvKipcbiAgICAgKiBNZWFzdXJlcyB0aGUgY29tYmluZWQgc2l6ZSAod2lkdGggZm9yIGhvcml6b250YWwgb3JpZW50YXRpb24sIGhlaWdodCBmb3IgdmVydGljYWwpIG9mIGFsbCBpdGVtc1xuICAgICAqIGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcmFuZ2UgaW5jbHVkZXMgaXRlbXMgdGhhdCBhcmUgbm90IGN1cnJlbnRseVxuICAgICAqIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIG1lYXN1cmVSYW5nZVNpemUocmFuZ2U6IExpc3RSYW5nZSwgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcpOiBudW1iZXI7XG4gICAgbmdEb0NoZWNrKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKiogUmVhY3QgdG8gc2Nyb2xsIHN0YXRlIGNoYW5nZXMgaW4gdGhlIHZpZXdwb3J0LiAqL1xuICAgIHByaXZhdGUgX29uUmVuZGVyZWREYXRhQ2hhbmdlO1xuICAgIC8qKiBTd2FwIG91dCBvbmUgYERhdGFTb3VyY2VgIGZvciBhbm90aGVyLiAqL1xuICAgIHByaXZhdGUgX2NoYW5nZURhdGFTb3VyY2U7XG4gICAgLyoqIFVwZGF0ZSB0aGUgYENka1ZpcnR1YWxGb3JPZkNvbnRleHRgIGZvciBhbGwgdmlld3MuICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29udGV4dDtcbiAgICAvKiogQXBwbHkgY2hhbmdlcyB0byB0aGUgRE9NLiAqL1xuICAgIHByaXZhdGUgX2FwcGx5Q2hhbmdlcztcbiAgICAvKiogQ2FjaGUgdGhlIGdpdmVuIGRldGFjaGVkIHZpZXcuICovXG4gICAgcHJpdmF0ZSBfY2FjaGVWaWV3O1xuICAgIC8qKiBJbnNlcnRzIGEgdmlldyBmb3IgYSBuZXcgaXRlbSwgZWl0aGVyIGZyb20gdGhlIGNhY2hlIG9yIGJ5IGNyZWF0aW5nIGEgbmV3IG9uZS4gKi9cbiAgICBwcml2YXRlIF9pbnNlcnRWaWV3Rm9yTmV3SXRlbTtcbiAgICAvKiogVXBkYXRlIHRoZSBjb21wdXRlZCBwcm9wZXJ0aWVzIG9uIHRoZSBgQ2RrVmlydHVhbEZvck9mQ29udGV4dGAuICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29tcHV0ZWRDb250ZXh0UHJvcGVydGllcztcbiAgICAvKiogQ3JlYXRlcyBhIG5ldyBlbWJlZGRlZCB2aWV3IGFuZCBtb3ZlcyBpdCB0byB0aGUgZ2l2ZW4gaW5kZXggKi9cbiAgICBwcml2YXRlIF9jcmVhdGVFbWJlZGRlZFZpZXdBdDtcbiAgICAvKiogSW5zZXJ0cyBhIHJlY3ljbGVkIHZpZXcgZnJvbSB0aGUgY2FjaGUgYXQgdGhlIGdpdmVuIGluZGV4LiAqL1xuICAgIHByaXZhdGUgX2luc2VydFZpZXdGcm9tQ2FjaGU7XG4gICAgLyoqIERldGFjaGVzIHRoZSBlbWJlZGRlZCB2aWV3IGF0IHRoZSBnaXZlbiBpbmRleC4gKi9cbiAgICBwcml2YXRlIF9kZXRhY2hWaWV3O1xufVxuIl19