/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken, ViewContainerRef } from '@angular/core';
/**
 * Injection token used to provide a `CdkTreeNode` to its outlet.
 * Used primarily to avoid circular imports.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export declare const CDK_TREE_NODE_OUTLET_NODE: InjectionToken<{}>;
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */
export declare class CdkTreeNodeOutlet {
    viewContainer: ViewContainerRef;
    _node?: any;
    constructor(viewContainer: ViewContainerRef, _node?: any);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNodeOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNodeOutlet, "[cdkTreeNodeOutlet]", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmQudHMiLCJzb3VyY2VzIjpbIm91dGxldC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBJbmplY3Rpb24gdG9rZW4gdXNlZCB0byBwcm92aWRlIGEgYENka1RyZWVOb2RlYCB0byBpdHMgb3V0bGV0LlxuICogVXNlZCBwcmltYXJpbHkgdG8gYXZvaWQgY2lyY3VsYXIgaW1wb3J0cy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ0RLX1RSRUVfTk9ERV9PVVRMRVRfTk9ERTogSW5qZWN0aW9uVG9rZW48e30+O1xuLyoqXG4gKiBPdXRsZXQgZm9yIG5lc3RlZCBDZGtOb2RlLiBQdXQgYFtjZGtUcmVlTm9kZU91dGxldF1gIG9uIGEgdGFnIHRvIHBsYWNlIGNoaWxkcmVuIGRhdGFOb2Rlc1xuICogaW5zaWRlIHRoZSBvdXRsZXQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENka1RyZWVOb2RlT3V0bGV0IHtcbiAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuICAgIF9ub2RlPzogYW55O1xuICAgIGNvbnN0cnVjdG9yKHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIF9ub2RlPzogYW55KTtcbn1cbiJdfQ==