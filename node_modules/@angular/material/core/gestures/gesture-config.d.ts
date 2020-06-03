/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { MatCommonModule } from '../common-behaviors/common-module';
import { HammerInstance, HammerOptions } from './gesture-annotations';
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 10.0.0
 */
import * as ɵngcc0 from '@angular/core';
export declare const MAT_HAMMER_OPTIONS: InjectionToken<HammerOptions>;
/**
 * Adjusts configuration of our gesture library, Hammer.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 10.0.0
 */
export declare class GestureConfig extends HammerGestureConfig {
    private _hammerOptions?;
    /** List of new event names to add to the gesture support list */
    events: string[];
    constructor(_hammerOptions?: HammerOptions | undefined, _commonModule?: MatCommonModule);
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param element Element to which to assign the new HammerJS gestures.
     * @returns Newly-created HammerJS instance.
     */
    buildHammer(element: HTMLElement): HammerInstance;
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    private _createRecognizer;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GestureConfig>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GestureConfig>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZS1jb25maWcuZC50cyIsInNvdXJjZXMiOlsiZ2VzdHVyZS1jb25maWcuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1hdENvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi1iZWhhdmlvcnMvY29tbW9uLW1vZHVsZSc7XG5pbXBvcnQgeyBIYW1tZXJJbnN0YW5jZSwgSGFtbWVyT3B0aW9ucyB9IGZyb20gJy4vZ2VzdHVyZS1hbm5vdGF0aW9ucyc7XG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgb3B0aW9ucyB0byB0aGUgSGFtbWVyanMgaW5zdGFuY2UuXG4gKiBNb3JlIGluZm8gYXQgaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9hcGkvLlxuICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBNQVRfSEFNTUVSX09QVElPTlM6IEluamVjdGlvblRva2VuPEhhbW1lck9wdGlvbnM+O1xuLyoqXG4gKiBBZGp1c3RzIGNvbmZpZ3VyYXRpb24gb2Ygb3VyIGdlc3R1cmUgbGlicmFyeSwgSGFtbWVyLlxuICogQGRlcHJlY2F0ZWQgTm8gbG9uZ2VyIGJlaW5nIHVzZWQuIFRvIGJlIHJlbW92ZWQuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDEwLjAuMFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHZXN0dXJlQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XG4gICAgcHJpdmF0ZSBfaGFtbWVyT3B0aW9ucz87XG4gICAgLyoqIExpc3Qgb2YgbmV3IGV2ZW50IG5hbWVzIHRvIGFkZCB0byB0aGUgZ2VzdHVyZSBzdXBwb3J0IGxpc3QgKi9cbiAgICBldmVudHM6IHN0cmluZ1tdO1xuICAgIGNvbnN0cnVjdG9yKF9oYW1tZXJPcHRpb25zPzogSGFtbWVyT3B0aW9ucyB8IHVuZGVmaW5lZCwgX2NvbW1vbk1vZHVsZT86IE1hdENvbW1vbk1vZHVsZSk7XG4gICAgLyoqXG4gICAgICogQnVpbGRzIEhhbW1lciBpbnN0YW5jZSBtYW51YWxseSB0byBhZGQgY3VzdG9tIHJlY29nbml6ZXJzIHRoYXQgbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuICAgICAqXG4gICAgICogT3VyIGdlc3R1cmUgbmFtZXMgY29tZSBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gZ2VzdHVyZXMgc3BlYzpcbiAgICAgKiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi8jZ2VzdHVyZXMtdG91Y2gtbWVjaGFuaWNzXG4gICAgICpcbiAgICAgKiBNb3JlIGluZm9ybWF0aW9uIG9uIGRlZmF1bHQgcmVjb2duaXplcnMgY2FuIGJlIGZvdW5kIGluIEhhbW1lciBkb2NzOlxuICAgICAqIGh0dHA6Ly9oYW1tZXJqcy5naXRodWIuaW8vcmVjb2duaXplci1wYW4vXG4gICAgICogaHR0cDovL2hhbW1lcmpzLmdpdGh1Yi5pby9yZWNvZ25pemVyLXByZXNzL1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byB3aGljaCB0byBhc3NpZ24gdGhlIG5ldyBIYW1tZXJKUyBnZXN0dXJlcy5cbiAgICAgKiBAcmV0dXJucyBOZXdseS1jcmVhdGVkIEhhbW1lckpTIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGJ1aWxkSGFtbWVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSGFtbWVySW5zdGFuY2U7XG4gICAgLyoqIENyZWF0ZXMgYSBuZXcgcmVjb2duaXplciwgd2l0aG91dCBhZmZlY3RpbmcgdGhlIGRlZmF1bHQgcmVjb2duaXplcnMgb2YgSGFtbWVySlMgKi9cbiAgICBwcml2YXRlIF9jcmVhdGVSZWNvZ25pemVyO1xufVxuIl19