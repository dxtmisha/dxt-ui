// md5:bc63e12dbc79b71587e3845b759c3e7e true
import type { ConstrBind } from '@dxtmisha/functional';

/** Base scale factor converting aspect ratio to integer grid tracks. @keywords scale, aspect ratio, grid */
export declare const COLLAGE_ITEM_SCALE = 10;

export type CollageItemComponentInclude = {
    collageItem?: object;
};

export type CollageItemPropsInclude<CollageItem extends CollageItemPropsBasic = CollageItemPropsBasic> = {
    collageItemAttrs?: ConstrBind<CollageItem>;
};

export type CollageItemDimensionsExpose = {
    /** Gets the computed height factor for grid dimensions. @keywords height, dimensions */
    getHeight(): number | undefined;
    /** Gets the computed width factor for grid dimensions. @keywords width, dimensions */
    getWidth(): number | undefined;
};