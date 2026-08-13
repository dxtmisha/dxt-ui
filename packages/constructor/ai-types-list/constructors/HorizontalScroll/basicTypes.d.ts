// md5:a4e87c924695f8efd053a0ce6b085909 true
import { ConstrBind } from '@dxtmisha/functional';

export type HorizontalScrollControlItem = {
    classItem: string;
    classItemSelected: string;
    binds: {
        class: string;
    };
};

export type HorizontalScrollComponentInclude = {
    horizontalScroll?: object;
};

export type HorizontalScrollPropsInclude<HorizontalScroll extends HorizontalScrollPropsBasic = HorizontalScrollPropsBasic> = {
    horizontalScrollBleed?: boolean;
    horizontalScrollAlign?: 'block' | 'left';
    horizontalScrollAttrs?: ConstrBind<HorizontalScroll>;
};