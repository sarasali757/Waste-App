import { PipeTransform } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class Ng2SearchPipe implements PipeTransform {
    /**
       * @param items object from array
       * @param term term's search
       */
    transform(items: any, term: string): any;
    /**
     *
     * @param items List of items to filter
     * @param term  a string term to compare with every property of the list
     *
     */
    static filter(items: Array<{
        [key: string]: any;
    }>, term: string): Array<{
        [key: string]: any;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Ng2SearchPipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<Ng2SearchPipe, "filter">;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Ng2SearchPipe>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWZpbHRlci5waXBlLmQudHMiLCJzb3VyY2VzIjpbIm5nMi1maWx0ZXIucGlwZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmcyU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIC8qKlxuICAgICAgICogQHBhcmFtIGl0ZW1zIG9iamVjdCBmcm9tIGFycmF5XG4gICAgICAgKiBAcGFyYW0gdGVybSB0ZXJtJ3Mgc2VhcmNoXG4gICAgICAgKi9cbiAgICB0cmFuc2Zvcm0oaXRlbXM6IGFueSwgdGVybTogc3RyaW5nKTogYW55O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZW1zIExpc3Qgb2YgaXRlbXMgdG8gZmlsdGVyXG4gICAgICogQHBhcmFtIHRlcm0gIGEgc3RyaW5nIHRlcm0gdG8gY29tcGFyZSB3aXRoIGV2ZXJ5IHByb3BlcnR5IG9mIHRoZSBsaXN0XG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgZmlsdGVyKGl0ZW1zOiBBcnJheTx7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9PiwgdGVybTogc3RyaW5nKTogQXJyYXk8e1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfT47XG59XG4iXX0=