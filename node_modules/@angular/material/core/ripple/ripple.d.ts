/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, InjectionToken, NgZone, OnDestroy, OnInit } from '@angular/core';
import { RippleRef } from './ripple-ref';
import { RippleAnimationConfig, RippleConfig, RippleTarget } from './ripple-renderer';
/** Configurable options for `matRipple`. */
import * as ɵngcc0 from '@angular/core';
export interface RippleGlobalOptions {
    /**
     * Whether ripples should be disabled. Ripples can be still launched manually by using
     * the `launch()` method. Therefore focus indicators will still show up.
     */
    disabled?: boolean;
    /**
     * Configuration for the animation duration of the ripples. There are two phases with different
     * durations for the ripples. The animation durations will be overwritten if the
     * `NoopAnimationsModule` is being used.
     */
    animation?: RippleAnimationConfig;
    /**
     * Whether ripples should start fading out immediately after the mouse or touch is released. By
     * default, ripples will wait for the enter animation to complete and for mouse or touch release.
     */
    terminateOnPointerUp?: boolean;
}
/** Injection token that can be used to specify the global ripple options. */
export declare const MAT_RIPPLE_GLOBAL_OPTIONS: InjectionToken<RippleGlobalOptions>;
export declare class MatRipple implements OnInit, OnDestroy, RippleTarget {
    private _elementRef;
    private _animationMode?;
    /** Custom color for all ripples. */
    color: string;
    /** Whether the ripples should be visible outside the component's bounds. */
    unbounded: boolean;
    /**
     * Whether the ripple always originates from the center of the host element's bounds, rather
     * than originating from the location of the click event.
     */
    centered: boolean;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */
    radius: number;
    /**
     * Configuration for the ripple animation. Allows modifying the enter and exit animation
     * duration of the ripples. The animation durations will be overwritten if the
     * `NoopAnimationsModule` is being used.
     */
    animation: RippleAnimationConfig;
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     */
    get trigger(): HTMLElement;
    set trigger(trigger: HTMLElement);
    private _trigger;
    /** Renderer for the ripple DOM manipulations. */
    private _rippleRenderer;
    /** Options that are set globally for all ripples. */
    private _globalOptions;
    /** Whether ripple directive is initialized and the input bindings are set. */
    private _isInitialized;
    constructor(_elementRef: ElementRef<HTMLElement>, ngZone: NgZone, platform: Platform, globalOptions?: RippleGlobalOptions, _animationMode?: string | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Fades out all currently showing ripple elements. */
    fadeOutAll(): void;
    /**
     * Ripple configuration from the directive's input values.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleConfig(): RippleConfig;
    /**
     * Whether ripples on pointer-down are disabled or not.
     * @docs-private Implemented as part of RippleTarget
     */
    get rippleDisabled(): boolean;
    /** Sets up the trigger event listeners if ripples are enabled. */
    private _setupTriggerEventsIfEnabled;
    /**
     * Launches a manual ripple using the specified ripple configuration.
     * @param config Configuration for the manual ripple.
     */
    launch(config: RippleConfig): RippleRef;
    /**
     * Launches a manual ripple at the specified coordinates within the element.
     * @param x Coordinate within the element, along the X axis at which to fade-in the ripple.
     * @param y Coordinate within the element, along the Y axis at which to fade-in the ripple.
     * @param config Optional ripple configuration for the manual ripple.
     */
    launch(x: number, y: number, config?: RippleConfig): RippleRef;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatRipple>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatRipple, "[mat-ripple], [matRipple]", ["matRipple"], {
    "radius": "matRippleRadius";
    "disabled": "matRippleDisabled";
    "trigger": "matRippleTrigger";
    "color": "matRippleColor";
    "unbounded": "matRippleUnbounded";
    "centered": "matRippleCentered";
    "animation": "matRippleAnimation";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmQudHMiLCJzb3VyY2VzIjpbInJpcHBsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGlvblRva2VuLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSaXBwbGVSZWYgfSBmcm9tICcuL3JpcHBsZS1yZWYnO1xuaW1wb3J0IHsgUmlwcGxlQW5pbWF0aW9uQ29uZmlnLCBSaXBwbGVDb25maWcsIFJpcHBsZVRhcmdldCB9IGZyb20gJy4vcmlwcGxlLXJlbmRlcmVyJztcbi8qKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgYG1hdFJpcHBsZWAuICovXG5leHBvcnQgaW50ZXJmYWNlIFJpcHBsZUdsb2JhbE9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgcmlwcGxlcyBzaG91bGQgYmUgZGlzYWJsZWQuIFJpcHBsZXMgY2FuIGJlIHN0aWxsIGxhdW5jaGVkIG1hbnVhbGx5IGJ5IHVzaW5nXG4gICAgICogdGhlIGBsYXVuY2goKWAgbWV0aG9kLiBUaGVyZWZvcmUgZm9jdXMgaW5kaWNhdG9ycyB3aWxsIHN0aWxsIHNob3cgdXAuXG4gICAgICovXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBhbmltYXRpb24gZHVyYXRpb24gb2YgdGhlIHJpcHBsZXMuIFRoZXJlIGFyZSB0d28gcGhhc2VzIHdpdGggZGlmZmVyZW50XG4gICAgICogZHVyYXRpb25zIGZvciB0aGUgcmlwcGxlcy4gVGhlIGFuaW1hdGlvbiBkdXJhdGlvbnMgd2lsbCBiZSBvdmVyd3JpdHRlbiBpZiB0aGVcbiAgICAgKiBgTm9vcEFuaW1hdGlvbnNNb2R1bGVgIGlzIGJlaW5nIHVzZWQuXG4gICAgICovXG4gICAgYW5pbWF0aW9uPzogUmlwcGxlQW5pbWF0aW9uQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgcmlwcGxlcyBzaG91bGQgc3RhcnQgZmFkaW5nIG91dCBpbW1lZGlhdGVseSBhZnRlciB0aGUgbW91c2Ugb3IgdG91Y2ggaXMgcmVsZWFzZWQuIEJ5XG4gICAgICogZGVmYXVsdCwgcmlwcGxlcyB3aWxsIHdhaXQgZm9yIHRoZSBlbnRlciBhbmltYXRpb24gdG8gY29tcGxldGUgYW5kIGZvciBtb3VzZSBvciB0b3VjaCByZWxlYXNlLlxuICAgICAqL1xuICAgIHRlcm1pbmF0ZU9uUG9pbnRlclVwPzogYm9vbGVhbjtcbn1cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSBnbG9iYWwgcmlwcGxlIG9wdGlvbnMuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBNQVRfUklQUExFX0dMT0JBTF9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxSaXBwbGVHbG9iYWxPcHRpb25zPjtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hdFJpcHBsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBSaXBwbGVUYXJnZXQge1xuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uTW9kZT87XG4gICAgLyoqIEN1c3RvbSBjb2xvciBmb3IgYWxsIHJpcHBsZXMuICovXG4gICAgY29sb3I6IHN0cmluZztcbiAgICAvKiogV2hldGhlciB0aGUgcmlwcGxlcyBzaG91bGQgYmUgdmlzaWJsZSBvdXRzaWRlIHRoZSBjb21wb25lbnQncyBib3VuZHMuICovXG4gICAgdW5ib3VuZGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIHJpcHBsZSBhbHdheXMgb3JpZ2luYXRlcyBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGhvc3QgZWxlbWVudCdzIGJvdW5kcywgcmF0aGVyXG4gICAgICogdGhhbiBvcmlnaW5hdGluZyBmcm9tIHRoZSBsb2NhdGlvbiBvZiB0aGUgY2xpY2sgZXZlbnQuXG4gICAgICovXG4gICAgY2VudGVyZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgc2V0LCB0aGUgcmFkaXVzIGluIHBpeGVscyBvZiBmb3JlZ3JvdW5kIHJpcHBsZXMgd2hlbiBmdWxseSBleHBhbmRlZC4gSWYgdW5zZXQsIHRoZSByYWRpdXNcbiAgICAgKiB3aWxsIGJlIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIHJpcHBsZSB0byB0aGUgZnVydGhlc3QgY29ybmVyIG9mIHRoZSBob3N0IGVsZW1lbnQnc1xuICAgICAqIGJvdW5kaW5nIHJlY3RhbmdsZS5cbiAgICAgKi9cbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBDb25maWd1cmF0aW9uIGZvciB0aGUgcmlwcGxlIGFuaW1hdGlvbi4gQWxsb3dzIG1vZGlmeWluZyB0aGUgZW50ZXIgYW5kIGV4aXQgYW5pbWF0aW9uXG4gICAgICogZHVyYXRpb24gb2YgdGhlIHJpcHBsZXMuIFRoZSBhbmltYXRpb24gZHVyYXRpb25zIHdpbGwgYmUgb3ZlcndyaXR0ZW4gaWYgdGhlXG4gICAgICogYE5vb3BBbmltYXRpb25zTW9kdWxlYCBpcyBiZWluZyB1c2VkLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbjogUmlwcGxlQW5pbWF0aW9uQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgY2xpY2sgZXZlbnRzIHdpbGwgbm90IHRyaWdnZXIgdGhlIHJpcHBsZS4gUmlwcGxlcyBjYW4gYmUgc3RpbGwgbGF1bmNoZWQgbWFudWFsbHlcbiAgICAgKiBieSB1c2luZyB0aGUgYGxhdW5jaCgpYCBtZXRob2QuXG4gICAgICovXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKTtcbiAgICBwcml2YXRlIF9kaXNhYmxlZDtcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHRyaWdnZXJzIHRoZSByaXBwbGUgd2hlbiBjbGljayBldmVudHMgYXJlIHJlY2VpdmVkLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBkaXJlY3RpdmUncyBob3N0IGVsZW1lbnQuXG4gICAgICovXG4gICAgZ2V0IHRyaWdnZXIoKTogSFRNTEVsZW1lbnQ7XG4gICAgc2V0IHRyaWdnZXIodHJpZ2dlcjogSFRNTEVsZW1lbnQpO1xuICAgIHByaXZhdGUgX3RyaWdnZXI7XG4gICAgLyoqIFJlbmRlcmVyIGZvciB0aGUgcmlwcGxlIERPTSBtYW5pcHVsYXRpb25zLiAqL1xuICAgIHByaXZhdGUgX3JpcHBsZVJlbmRlcmVyO1xuICAgIC8qKiBPcHRpb25zIHRoYXQgYXJlIHNldCBnbG9iYWxseSBmb3IgYWxsIHJpcHBsZXMuICovXG4gICAgcHJpdmF0ZSBfZ2xvYmFsT3B0aW9ucztcbiAgICAvKiogV2hldGhlciByaXBwbGUgZGlyZWN0aXZlIGlzIGluaXRpYWxpemVkIGFuZCB0aGUgaW5wdXQgYmluZGluZ3MgYXJlIHNldC4gKi9cbiAgICBwcml2YXRlIF9pc0luaXRpYWxpemVkO1xuICAgIGNvbnN0cnVjdG9yKF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgbmdab25lOiBOZ1pvbmUsIHBsYXRmb3JtOiBQbGF0Zm9ybSwgZ2xvYmFsT3B0aW9ucz86IFJpcHBsZUdsb2JhbE9wdGlvbnMsIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqIEZhZGVzIG91dCBhbGwgY3VycmVudGx5IHNob3dpbmcgcmlwcGxlIGVsZW1lbnRzLiAqL1xuICAgIGZhZGVPdXRBbGwoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSaXBwbGUgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBkaXJlY3RpdmUncyBpbnB1dCB2YWx1ZXMuXG4gICAgICogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFJpcHBsZVRhcmdldFxuICAgICAqL1xuICAgIGdldCByaXBwbGVDb25maWcoKTogUmlwcGxlQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgcmlwcGxlcyBvbiBwb2ludGVyLWRvd24gYXJlIGRpc2FibGVkIG9yIG5vdC5cbiAgICAgKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgUmlwcGxlVGFyZ2V0XG4gICAgICovXG4gICAgZ2V0IHJpcHBsZURpc2FibGVkKCk6IGJvb2xlYW47XG4gICAgLyoqIFNldHMgdXAgdGhlIHRyaWdnZXIgZXZlbnQgbGlzdGVuZXJzIGlmIHJpcHBsZXMgYXJlIGVuYWJsZWQuICovXG4gICAgcHJpdmF0ZSBfc2V0dXBUcmlnZ2VyRXZlbnRzSWZFbmFibGVkO1xuICAgIC8qKlxuICAgICAqIExhdW5jaGVzIGEgbWFudWFsIHJpcHBsZSB1c2luZyB0aGUgc3BlY2lmaWVkIHJpcHBsZSBjb25maWd1cmF0aW9uLlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29uZmlndXJhdGlvbiBmb3IgdGhlIG1hbnVhbCByaXBwbGUuXG4gICAgICovXG4gICAgbGF1bmNoKGNvbmZpZzogUmlwcGxlQ29uZmlnKTogUmlwcGxlUmVmO1xuICAgIC8qKlxuICAgICAqIExhdW5jaGVzIGEgbWFudWFsIHJpcHBsZSBhdCB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzIHdpdGhpbiB0aGUgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0geCBDb29yZGluYXRlIHdpdGhpbiB0aGUgZWxlbWVudCwgYWxvbmcgdGhlIFggYXhpcyBhdCB3aGljaCB0byBmYWRlLWluIHRoZSByaXBwbGUuXG4gICAgICogQHBhcmFtIHkgQ29vcmRpbmF0ZSB3aXRoaW4gdGhlIGVsZW1lbnQsIGFsb25nIHRoZSBZIGF4aXMgYXQgd2hpY2ggdG8gZmFkZS1pbiB0aGUgcmlwcGxlLlxuICAgICAqIEBwYXJhbSBjb25maWcgT3B0aW9uYWwgcmlwcGxlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBtYW51YWwgcmlwcGxlLlxuICAgICAqL1xuICAgIGxhdW5jaCh4OiBudW1iZXIsIHk6IG51bWJlciwgY29uZmlnPzogUmlwcGxlQ29uZmlnKTogUmlwcGxlUmVmO1xufVxuIl19