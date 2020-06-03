/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentObserver } from '@angular/cdk/observers';
import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { AriaLivePoliteness, LiveAnnouncerDefaultOptions } from './live-announcer-tokens';
import * as ɵngcc0 from '@angular/core';
export declare class LiveAnnouncer implements OnDestroy {
    private _ngZone;
    private _defaultOptions?;
    private _liveElement;
    private _document;
    private _previousTimeout?;
    constructor(elementToken: any, _ngZone: NgZone, _document: any, _defaultOptions?: LiveAnnouncerDefaultOptions | undefined);
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string): Promise<void>;
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @param politeness The politeness of the announcer element.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string, politeness?: AriaLivePoliteness): Promise<void>;
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @param duration Time in milliseconds after which to clear out the announcer element. Note
     *   that this takes effect after the message has been added to the DOM, which can be up to
     *   100ms after `announce` has been called.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string, duration?: number): Promise<void>;
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader.
     * @param politeness The politeness of the announcer element.
     * @param duration Time in milliseconds after which to clear out the announcer element. Note
     *   that this takes effect after the message has been added to the DOM, which can be up to
     *   100ms after `announce` has been called.
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    announce(message: string, politeness?: AriaLivePoliteness, duration?: number): Promise<void>;
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    clear(): void;
    ngOnDestroy(): void;
    private _createLiveElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LiveAnnouncer>;
}
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
export declare class CdkAriaLive implements OnDestroy {
    private _elementRef;
    private _liveAnnouncer;
    private _contentObserver;
    private _ngZone;
    /** The aria-live politeness level to use when announcing messages. */
    get politeness(): AriaLivePoliteness;
    set politeness(value: AriaLivePoliteness);
    private _politeness;
    private _previousAnnouncedText?;
    private _subscription;
    constructor(_elementRef: ElementRef, _liveAnnouncer: LiveAnnouncer, _contentObserver: ContentObserver, _ngZone: NgZone);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkAriaLive>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkAriaLive, "[cdkAriaLive]", ["cdkAriaLive"], {
    "politeness": "cdkAriaLive";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS1hbm5vdW5jZXIuZC50cyIsInNvdXJjZXMiOlsibGl2ZS1hbm5vdW5jZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBDb250ZW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcmlhTGl2ZVBvbGl0ZW5lc3MsIExpdmVBbm5vdW5jZXJEZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vbGl2ZS1hbm5vdW5jZXItdG9rZW5zJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExpdmVBbm5vdW5jZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9kZWZhdWx0T3B0aW9ucz87XG4gICAgcHJpdmF0ZSBfbGl2ZUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfZG9jdW1lbnQ7XG4gICAgcHJpdmF0ZSBfcHJldmlvdXNUaW1lb3V0PztcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50VG9rZW46IGFueSwgX25nWm9uZTogTmdab25lLCBfZG9jdW1lbnQ6IGFueSwgX2RlZmF1bHRPcHRpb25zPzogTGl2ZUFubm91bmNlckRlZmF1bHRPcHRpb25zIHwgdW5kZWZpbmVkKTtcbiAgICAvKipcbiAgICAgKiBBbm5vdW5jZXMgYSBtZXNzYWdlIHRvIHNjcmVlbnJlYWRlcnMuXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBhbm5vdW5jZWQgdG8gdGhlIHNjcmVlbnJlYWRlci5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIHRoZSBtZXNzYWdlIGlzIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgYW5ub3VuY2UobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBBbm5vdW5jZXMgYSBtZXNzYWdlIHRvIHNjcmVlbnJlYWRlcnMuXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgTWVzc2FnZSB0byBiZSBhbm5vdW5jZWQgdG8gdGhlIHNjcmVlbnJlYWRlci5cbiAgICAgKiBAcGFyYW0gcG9saXRlbmVzcyBUaGUgcG9saXRlbmVzcyBvZiB0aGUgYW5ub3VuY2VyIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiB0aGUgbWVzc2FnZSBpcyBhZGRlZCB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGFubm91bmNlKG1lc3NhZ2U6IHN0cmluZywgcG9saXRlbmVzcz86IEFyaWFMaXZlUG9saXRlbmVzcyk6IFByb21pc2U8dm9pZD47XG4gICAgLyoqXG4gICAgICogQW5ub3VuY2VzIGEgbWVzc2FnZSB0byBzY3JlZW5yZWFkZXJzLlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgYW5ub3VuY2VkIHRvIHRoZSBzY3JlZW5yZWFkZXIuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGFmdGVyIHdoaWNoIHRvIGNsZWFyIG91dCB0aGUgYW5ub3VuY2VyIGVsZW1lbnQuIE5vdGVcbiAgICAgKiAgIHRoYXQgdGhpcyB0YWtlcyBlZmZlY3QgYWZ0ZXIgdGhlIG1lc3NhZ2UgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIERPTSwgd2hpY2ggY2FuIGJlIHVwIHRvXG4gICAgICogICAxMDBtcyBhZnRlciBgYW5ub3VuY2VgIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aGVuIHRoZSBtZXNzYWdlIGlzIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgYW5ub3VuY2UobWVzc2FnZTogc3RyaW5nLCBkdXJhdGlvbj86IG51bWJlcik6IFByb21pc2U8dm9pZD47XG4gICAgLyoqXG4gICAgICogQW5ub3VuY2VzIGEgbWVzc2FnZSB0byBzY3JlZW5yZWFkZXJzLlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIE1lc3NhZ2UgdG8gYmUgYW5ub3VuY2VkIHRvIHRoZSBzY3JlZW5yZWFkZXIuXG4gICAgICogQHBhcmFtIHBvbGl0ZW5lc3MgVGhlIHBvbGl0ZW5lc3Mgb2YgdGhlIGFubm91bmNlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBUaW1lIGluIG1pbGxpc2Vjb25kcyBhZnRlciB3aGljaCB0byBjbGVhciBvdXQgdGhlIGFubm91bmNlciBlbGVtZW50LiBOb3RlXG4gICAgICogICB0aGF0IHRoaXMgdGFrZXMgZWZmZWN0IGFmdGVyIHRoZSBtZXNzYWdlIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBET00sIHdoaWNoIGNhbiBiZSB1cCB0b1xuICAgICAqICAgMTAwbXMgYWZ0ZXIgYGFubm91bmNlYCBoYXMgYmVlbiBjYWxsZWQuXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2hlbiB0aGUgbWVzc2FnZSBpcyBhZGRlZCB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIGFubm91bmNlKG1lc3NhZ2U6IHN0cmluZywgcG9saXRlbmVzcz86IEFyaWFMaXZlUG9saXRlbmVzcywgZHVyYXRpb24/OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgY3VycmVudCB0ZXh0IGZyb20gdGhlIGFubm91bmNlciBlbGVtZW50LiBDYW4gYmUgdXNlZCB0byBwcmV2ZW50XG4gICAgICogc2NyZWVuIHJlYWRlcnMgZnJvbSByZWFkaW5nIHRoZSB0ZXh0IG91dCBhZ2FpbiB3aGlsZSB0aGUgdXNlciBpcyBnb2luZ1xuICAgICAqIHRocm91Z2ggdGhlIHBhZ2UgbGFuZG1hcmtzLlxuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIF9jcmVhdGVMaXZlRWxlbWVudDtcbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCB3b3JrcyBzaW1pbGFybHkgdG8gYXJpYS1saXZlLCBidXQgdXNlcyB0aGUgTGl2ZUFubm91bmNlciB0byBlbnN1cmUgY29tcGF0aWJpbGl0eVxuICogd2l0aCBhIHdpZGVyIHJhbmdlIG9mIGJyb3dzZXJzIGFuZCBzY3JlZW4gcmVhZGVycy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrQXJpYUxpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfbGl2ZUFubm91bmNlcjtcbiAgICBwcml2YXRlIF9jb250ZW50T2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBfbmdab25lO1xuICAgIC8qKiBUaGUgYXJpYS1saXZlIHBvbGl0ZW5lc3MgbGV2ZWwgdG8gdXNlIHdoZW4gYW5ub3VuY2luZyBtZXNzYWdlcy4gKi9cbiAgICBnZXQgcG9saXRlbmVzcygpOiBBcmlhTGl2ZVBvbGl0ZW5lc3M7XG4gICAgc2V0IHBvbGl0ZW5lc3ModmFsdWU6IEFyaWFMaXZlUG9saXRlbmVzcyk7XG4gICAgcHJpdmF0ZSBfcG9saXRlbmVzcztcbiAgICBwcml2YXRlIF9wcmV2aW91c0Fubm91bmNlZFRleHQ/O1xuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgX2xpdmVBbm5vdW5jZXI6IExpdmVBbm5vdW5jZXIsIF9jb250ZW50T2JzZXJ2ZXI6IENvbnRlbnRPYnNlcnZlciwgX25nWm9uZTogTmdab25lKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19