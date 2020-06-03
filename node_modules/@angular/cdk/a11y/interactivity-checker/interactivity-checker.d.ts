/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Platform } from '@angular/cdk/platform';
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
import * as ɵngcc0 from '@angular/core';
export declare class InteractivityChecker {
    private _platform;
    constructor(_platform: Platform);
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element: HTMLElement): boolean;
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element: HTMLElement): boolean;
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element: HTMLElement): boolean;
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    isFocusable(element: HTMLElement): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InteractivityChecker>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpdml0eS1jaGVja2VyLmQudHMiLCJzb3VyY2VzIjpbImludGVyYWN0aXZpdHktY2hlY2tlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG4vKipcbiAqIFV0aWxpdHkgZm9yIGNoZWNraW5nIHRoZSBpbnRlcmFjdGl2aXR5IG9mIGFuIGVsZW1lbnQsIHN1Y2ggYXMgd2hldGhlciBpcyBpcyBmb2N1c2FibGUgb3JcbiAqIHRhYmJhYmxlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnRlcmFjdGl2aXR5Q2hlY2tlciB7XG4gICAgcHJpdmF0ZSBfcGxhdGZvcm07XG4gICAgY29uc3RydWN0b3IoX3BsYXRmb3JtOiBQbGF0Zm9ybSk7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgZGlzYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBpc0Rpc2FibGVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBpcyB2aXNpYmxlIGZvciB0aGUgcHVycG9zZXMgb2YgaW50ZXJhY3Rpdml0eS5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBjYXB0dXJlIHN0YXRlcyBsaWtlIGBkaXNwbGF5OiBub25lYCBhbmQgYHZpc2liaWxpdHk6IGhpZGRlbmAsIGJ1dCBub3QgdGhpbmdzIGxpa2VcbiAgICAgKiBiZWluZyBjbGlwcGVkIGJ5IGFuIGBvdmVyZmxvdzogaGlkZGVuYCBwYXJlbnQgb3IgYmVpbmcgb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHZpc2libGUuXG4gICAgICovXG4gICAgaXNWaXNpYmxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBjYW4gYmUgcmVhY2hlZCB2aWEgVGFiIGtleS5cbiAgICAgKiBBc3N1bWVzIHRoYXQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBjaGVja2VkIHdpdGggaXNGb2N1c2FibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXG4gICAgICogQHJldHVybnMgV2hldGhlciB0aGUgZWxlbWVudCBpcyB0YWJiYWJsZS5cbiAgICAgKi9cbiAgICBpc1RhYmJhYmxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdoZXRoZXIgYW4gZWxlbWVudCBjYW4gYmUgZm9jdXNlZCBieSB0aGUgdXNlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cbiAgICAgKiBAcmV0dXJucyBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZS5cbiAgICAgKi9cbiAgICBpc0ZvY3VzYWJsZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG59XG4iXX0=