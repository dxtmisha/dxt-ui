// md5:b760a4ec6569f5e4f82c718160f5acda true
import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional';

export type TabsNavigationComponents = HorizontalScrollComponentInclude & TabItemComponentInclude;
export type TabsNavigationEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;

export interface TabsNavigationExpose {
    /** Returns map of item values to unique DOM identifiers. @keywords ids, dom */
    ids(): TabsNavigationIdsList;
}

export interface TabsNavigationSlots {
    /** Slot for content before tabs. @keywords leading, slot */
    leading?(props: any): any;
    /** Slot for content after tabs. @keywords trailing, slot */
    trailing?(props: any): any;
}

export type TabsNavigationClasses = {
    main: ConstrClass;
    item: string;
};