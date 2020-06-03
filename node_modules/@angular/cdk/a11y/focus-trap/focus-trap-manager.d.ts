/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A FocusTrap managed by FocusTrapManager.
 * Implemented by ConfigurableFocusTrap to avoid circular dependency.
 */
import * as ɵngcc0 from '@angular/core';
export interface ManagedFocusTrap {
    _enable(): void;
    _disable(): void;
    focusInitialElementWhenReady(): Promise<boolean>;
}
/** Injectable that ensures only the most recently enabled FocusTrap is active. */
export declare class FocusTrapManager {
    private _focusTrapStack;
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap: ManagedFocusTrap): void;
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap: ManagedFocusTrap): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FocusTrapManager>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC1tYW5hZ2VyLmQudHMiLCJzb3VyY2VzIjpbImZvY3VzLXRyYXAtbWFuYWdlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBBIEZvY3VzVHJhcCBtYW5hZ2VkIGJ5IEZvY3VzVHJhcE1hbmFnZXIuXG4gKiBJbXBsZW1lbnRlZCBieSBDb25maWd1cmFibGVGb2N1c1RyYXAgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkRm9jdXNUcmFwIHtcbiAgICBfZW5hYmxlKCk6IHZvaWQ7XG4gICAgX2Rpc2FibGUoKTogdm9pZDtcbiAgICBmb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk6IFByb21pc2U8Ym9vbGVhbj47XG59XG4vKiogSW5qZWN0YWJsZSB0aGF0IGVuc3VyZXMgb25seSB0aGUgbW9zdCByZWNlbnRseSBlbmFibGVkIEZvY3VzVHJhcCBpcyBhY3RpdmUuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGb2N1c1RyYXBNYW5hZ2VyIHtcbiAgICBwcml2YXRlIF9mb2N1c1RyYXBTdGFjaztcbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGUgRm9jdXNUcmFwIGF0IHRoZSB0b3Agb2YgdGhlIHN0YWNrLCBhbmQgdGhlbiBwdXNoZXNcbiAgICAgKiB0aGUgbmV3IEZvY3VzVHJhcCBvbnRvIHRoZSBzdGFjay5cbiAgICAgKi9cbiAgICByZWdpc3Rlcihmb2N1c1RyYXA6IE1hbmFnZWRGb2N1c1RyYXApOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIEZvY3VzVHJhcCBmcm9tIHRoZSBzdGFjaywgYW5kIGFjdGl2YXRlcyB0aGVcbiAgICAgKiBGb2N1c1RyYXAgdGhhdCBpcyB0aGUgbmV3IHRvcCBvZiB0aGUgc3RhY2suXG4gICAgICovXG4gICAgZGVyZWdpc3Rlcihmb2N1c1RyYXA6IE1hbmFnZWRGb2N1c1RyYXApOiB2b2lkO1xufVxuIl19