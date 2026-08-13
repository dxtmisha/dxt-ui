// md5:26a6383ec3c8a45f6d6594bf3c7268ed true
export type CellComponents = IconComponentInclude & ProgressComponentInclude & RippleComponentInclude;
export type CellEmits = EventClickEmits;
export interface CellExpose extends EventClickExpose {
}
export interface CellSlots extends LabelSlots, DescriptionSlots, CaptionSlots {
    /** Slot for trailing content @keywords trailing, right, cell */
    trailing?(props: CellClassesSub): any;
    /** Slot for body content @keywords body, main, cell */
    body?(props: CellClassesSub): any;
}
export type CellClasses = {
    main: ConstrClass;
    context: string;
    contextTrailing: string;
    label: string;
    description: string;
    caption: string;
    icon: string;
    trailing: string;
    body: string;
    loading: string;
};