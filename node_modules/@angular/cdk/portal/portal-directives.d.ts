/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BasePortalOutlet, ComponentPortal, Portal, TemplatePortal, DomPortal } from './portal';
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkPortal extends TemplatePortal {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkPortal>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkPortal, "[cdkPortal]", ["cdkPortal"], {}, {}, never>;
}
/**
 * @deprecated Use `CdkPortal` instead.
 * @breaking-change 9.0.0
 */
export declare class TemplatePortalDirective extends CdkPortal {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TemplatePortalDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TemplatePortalDirective, "[cdk-portal], [portal]", ["cdkPortal"], {}, {}, never>;
}
/**
 * Possible attached references to the CdkPortalOutlet.
 */
export declare type CdkPortalOutletAttachedRef = ComponentRef<any> | EmbeddedViewRef<any> | null;
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
export declare class CdkPortalOutlet extends BasePortalOutlet implements OnInit, OnDestroy {
    private _componentFactoryResolver;
    private _viewContainerRef;
    private _document;
    /** Whether the portal component is initialized. */
    private _isInitialized;
    /** Reference to the currently-attached component/view ref. */
    private _attachedRef;
    constructor(_componentFactoryResolver: ComponentFactoryResolver, _viewContainerRef: ViewContainerRef, 
    /**
     * @deprecated `_document` parameter to be made required.
     * @breaking-change 9.0.0
     */
    _document?: any);
    /** Portal associated with the Portal outlet. */
    get portal(): Portal<any> | null;
    set portal(portal: Portal<any> | null);
    /** Emits when a portal is attached to the outlet. */
    attached: EventEmitter<CdkPortalOutletAttachedRef>;
    /** Component or view reference that is attached to the portal. */
    get attachedRef(): CdkPortalOutletAttachedRef;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    /**
     * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    attachDomPortal: (portal: DomPortal<HTMLElement>) => void;
    /** Gets the root node of the portal outlet. */
    private _getRootNode;
    static ngAcceptInputType_portal: Portal<any> | null | undefined | '';
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkPortalOutlet>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkPortalOutlet, "[cdkPortalOutlet]", ["cdkPortalOutlet"], {
    "portal": "cdkPortalOutlet";
}, {
    "attached": "attached";
}, never>;
}
/**
 * @deprecated Use `CdkPortalOutlet` instead.
 * @breaking-change 9.0.0
 */
export declare class PortalHostDirective extends CdkPortalOutlet {
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PortalHostDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PortalHostDirective, "[cdkPortalHost], [portalHost]", ["cdkPortalHost"], {
    "portal": "cdkPortalHost";
}, {}, never>;
}
export declare class PortalModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<PortalModule, [typeof CdkPortal, typeof CdkPortalOutlet, typeof TemplatePortalDirective, typeof PortalHostDirective], never, [typeof CdkPortal, typeof CdkPortalOutlet, typeof TemplatePortalDirective, typeof PortalHostDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<PortalModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLWRpcmVjdGl2ZXMuZC50cyIsInNvdXJjZXMiOlsicG9ydGFsLWRpcmVjdGl2ZXMuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7OztBQUVBOzs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBOzs7Ozs7Ozs7O0FBTUE7Ozs7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCwgRG9tUG9ydGFsIH0gZnJvbSAnLi9wb3J0YWwnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdmVyc2lvbiBvZiBhIGBUZW1wbGF0ZVBvcnRhbGAuIEJlY2F1c2UgdGhlIGRpcmVjdGl2ZSAqaXMqIGEgVGVtcGxhdGVQb3J0YWwsXG4gKiB0aGUgZGlyZWN0aXZlIGluc3RhbmNlIGl0c2VsZiBjYW4gYmUgYXR0YWNoZWQgdG8gYSBob3N0LCBlbmFibGluZyBkZWNsYXJhdGl2ZSB1c2Ugb2YgcG9ydGFscy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrUG9ydGFsIGV4dGVuZHMgVGVtcGxhdGVQb3J0YWwge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKTtcbn1cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBDZGtQb3J0YWxgIGluc3RlYWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDkuMC4wXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsIHtcbn1cbi8qKlxuICogUG9zc2libGUgYXR0YWNoZWQgcmVmZXJlbmNlcyB0byB0aGUgQ2RrUG9ydGFsT3V0bGV0LlxuICovXG5leHBvcnQgZGVjbGFyZSB0eXBlIENka1BvcnRhbE91dGxldEF0dGFjaGVkUmVmID0gQ29tcG9uZW50UmVmPGFueT4gfCBFbWJlZGRlZFZpZXdSZWY8YW55PiB8IG51bGw7XG4vKipcbiAqIERpcmVjdGl2ZSB2ZXJzaW9uIG9mIGEgUG9ydGFsT3V0bGV0LiBCZWNhdXNlIHRoZSBkaXJlY3RpdmUgKmlzKiBhIFBvcnRhbE91dGxldCwgcG9ydGFscyBjYW4gYmVcbiAqIGRpcmVjdGx5IGF0dGFjaGVkIHRvIGl0LCBlbmFibGluZyBkZWNsYXJhdGl2ZSB1c2UuXG4gKlxuICogVXNhZ2U6XG4gKiBgPG5nLXRlbXBsYXRlIFtjZGtQb3J0YWxPdXRsZXRdPVwiZ3JlZXRpbmdcIj48L25nLXRlbXBsYXRlPmBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrUG9ydGFsT3V0bGV0IGV4dGVuZHMgQmFzZVBvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjtcbiAgICBwcml2YXRlIF9kb2N1bWVudDtcbiAgICAvKiogV2hldGhlciB0aGUgcG9ydGFsIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC4gKi9cbiAgICBwcml2YXRlIF9pc0luaXRpYWxpemVkO1xuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseS1hdHRhY2hlZCBjb21wb25lbnQvdmlldyByZWYuICovXG4gICAgcHJpdmF0ZSBfYXR0YWNoZWRSZWY7XG4gICAgY29uc3RydWN0b3IoX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgYF9kb2N1bWVudGAgcGFyYW1ldGVyIHRvIGJlIG1hZGUgcmVxdWlyZWQuXG4gICAgICogQGJyZWFraW5nLWNoYW5nZSA5LjAuMFxuICAgICAqL1xuICAgIF9kb2N1bWVudD86IGFueSk7XG4gICAgLyoqIFBvcnRhbCBhc3NvY2lhdGVkIHdpdGggdGhlIFBvcnRhbCBvdXRsZXQuICovXG4gICAgZ2V0IHBvcnRhbCgpOiBQb3J0YWw8YW55PiB8IG51bGw7XG4gICAgc2V0IHBvcnRhbChwb3J0YWw6IFBvcnRhbDxhbnk+IHwgbnVsbCk7XG4gICAgLyoqIEVtaXRzIHdoZW4gYSBwb3J0YWwgaXMgYXR0YWNoZWQgdG8gdGhlIG91dGxldC4gKi9cbiAgICBhdHRhY2hlZDogRXZlbnRFbWl0dGVyPENka1BvcnRhbE91dGxldEF0dGFjaGVkUmVmPjtcbiAgICAvKiogQ29tcG9uZW50IG9yIHZpZXcgcmVmZXJlbmNlIHRoYXQgaXMgYXR0YWNoZWQgdG8gdGhlIHBvcnRhbC4gKi9cbiAgICBnZXQgYXR0YWNoZWRSZWYoKTogQ2RrUG9ydGFsT3V0bGV0QXR0YWNoZWRSZWY7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0aGUgZ2l2ZW4gQ29tcG9uZW50UG9ydGFsIHRvIHRoaXMgUG9ydGFsT3V0bGV0IHVzaW5nIHRoZSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZCB0byB0aGUgcG9ydGFsIG91dGxldC5cbiAgICAgKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPjtcbiAgICAvKipcbiAgICAgKiBBdHRhY2ggdGhlIGdpdmVuIFRlbXBsYXRlUG9ydGFsIHRvIHRoaXMgUG9ydGFsSG9zdCBhcyBhbiBlbWJlZGRlZCBWaWV3LlxuICAgICAqIEBwYXJhbSBwb3J0YWwgUG9ydGFsIHRvIGJlIGF0dGFjaGVkLlxuICAgICAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgY3JlYXRlZCBlbWJlZGRlZCB2aWV3LlxuICAgICAqL1xuICAgIGF0dGFjaFRlbXBsYXRlUG9ydGFsPEM+KHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8Qz4pOiBFbWJlZGRlZFZpZXdSZWY8Qz47XG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdGhlIGdpdmVuIERvbVBvcnRhbCB0byB0aGlzIFBvcnRhbEhvc3QgYnkgbW92aW5nIGFsbCBvZiB0aGUgcG9ydGFsIGNvbnRlbnQgaW50byBpdC5cbiAgICAgKiBAcGFyYW0gcG9ydGFsIFBvcnRhbCB0byBiZSBhdHRhY2hlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBUbyBiZSB0dXJuZWQgaW50byBhIG1ldGhvZC5cbiAgICAgKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICAgICAqL1xuICAgIGF0dGFjaERvbVBvcnRhbDogKHBvcnRhbDogRG9tUG9ydGFsPEhUTUxFbGVtZW50PikgPT4gdm9pZDtcbiAgICAvKiogR2V0cyB0aGUgcm9vdCBub2RlIG9mIHRoZSBwb3J0YWwgb3V0bGV0LiAqL1xuICAgIHByaXZhdGUgX2dldFJvb3ROb2RlO1xuICAgIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wb3J0YWw6IFBvcnRhbDxhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCB8ICcnO1xufVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYENka1BvcnRhbE91dGxldGAgaW5zdGVhZC5cbiAqIEBicmVha2luZy1jaGFuZ2UgOS4wLjBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUG9ydGFsSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQb3J0YWxNb2R1bGUge1xufVxuIl19