// md5:3a5b4729ac772dfd512b21483e47af75 true
/** CSS class names for DraggableWrapper elements and states. @keywords draggable classes style */
export type DraggableWrapperClassesList = {
    /** Blocks text selection during drag. */
    blockSelection: string;
    /** Displays the spacer element. */
    squareShow: string;
    /** Active element being dragged. */
    active: string;
    /** Element returning to its position. */
    return: string;
    /** Selected elements. */
    selected: string;
    /** Additional selected elements. */
    selection: string;
    /** Overflow selected elements. */
    selectionMore: string;
    /** Trigger element for dragging. */
    click: string;
    /** Drop target area. */
    drop: string;
    /** Active target drop area. */
    dropActive: string;
    /** Element defining layout position. */
    position: string;
};
/** Control class properties for draggable child elements. @keywords draggable control classes */
export type DraggableWrapperControl = {
    /** Combined CSS class name for child items. */
    className: string;
    /** CSS class for drag trigger element. */
    classClick: string;
    /** CSS class for drop target areas. */
    classDrop: string;
    /** CSS class for draggable items. */
    classPosition: string;
};
/** Event parameters emitted by the DraggableWrapper component. @keywords draggable event parameters payload */
export interface DraggableWrapperEventParameters {
    /** Active dragged element. */
    active: HTMLElement;
    /** Stack of selected elements. */
    selection?: HTMLElement[];
    /** Target drop element. */
    to?: HTMLElement;
    /** Array containing active and target element values. */
    value: (string | undefined)[];
    /** Value of the active element. */
    valueActive?: string;
    /** Array of values for selected elements. */
    valueSelection: (string | undefined)[];
    /** Value of the target element. */
    valueTo?: string;
    /** Indicates DOM placement direction relative to target. */
    before?: boolean;
}