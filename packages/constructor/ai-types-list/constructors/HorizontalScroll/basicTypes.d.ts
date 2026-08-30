// md5:7db053fd339fff1937b5c3a7cc8e0594 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Type for the horizontal scroll control item. @keywords horizontal scroll, control item, binds */
export type HorizontalScrollControlItem = {
    classItem: string;
    classItemSelected: string;
    binds: {
        class: string;
    };
};

/** Type for the horizontal scroll component include configuration. @keywords horizontal scroll, component, include */
export type HorizontalScrollComponentInclude = {
    horizontalScroll?: object;
};

/** Type for horizontal scroll inclusion properties. @keywords horizontal scroll, props, include */
export type HorizontalScrollPropsInclude<HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic> = {
    horizontalScrollBleed?: boolean;
    horizontalScrollAlign?: 'block' | 'left';
    horizontalScrollAttrs?: ConstrBind<HorizontalScroll>;
};