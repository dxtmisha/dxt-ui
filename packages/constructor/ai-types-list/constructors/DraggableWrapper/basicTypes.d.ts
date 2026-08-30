// md5:4a7fabbfd387f79a4bf94e98959028d2 true
/** Event parameters for the DraggableWrapper component. @keywords drag, drop, event, draggable */
export interface DraggableWrapperEventParameters {
    /** Active draggable element. */
    active: HTMLElement;
    /** Target drop element. */
    to?: HTMLElement;
    /** Selected elements stack. */
    selection?: HTMLElement[];
    /** Array of values: [activeValue, toValue]. */
    value: (string | undefined)[];
    /** Value of the active element. */
    valueActive?: string;
    /** Value of the target element. */
    valueTo?: string;
    /** Array of values of selected elements. */
    valueSelection: (string | undefined)[];
    /** DOM layout direction. */
    before?: boolean;
}

/** Control class properties for child elements. @keywords draggable, control, css_classes */
export type DraggableWrapperControl = {
    /** Combined CSS class name for child items. */
    className: string;
    /** CSS class for the drag trigger element. */
    classClick: string;
    /** CSS class for drop target areas. */
    classDrop: string;
    /** CSS class for standard draggable items. */
    classPosition: string;
};

/** CSS class list for DraggableWrapper state and element styling. @keywords draggable, classes, styling */
export type DraggableWrapperClassesList = {
    /** Class for trigger element. */
    click: string;
    /** Class for drop target area. */
    drop: string;
    /** Class for element defining position. */
    position: string;
    /** Class for active element being dragged. */
    active: string;
    /** Class indicating drag target spot. */
    go: string;
    /** Class for additional selected elements. */
    selection: string;
    /** Class for overflow selected elements. */
    selectionMore: string;
    /** Class for element returning to position. */
    return: string;
    /** Class for showing the spacer element. */
    show: string;
    /** Class for active target drop area. */
    dragged: string;
    /** Class for selected elements. */
    selected: string;
    /** Class for blocking text selection during drag. */
    body: string;
};