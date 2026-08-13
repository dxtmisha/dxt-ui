// md5:9858fd5d5170c26be7b7a051ad910c54 true
import { ConstrClass } from '@dxtmisha/functional';
export type ListItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude & {
    checkbox?: object;
    radio?: object;
};
export type ListItemEmits = EventClickEmits;
export interface ListItemExpose extends EventClickExpose {
}
/** Interface for list item slots @keywords slots, list, item, template */
export interface ListItemSlots extends LabelHighlightSlots, DescriptionSlots, PrefixSlots, CaptionSlots, SuffixSlots {
    /** Slot for the leading element @keywords slot, leading */
    leading?(props: any): any;
    /** Slot for the trailing element @keywords slot, trailing */
    trailing?(props: any): any;
    /** Slot for the list item body @keywords slot, body */
    body?(props: any): any;
}
export type ListItemClasses = {
    main: ConstrClass;
    body: string;
    context: string;
    label: string;
    highlight: string;
    prefix: string;
    caption: string;
    description: string;
    icon: string;
    trailing: string;
    control: string;
    badge: string;
};