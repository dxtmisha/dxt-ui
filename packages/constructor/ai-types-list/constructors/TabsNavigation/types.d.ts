// md5:6c126089104825032ec8bc2191a2f342 true
import { ConstrClass, ListSelectedList } from '@dxtmisha/functional';
export type TabsNavigationComponents = HorizontalScrollComponentInclude & TabItemComponentInclude;
export type TabsNavigationEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>;
/** Exposes methods to retrieve unique DOM identifiers for tab items. @keywords tabs navigation expose ids */
export interface TabsNavigationExpose {
    /** Map of item values to their unique DOM identifiers @keywords ids mapping */
    ids(): TabsNavigationIdsList;
}
export interface TabsNavigationSlots {
    /** Slot for content before the tabs @keywords leading slot */
    leading?(props: any): any;
    /** Slot for content after the tabs @keywords trailing slot */
    trailing?(props: any): any;
}
export type TabsNavigationClasses = {
    main: ConstrClass;
    item: string;
};