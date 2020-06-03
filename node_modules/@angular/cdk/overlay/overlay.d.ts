/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Location } from '@angular/common';
import { ComponentFactoryResolver, Injector, NgZone } from '@angular/core';
import { OverlayKeyboardDispatcher } from './keyboard/overlay-keyboard-dispatcher';
import { OverlayConfig } from './overlay-config';
import { OverlayContainer } from './overlay-container';
import { OverlayRef } from './overlay-ref';
import { OverlayPositionBuilder } from './position/overlay-position-builder';
import { ScrollStrategyOptions } from './scroll/index';
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Overlay {
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies: ScrollStrategyOptions;
    private _overlayContainer;
    private _componentFactoryResolver;
    private _positionBuilder;
    private _keyboardDispatcher;
    private _injector;
    private _ngZone;
    private _document;
    private _directionality;
    private _location?;
    private _appRef;
    constructor(
    /** Scrolling strategies that can be used when creating an overlay. */
    scrollStrategies: ScrollStrategyOptions, _overlayContainer: OverlayContainer, _componentFactoryResolver: ComponentFactoryResolver, _positionBuilder: OverlayPositionBuilder, _keyboardDispatcher: OverlayKeyboardDispatcher, _injector: Injector, _ngZone: NgZone, _document: any, _directionality: Directionality, _location?: Location | undefined);
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    create(config?: OverlayConfig): OverlayRef;
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    position(): OverlayPositionBuilder;
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    private _createPaneElement;
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @returns Newly-create host element.
     */
    private _createHostElement;
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal outlet.
     * @returns A portal outlet for the given DOM element.
     */
    private _createPortalOutlet;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Overlay>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Overlay>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5kLnRzIiwic291cmNlcyI6WyJvdmVybGF5LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciB9IGZyb20gJy4va2V5Ym9hcmQvb3ZlcmxheS1rZXlib2FyZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IE92ZXJsYXlDb25maWcgfSBmcm9tICcuL292ZXJsYXktY29uZmlnJztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcbmltcG9ydCB7IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIgfSBmcm9tICcuL3Bvc2l0aW9uL292ZXJsYXktcG9zaXRpb24tYnVpbGRlcic7XG5pbXBvcnQgeyBTY3JvbGxTdHJhdGVneU9wdGlvbnMgfSBmcm9tICcuL3Njcm9sbC9pbmRleCc7XG4vKipcbiAqIFNlcnZpY2UgdG8gY3JlYXRlIE92ZXJsYXlzLiBPdmVybGF5cyBhcmUgZHluYW1pY2FsbHkgYWRkZWQgcGllY2VzIG9mIGZsb2F0aW5nIFVJLCBtZWFudCB0byBiZVxuICogdXNlZCBhcyBhIGxvdy1sZXZlbCBidWlsZGluZyBibG9jayBmb3Igb3RoZXIgY29tcG9uZW50cy4gRGlhbG9ncywgdG9vbHRpcHMsIG1lbnVzLFxuICogc2VsZWN0cywgZXRjLiBjYW4gYWxsIGJlIGJ1aWx0IHVzaW5nIG92ZXJsYXlzLiBUaGUgc2VydmljZSBzaG91bGQgcHJpbWFyaWx5IGJlIHVzZWQgYnkgYXV0aG9yc1xuICogb2YgcmUtdXNhYmxlIGNvbXBvbmVudHMgcmF0aGVyIHRoYW4gZGV2ZWxvcGVycyBidWlsZGluZyBlbmQtdXNlciBhcHBsaWNhdGlvbnMuXG4gKlxuICogQW4gb3ZlcmxheSAqaXMqIGEgUG9ydGFsT3V0bGV0LCBzbyBhbnkga2luZCBvZiBQb3J0YWwgY2FuIGJlIGxvYWRlZCBpbnRvIG9uZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3ZlcmxheSB7XG4gICAgLyoqIFNjcm9sbGluZyBzdHJhdGVnaWVzIHRoYXQgY2FuIGJlIHVzZWQgd2hlbiBjcmVhdGluZyBhbiBvdmVybGF5LiAqL1xuICAgIHNjcm9sbFN0cmF0ZWdpZXM6IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucztcbiAgICBwcml2YXRlIF9vdmVybGF5Q29udGFpbmVyO1xuICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjtcbiAgICBwcml2YXRlIF9wb3NpdGlvbkJ1aWxkZXI7XG4gICAgcHJpdmF0ZSBfa2V5Ym9hcmREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgX2luamVjdG9yO1xuICAgIHByaXZhdGUgX25nWm9uZTtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICBwcml2YXRlIF9kaXJlY3Rpb25hbGl0eTtcbiAgICBwcml2YXRlIF9sb2NhdGlvbj87XG4gICAgcHJpdmF0ZSBfYXBwUmVmO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBTY3JvbGxpbmcgc3RyYXRlZ2llcyB0aGF0IGNhbiBiZSB1c2VkIHdoZW4gY3JlYXRpbmcgYW4gb3ZlcmxheS4gKi9cbiAgICBzY3JvbGxTdHJhdGVnaWVzOiBTY3JvbGxTdHJhdGVneU9wdGlvbnMsIF9vdmVybGF5Q29udGFpbmVyOiBPdmVybGF5Q29udGFpbmVyLCBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIF9wb3NpdGlvbkJ1aWxkZXI6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsIF9rZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsIF9pbmplY3RvcjogSW5qZWN0b3IsIF9uZ1pvbmU6IE5nWm9uZSwgX2RvY3VtZW50OiBhbnksIF9kaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksIF9sb2NhdGlvbj86IExvY2F0aW9uIHwgdW5kZWZpbmVkKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIG92ZXJsYXkuXG4gICAgICogQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uIGFwcGxpZWQgdG8gdGhlIG92ZXJsYXkuXG4gICAgICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSBjcmVhdGVkIG92ZXJsYXkuXG4gICAgICovXG4gICAgY3JlYXRlKGNvbmZpZz86IE92ZXJsYXlDb25maWcpOiBPdmVybGF5UmVmO1xuICAgIC8qKlxuICAgICAqIEdldHMgYSBwb3NpdGlvbiBidWlsZGVyIHRoYXQgY2FuIGJlIHVzZWQsIHZpYSBmbHVlbnQgQVBJLFxuICAgICAqIHRvIGNvbnN0cnVjdCBhbmQgY29uZmlndXJlIGEgcG9zaXRpb24gc3RyYXRlZ3kuXG4gICAgICogQHJldHVybnMgQW4gb3ZlcmxheSBwb3NpdGlvbiBidWlsZGVyLlxuICAgICAqL1xuICAgIHBvc2l0aW9uKCk6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgRE9NIGVsZW1lbnQgZm9yIGFuIG92ZXJsYXkgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZWQgcGFuZSBlbGVtZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3JlYXRlUGFuZUVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRoYXQgd3JhcHMgYXJvdW5kIGFuIG92ZXJsYXlcbiAgICAgKiBhbmQgY2FuIGJlIHVzZWQgZm9yIGFkdmFuY2VkIHBvc2l0aW9uaW5nLlxuICAgICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZSBob3N0IGVsZW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY3JlYXRlSG9zdEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgRG9tUG9ydGFsT3V0bGV0IGludG8gd2hpY2ggdGhlIG92ZXJsYXkgY29udGVudCBjYW4gYmUgbG9hZGVkLlxuICAgICAqIEBwYXJhbSBwYW5lIFRoZSBET00gZWxlbWVudCB0byB0dXJuIGludG8gYSBwb3J0YWwgb3V0bGV0LlxuICAgICAqIEByZXR1cm5zIEEgcG9ydGFsIG91dGxldCBmb3IgdGhlIGdpdmVuIERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NyZWF0ZVBvcnRhbE91dGxldDtcbn1cbiJdfQ==