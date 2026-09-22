// md5:7deaf8b6442a188a0def6397d39ed8a3 true
import type { ConstrBind } from '@dxtmisha/functional';
/** Provide key for collage layout update callback. @keywords collage update layout provide */
export declare const COLLAGE_NAME_UPDATE = "collage-update";
/** Grouped row of collage elements with vertical center coordinate. @keywords collage element row layout */
export type CollageElementRow = {
    center: number;
    items: HTMLElement[];
};
/** Callback requesting collage layout recalculation. @keywords collage update layout callback */
export type CollageUpdate = () => void;
export type CollageComponentInclude = {
    collage?: object;
};
/** Embedding Collage properties in other components. @keywords collage props include attributes */
export type CollagePropsInclude<CollageItem extends CollageItemPropsBasic = CollageItemPropsBasic, Collage extends CollagePropsBasic<CollageItem> = CollagePropsBasic<CollageItem>> = {
    collageAttrs?: ConstrBind<Collage>;
};