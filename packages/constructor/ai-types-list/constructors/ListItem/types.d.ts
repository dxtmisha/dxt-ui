// md5:57ce6703bc025f46fcee093a98b36393 true
import type { ConstrClass } from '@dxtmisha/functional';

/** Configuration interface for connected components in list item. @keywords components, setup */
export type ListItemComponents = IconComponentInclude & BadgeComponentInclude & ProgressComponentInclude & RippleComponentInclude & {
    checkbox?: object;
    radio?: object;
};

export type ListItemEmits = EventClickEmits;

export interface ListItemExpose extends EventClickExpose {}

/** Available slot definitions for list item. @keywords slots, template */
export interface ListItemSlots extends LabelHighlightSlots, DescriptionSlots, PrefixSlots, CaptionSlots, SuffixSlots {
    /** Slot for the leading element. @keywords leading, slot */
    leading?(props: any): any;
    /** Slot for the trailing element. @keywords trailing, slot */
    trailing?(props: any): any;
    /** Slot for the list item body content. @keywords body, slot */
    body?(props: any): any;
}

/** CSS class names mapping for list item sub-elements. @keywords classes, styles */
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