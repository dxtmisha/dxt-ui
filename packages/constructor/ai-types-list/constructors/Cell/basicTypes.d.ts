// md5:45a87eee404dba5a3c0df20a705b645a true
/** CSS class names for Cell sub-elements. @keywords cell, classes, sub-elements */
export type CellClassesSub = {
    /** Label element class. */
    label: string;
    /** Description element class. */
    description: string;
    /** Caption element class. */
    caption: string;
    /** Trailing element class. */
    trailing: string;
};
/** Component map for including Cell. @keywords cell, component, include */
export type CellComponentInclude = {
    /** Cell component key. */
    cell?: object;
};
/** Slot definitions for Cell component. @keywords cell, slots, include */
export interface CellSlotsInclude extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
    /** Slot for elements on the right. */
    trailing?(props: CellClassesSub): any;
    /** Slot for the main body content. */
    body?(props: CellClassesSub): any;
}