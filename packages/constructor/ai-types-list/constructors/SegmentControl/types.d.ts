// md5:487f3868b7a6334e74c69f35843e1dab true
import { ConstrClass } from '@dxtmisha/functional';

/** Components required for segment control operation. @keywords SegmentControlComponents components scroll item */
export type SegmentControlComponents = HorizontalScrollComponentInclude & SegmentControlItemComponentInclude;

/** Available segment control events. @keywords SegmentControlEmits events tabs navigation */
export type SegmentControlEmits = TabsNavigationEmits;

/** Exposed properties of segment control. @keywords SegmentControlExpose properties tabs navigation */
export interface SegmentControlExpose extends TabsNavigationExpose {
}

/** Available slots for segment control. @keywords SegmentControlSlots slots tabs navigation */
export interface SegmentControlSlots extends TabsNavigationSlots {
}

/** CSS classes for segment control elements. @keywords SegmentControlClasses classes main item */
export type SegmentControlClasses = {
    main: ConstrClass;
    item: string;
};