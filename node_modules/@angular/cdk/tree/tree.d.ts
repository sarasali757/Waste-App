/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusableOption } from '@angular/cdk/a11y';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterContentChecked, ChangeDetectorRef, ElementRef, IterableDiffer, IterableDiffers, OnDestroy, OnInit, QueryList, ViewContainerRef, TrackByFunction } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TreeControl } from './control/tree-control';
import { CdkTreeNodeDef } from './node';
import { CdkTreeNodeOutlet } from './outlet';
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CdkTree<T> implements AfterContentChecked, CollectionViewer, OnDestroy, OnInit {
    private _differs;
    private _changeDetectorRef;
    /** Subject that emits when the component has been destroyed. */
    private _onDestroy;
    /** Differ used to find the changes in the data provided by the data source. */
    private _dataDiffer;
    /** Stores the node definition that does not have a when predicate. */
    private _defaultNodeDef;
    /** Data subscription */
    private _dataSubscription;
    /** Level of nodes */
    private _levels;
    /**
     * Provides a stream containing the latest data array to render. Influenced by the tree's
     * stream of view window (what dataNodes are currently on screen).
     * Data source can be an observable of data array, or a data array to render.
     */
    get dataSource(): DataSource<T> | Observable<T[]> | T[];
    set dataSource(dataSource: DataSource<T> | Observable<T[]> | T[]);
    private _dataSource;
    /** The tree controller */
    treeControl: TreeControl<T>;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize node operations by identifying a node based on its data
     * relative to the function to know if a node should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    trackBy: TrackByFunction<T>;
    _nodeOutlet: CdkTreeNodeOutlet;
    /** The tree node template for the tree */
    _nodeDefs: QueryList<CdkTreeNodeDef<T>>;
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */
    viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    constructor(_differs: IterableDiffers, _changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    private _switchDataSource;
    /** Set up a subscription for the data provided by the data source. */
    private _observeRenderChanges;
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    renderNodeChanges(data: T[] | ReadonlyArray<T>, dataDiffer?: IterableDiffer<T>, viewContainer?: ViewContainerRef, parentData?: T): void;
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    _getNodeDef(data: T, i: number): CdkTreeNodeDef<T>;
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    insertNode(nodeData: T, index: number, viewContainer?: ViewContainerRef, parentData?: T): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTree<any>>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CdkTree<any>, "cdk-tree", ["cdkTree"], {
    "dataSource": "dataSource";
    "treeControl": "treeControl";
    "trackBy": "trackBy";
}, {}, ["_nodeDefs"]>;
}
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */
export declare class CdkTreeNode<T> implements FocusableOption, OnDestroy {
    protected _elementRef: ElementRef<HTMLElement>;
    protected _tree: CdkTree<T>;
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */
    static mostRecentTreeNode: CdkTreeNode<any> | null;
    /** Subject that emits when the component has been destroyed. */
    protected _destroyed: Subject<void>;
    /** Emits when the node's data has changed. */
    _dataChanges: Subject<void>;
    /** The tree node's data. */
    get data(): T;
    set data(value: T);
    protected _data: T;
    get isExpanded(): boolean;
    get level(): number;
    /**
     * The role of the node should be 'group' if it's an internal node,
     * and 'treeitem' if it's a leaf node.
     */
    role: 'treeitem' | 'group';
    constructor(_elementRef: ElementRef<HTMLElement>, _tree: CdkTree<T>);
    ngOnDestroy(): void;
    /** Focuses the menu item. Implements for FocusableOption. */
    focus(): void;
    protected _setRoleFromData(): void;
    protected _setRoleFromChildren(children: T[]): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkTreeNode<any>>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkTreeNode<any>, "cdk-tree-node", ["cdkTreeNode"], {
    "role": "role";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kLnRzIiwic291cmNlcyI6WyJ0cmVlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IEZvY3VzYWJsZU9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IENvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFZpZXdDb250YWluZXJSZWYsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmVlQ29udHJvbCB9IGZyb20gJy4vY29udHJvbC90cmVlLWNvbnRyb2wnO1xuaW1wb3J0IHsgQ2RrVHJlZU5vZGVEZWYgfSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHsgQ2RrVHJlZU5vZGVPdXRsZXQgfSBmcm9tICcuL291dGxldCc7XG4vKipcbiAqIENESyB0cmVlIGNvbXBvbmVudCB0aGF0IGNvbm5lY3RzIHdpdGggYSBkYXRhIHNvdXJjZSB0byByZXRyaWV2ZSBkYXRhIG9mIHR5cGUgYFRgIGFuZCByZW5kZXJzXG4gKiBkYXRhTm9kZXMgd2l0aCBoaWVyYXJjaHkuIFVwZGF0ZXMgdGhlIGRhdGFOb2RlcyB3aGVuIG5ldyBkYXRhIGlzIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIENvbGxlY3Rpb25WaWV3ZXIsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kaWZmZXJzO1xuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmO1xuICAgIC8qKiBTdWJqZWN0IHRoYXQgZW1pdHMgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc3Ryb3llZC4gKi9cbiAgICBwcml2YXRlIF9vbkRlc3Ryb3k7XG4gICAgLyoqIERpZmZlciB1c2VkIHRvIGZpbmQgdGhlIGNoYW5nZXMgaW4gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAqL1xuICAgIHByaXZhdGUgX2RhdGFEaWZmZXI7XG4gICAgLyoqIFN0b3JlcyB0aGUgbm9kZSBkZWZpbml0aW9uIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHdoZW4gcHJlZGljYXRlLiAqL1xuICAgIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmO1xuICAgIC8qKiBEYXRhIHN1YnNjcmlwdGlvbiAqL1xuICAgIHByaXZhdGUgX2RhdGFTdWJzY3JpcHRpb247XG4gICAgLyoqIExldmVsIG9mIG5vZGVzICovXG4gICAgcHJpdmF0ZSBfbGV2ZWxzO1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIGEgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGxhdGVzdCBkYXRhIGFycmF5IHRvIHJlbmRlci4gSW5mbHVlbmNlZCBieSB0aGUgdHJlZSdzXG4gICAgICogc3RyZWFtIG9mIHZpZXcgd2luZG93ICh3aGF0IGRhdGFOb2RlcyBhcmUgY3VycmVudGx5IG9uIHNjcmVlbikuXG4gICAgICogRGF0YSBzb3VyY2UgY2FuIGJlIGFuIG9ic2VydmFibGUgb2YgZGF0YSBhcnJheSwgb3IgYSBkYXRhIGFycmF5IHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICBnZXQgZGF0YVNvdXJjZSgpOiBEYXRhU291cmNlPFQ+IHwgT2JzZXJ2YWJsZTxUW10+IHwgVFtdO1xuICAgIHNldCBkYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD4gfCBPYnNlcnZhYmxlPFRbXT4gfCBUW10pO1xuICAgIHByaXZhdGUgX2RhdGFTb3VyY2U7XG4gICAgLyoqIFRoZSB0cmVlIGNvbnRyb2xsZXIgKi9cbiAgICB0cmVlQ29udHJvbDogVHJlZUNvbnRyb2w8VD47XG4gICAgLyoqXG4gICAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcbiAgICAgKiB0byBgbmdGb3JgIGB0cmFja0J5YCBmdW5jdGlvbi4gT3B0aW1pemUgbm9kZSBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgbm9kZSBiYXNlZCBvbiBpdHMgZGF0YVxuICAgICAqIHJlbGF0aXZlIHRvIHRoZSBmdW5jdGlvbiB0byBrbm93IGlmIGEgbm9kZSBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cbiAgICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxuICAgICAqL1xuICAgIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxUPjtcbiAgICBfbm9kZU91dGxldDogQ2RrVHJlZU5vZGVPdXRsZXQ7XG4gICAgLyoqIFRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIHRoZSB0cmVlICovXG4gICAgX25vZGVEZWZzOiBRdWVyeUxpc3Q8Q2RrVHJlZU5vZGVEZWY8VD4+O1xuICAgIC8qKlxuICAgICAqIFN0cmVhbSBjb250YWluaW5nIHRoZSBsYXRlc3QgaW5mb3JtYXRpb24gb24gd2hhdCByb3dzIGFyZSBiZWluZyBkaXNwbGF5ZWQgb24gc2NyZWVuLlxuICAgICAqIENhbiBiZSB1c2VkIGJ5IHRoZSBkYXRhIHNvdXJjZSB0byBhcyBhIGhldXJpc3RpYyBvZiB3aGF0IGRhdGEgc2hvdWxkIGJlIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIHZpZXdDaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDx7XG4gICAgICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgICAgIGVuZDogbnVtYmVyO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTd2l0Y2ggdG8gdGhlIHByb3ZpZGVkIGRhdGEgc291cmNlIGJ5IHJlc2V0dGluZyB0aGUgZGF0YSBhbmQgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBjdXJyZW50XG4gICAgICogcmVuZGVyIGNoYW5nZSBzdWJzY3JpcHRpb24gaWYgb25lIGV4aXN0cy4gSWYgdGhlIGRhdGEgc291cmNlIGlzIG51bGwsIGludGVycHJldCB0aGlzIGJ5XG4gICAgICogY2xlYXJpbmcgdGhlIG5vZGUgb3V0bGV0LiBPdGhlcndpc2Ugc3RhcnQgbGlzdGVuaW5nIGZvciBuZXcgZGF0YS5cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zd2l0Y2hEYXRhU291cmNlO1xuICAgIC8qKiBTZXQgdXAgYSBzdWJzY3JpcHRpb24gZm9yIHRoZSBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcztcbiAgICAvKiogQ2hlY2sgZm9yIGNoYW5nZXMgbWFkZSBpbiB0aGUgZGF0YSBhbmQgcmVuZGVyIGVhY2ggY2hhbmdlIChub2RlIGFkZGVkL3JlbW92ZWQvbW92ZWQpLiAqL1xuICAgIHJlbmRlck5vZGVDaGFuZ2VzKGRhdGE6IFRbXSB8IFJlYWRvbmx5QXJyYXk8VD4sIGRhdGFEaWZmZXI/OiBJdGVyYWJsZURpZmZlcjxUPiwgdmlld0NvbnRhaW5lcj86IFZpZXdDb250YWluZXJSZWYsIHBhcmVudERhdGE/OiBUKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgbWF0Y2hpbmcgbm9kZSBkZWZpbml0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoaXMgbm9kZSBkYXRhLiBJZiB0aGVyZSBpcyBvbmx5XG4gICAgICogb25lIG5vZGUgZGVmaW5pdGlvbiwgaXQgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgZmluZCB0aGUgbm9kZSBkZWZpbml0aW9uIHRoYXQgaGFzIGEgd2hlblxuICAgICAqIHByZWRpY2F0ZSB0aGF0IHJldHVybnMgdHJ1ZSB3aXRoIHRoZSBkYXRhLiBJZiBub25lIHJldHVybiB0cnVlLCByZXR1cm4gdGhlIGRlZmF1bHQgbm9kZVxuICAgICAqIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgX2dldE5vZGVEZWYoZGF0YTogVCwgaTogbnVtYmVyKTogQ2RrVHJlZU5vZGVEZWY8VD47XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBlbWJlZGRlZCB2aWV3IGZvciB0aGUgZGF0YSBub2RlIHRlbXBsYXRlIGFuZCBwbGFjZSBpdCBpbiB0aGUgY29ycmVjdCBpbmRleCBsb2NhdGlvblxuICAgICAqIHdpdGhpbiB0aGUgZGF0YSBub2RlIHZpZXcgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGluc2VydE5vZGUobm9kZURhdGE6IFQsIGluZGV4OiBudW1iZXIsIHZpZXdDb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmLCBwYXJlbnREYXRhPzogVCk6IHZvaWQ7XG59XG4vKipcbiAqIFRyZWUgbm9kZSBmb3IgQ2RrVHJlZS4gSXQgY29udGFpbnMgdGhlIGRhdGEgaW4gdGhlIHRyZWUgbm9kZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2RrVHJlZU5vZGU8VD4gaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24sIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcm90ZWN0ZWQgX3RyZWU6IENka1RyZWU8VD47XG4gICAgLyoqXG4gICAgICogVGhlIG1vc3QgcmVjZW50bHkgY3JlYXRlZCBgQ2RrVHJlZU5vZGVgLiBXZSBzYXZlIGl0IGluIHN0YXRpYyB2YXJpYWJsZSBzbyB3ZSBjYW4gcmV0cmlldmUgaXRcbiAgICAgKiBpbiBgQ2RrVHJlZWAgYW5kIHNldCB0aGUgZGF0YSB0byBpdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgbW9zdFJlY2VudFRyZWVOb2RlOiBDZGtUcmVlTm9kZTxhbnk+IHwgbnVsbDtcbiAgICAvKiogU3ViamVjdCB0aGF0IGVtaXRzIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXN0cm95ZWQuICovXG4gICAgcHJvdGVjdGVkIF9kZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD47XG4gICAgLyoqIEVtaXRzIHdoZW4gdGhlIG5vZGUncyBkYXRhIGhhcyBjaGFuZ2VkLiAqL1xuICAgIF9kYXRhQ2hhbmdlczogU3ViamVjdDx2b2lkPjtcbiAgICAvKiogVGhlIHRyZWUgbm9kZSdzIGRhdGEuICovXG4gICAgZ2V0IGRhdGEoKTogVDtcbiAgICBzZXQgZGF0YSh2YWx1ZTogVCk7XG4gICAgcHJvdGVjdGVkIF9kYXRhOiBUO1xuICAgIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW47XG4gICAgZ2V0IGxldmVsKCk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgcm9sZSBvZiB0aGUgbm9kZSBzaG91bGQgYmUgJ2dyb3VwJyBpZiBpdCdzIGFuIGludGVybmFsIG5vZGUsXG4gICAgICogYW5kICd0cmVlaXRlbScgaWYgaXQncyBhIGxlYWYgbm9kZS5cbiAgICAgKi9cbiAgICByb2xlOiAndHJlZWl0ZW0nIHwgJ2dyb3VwJztcbiAgICBjb25zdHJ1Y3RvcihfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIF90cmVlOiBDZGtUcmVlPFQ+KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKiBGb2N1c2VzIHRoZSBtZW51IGl0ZW0uIEltcGxlbWVudHMgZm9yIEZvY3VzYWJsZU9wdGlvbi4gKi9cbiAgICBmb2N1cygpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBfc2V0Um9sZUZyb21EYXRhKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIF9zZXRSb2xlRnJvbUNoaWxkcmVuKGNoaWxkcmVuOiBUW10pOiB2b2lkO1xufVxuIl19