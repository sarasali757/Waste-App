/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, QueryList } from '@angular/core';
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../common-behaviors/common-module';
export declare class MatLine {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatLine>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<MatLine, "[mat-line], [matLine]", never, {}, {}, never>;
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */
export declare function setLines(lines: QueryList<unknown>, element: ElementRef<HTMLElement>, prefix?: string): void;
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 * @deprecated Use `setLines` instead.
 * @breaking-change 8.0.0
 */
export declare class MatLineSetter {
    constructor(lines: QueryList<MatLine>, element: ElementRef<HTMLElement>);
}
export declare class MatLineModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<MatLineModule, [typeof MatLine], [typeof ɵngcc1.MatCommonModule], [typeof MatLine, typeof ɵngcc1.MatCommonModule]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<MatLineModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5kLnRzIiwic291cmNlcyI6WyJsaW5lLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogU2hhcmVkIGRpcmVjdGl2ZSB0byBjb3VudCBsaW5lcyBpbnNpZGUgYSB0ZXh0IGFyZWEsIHN1Y2ggYXMgYSBsaXN0IGl0ZW0uXG4gKiBMaW5lIGVsZW1lbnRzIGNhbiBiZSBleHRyYWN0ZWQgd2l0aCBhIEBDb250ZW50Q2hpbGRyZW4oTWF0TGluZSkgcXVlcnksIHRoZW5cbiAqIGNvdW50ZWQgYnkgY2hlY2tpbmcgdGhlIHF1ZXJ5IGxpc3QncyBsZW5ndGguXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1hdExpbmUge1xufVxuLyoqXG4gKiBIZWxwZXIgdGhhdCB0YWtlcyBhIHF1ZXJ5IGxpc3Qgb2YgbGluZXMgYW5kIHNldHMgdGhlIGNvcnJlY3QgY2xhc3Mgb24gdGhlIGhvc3QuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHNldExpbmVzKGxpbmVzOiBRdWVyeUxpc3Q8dW5rbm93bj4sIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkO1xuLyoqXG4gKiBIZWxwZXIgdGhhdCB0YWtlcyBhIHF1ZXJ5IGxpc3Qgb2YgbGluZXMgYW5kIHNldHMgdGhlIGNvcnJlY3QgY2xhc3Mgb24gdGhlIGhvc3QuXG4gKiBAZG9jcy1wcml2YXRlXG4gKiBAZGVwcmVjYXRlZCBVc2UgYHNldExpbmVzYCBpbnN0ZWFkLlxuICogQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXRMaW5lU2V0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihsaW5lczogUXVlcnlMaXN0PE1hdExpbmU+LCBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNYXRMaW5lTW9kdWxlIHtcbn1cbiJdfQ==