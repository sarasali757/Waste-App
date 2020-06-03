/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { Direction, Directionality } from './directionality';
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
import * as ɵngcc0 from '@angular/core';
export declare class Dir implements Directionality, AfterContentInit, OnDestroy {
    /** Normalized direction that accounts for invalid/unsupported values. */
    private _dir;
    /** Whether the `value` has been set to its initial value. */
    private _isInitialized;
    /** Direction as passed in by the consumer. */
    _rawDir: string;
    /** Event emitted when the direction changes. */
    change: EventEmitter<Direction>;
    /** @docs-private */
    get dir(): Direction;
    set dir(value: Direction);
    /** Current layout direction of the element. */
    get value(): Direction;
    /** Initialize once default value has been set. */
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Dir>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<Dir, "[dir]", ["dir"], {
    "dir": "dir";
}, {
    "change": "dirChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLmQudHMiLCJzb3VyY2VzIjpbImRpci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJy4vZGlyZWN0aW9uYWxpdHknO1xuLyoqXG4gKiBEaXJlY3RpdmUgdG8gbGlzdGVuIGZvciBjaGFuZ2VzIG9mIGRpcmVjdGlvbiBvZiBwYXJ0IG9mIHRoZSBET00uXG4gKlxuICogUHJvdmlkZXMgaXRzZWxmIGFzIERpcmVjdGlvbmFsaXR5IHN1Y2ggdGhhdCBkZXNjZW5kYW50IGRpcmVjdGl2ZXMgb25seSBuZWVkIHRvIGV2ZXIgaW5qZWN0XG4gKiBEaXJlY3Rpb25hbGl0eSB0byBnZXQgdGhlIGNsb3Nlc3QgZGlyZWN0aW9uLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEaXIgaW1wbGVtZW50cyBEaXJlY3Rpb25hbGl0eSwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICAvKiogTm9ybWFsaXplZCBkaXJlY3Rpb24gdGhhdCBhY2NvdW50cyBmb3IgaW52YWxpZC91bnN1cHBvcnRlZCB2YWx1ZXMuICovXG4gICAgcHJpdmF0ZSBfZGlyO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBgdmFsdWVgIGhhcyBiZWVuIHNldCB0byBpdHMgaW5pdGlhbCB2YWx1ZS4gKi9cbiAgICBwcml2YXRlIF9pc0luaXRpYWxpemVkO1xuICAgIC8qKiBEaXJlY3Rpb24gYXMgcGFzc2VkIGluIGJ5IHRoZSBjb25zdW1lci4gKi9cbiAgICBfcmF3RGlyOiBzdHJpbmc7XG4gICAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgZGlyZWN0aW9uIGNoYW5nZXMuICovXG4gICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8RGlyZWN0aW9uPjtcbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIGdldCBkaXIoKTogRGlyZWN0aW9uO1xuICAgIHNldCBkaXIodmFsdWU6IERpcmVjdGlvbik7XG4gICAgLyoqIEN1cnJlbnQgbGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgZWxlbWVudC4gKi9cbiAgICBnZXQgdmFsdWUoKTogRGlyZWN0aW9uO1xuICAgIC8qKiBJbml0aWFsaXplIG9uY2UgZGVmYXVsdCB2YWx1ZSBoYXMgYmVlbiBzZXQuICovXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==