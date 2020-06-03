/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Possible states for a pseudo checkbox.
 * @docs-private
 */
import * as ɵngcc0 from '@angular/core';
export declare type MatPseudoCheckboxState = 'unchecked' | 'checked' | 'indeterminate';
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */
export declare class MatPseudoCheckbox {
    _animationMode?: string | undefined;
    /** Display state of the checkbox. */
    state: MatPseudoCheckboxState;
    /** Whether the checkbox is disabled. */
    disabled: boolean;
    constructor(_animationMode?: string | undefined);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MatPseudoCheckbox>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MatPseudoCheckbox, "mat-pseudo-checkbox", never, {
    "state": "state";
    "disabled": "disabled";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHNldWRvLWNoZWNrYm94LmQudHMiLCJzb3VyY2VzIjpbInBzZXVkby1jaGVja2JveC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogUG9zc2libGUgc3RhdGVzIGZvciBhIHBzZXVkbyBjaGVja2JveC5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBNYXRQc2V1ZG9DaGVja2JveFN0YXRlID0gJ3VuY2hlY2tlZCcgfCAnY2hlY2tlZCcgfCAnaW5kZXRlcm1pbmF0ZSc7XG4vKipcbiAqIENvbXBvbmVudCB0aGF0IHNob3dzIGEgc2ltcGxpZmllZCBjaGVja2JveCB3aXRob3V0IGluY2x1ZGluZyBhbnkga2luZCBvZiBcInJlYWxcIiBjaGVja2JveC5cbiAqIE1lYW50IHRvIGJlIHVzZWQgd2hlbiB0aGUgY2hlY2tib3ggaXMgcHVyZWx5IGRlY29yYXRpdmUgYW5kIGEgbGFyZ2UgbnVtYmVyIG9mIHRoZW0gd2lsbCBiZVxuICogaW5jbHVkZWQsIHN1Y2ggYXMgZm9yIHRoZSBvcHRpb25zIGluIGEgbXVsdGktc2VsZWN0LiBVc2VzIG5vIFNWR3Mgb3IgY29tcGxleCBhbmltYXRpb25zLlxuICogTm90ZSB0aGF0IHRoZW1pbmcgaXMgbWVhbnQgdG8gYmUgaGFuZGxlZCBieSB0aGUgcGFyZW50IGVsZW1lbnQsIGUuZy5cbiAqIGBtYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveGAuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgY29tcG9uZW50IHdpbGwgYmUgY29tcGxldGVseSBpbnZpc2libGUgdG8gc2NyZWVuLXJlYWRlciB1c2Vycy4gVGhpcyBpcyAqbm90KlxuICogaW50ZXJjaGFuZ2VhYmxlIHdpdGggYDxtYXQtY2hlY2tib3g+YCBhbmQgc2hvdWxkICpub3QqIGJlIHVzZWQgaWYgdGhlIHVzZXIgd291bGQgZGlyZWN0bHlcbiAqIGludGVyYWN0IHdpdGggdGhlIGNoZWNrYm94LiBUaGUgcHNldWRvLWNoZWNrYm94IHNob3VsZCBvbmx5IGJlIHVzZWQgYXMgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsXG4gKiBvZiBtb3JlIGNvbXBsZXggY29tcG9uZW50cyB0aGF0IGFwcHJvcHJpYXRlbHkgaGFuZGxlIHNlbGVjdGVkIC8gY2hlY2tlZCBzdGF0ZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTWF0UHNldWRvQ2hlY2tib3gge1xuICAgIF9hbmltYXRpb25Nb2RlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSBjaGVja2JveC4gKi9cbiAgICBzdGF0ZTogTWF0UHNldWRvQ2hlY2tib3hTdGF0ZTtcbiAgICAvKiogV2hldGhlciB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuICovXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoX2FuaW1hdGlvbk1vZGU/OiBzdHJpbmcgfCB1bmRlZmluZWQpO1xufVxuIl19