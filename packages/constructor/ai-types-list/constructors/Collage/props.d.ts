// md5:c3e88702a541c161fe9bb35ab5de2f5f true
import type { ListRecord, ListSelectedList } from '@dxtmisha/functional';
export type CollagePropsToken = {
    columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    variant?: 'standard' | 'quilted' | 'woven' | 'masonryHorizontal' | 'masonryVertical';
};
/** Base properties configuration for collage components. @keywords collage, properties */
export type CollagePropsBasic<CollageItem extends CollageItemPropsBasic = CollageItemPropsBasic> = CollageItemPropsInclude<CollageItem> & ModelPropsSelected<ListSelectedList> & {
    /** List of collage images. */
    images?: ListRecord<CollageItem>;
    /** Selected item identifiers. */
    selected?: ListSelectedList;
    /** Key for the item value in data object. */
    keyValue?: string;
    /** Key for the item label in data object. */
    keyLabel?: string;
    /** Base cell size. */
    cellSize?: string | number;
    /** Whether control mode is enabled. */
    control?: boolean;
};
/** Complete collage properties combining basic and design token configurations. @keywords collage, props */
export type CollageProps = CollagePropsBasic & CollagePropsToken;
/** Default property values for collage. @keywords defaults, collage */
export declare const defaultsCollage: {
    columns: string;
    variant: string;
};