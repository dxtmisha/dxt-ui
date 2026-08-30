// md5:4a69e5afc0912d6080dc97ba1333ec48 true
/** Event parameters for the SelectableArea component @keywords selectable area event parameters */
export interface SelectableAreaEventParameters {
    items: HTMLElement[];
    itemsSelected: HTMLElement[];
    selected: string[];
    focus?: string;
}

/** Control properties and event handlers for selectable child elements @keywords selectable control click handler */
export type SelectableAreaControl = {
    className: string;
    classSelection: string;
    classClick: string;
    onClick: (event: MouseEvent | TouchEvent) => void;
    selected: string[];
};

/** CSS class names mapping for SelectableArea component @keywords selectable area classes list */
export type SelectableAreaClassesList = {
    click: string;
    selected: string;
    show: string;
    body: string;
};