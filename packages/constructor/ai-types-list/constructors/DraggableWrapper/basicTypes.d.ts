// md5:4a7fabbfd387f79a4bf94e98959028d2 true
export interface DraggableWrapperEventParameters {
    active: HTMLElement;
    to?: HTMLElement;
    selection?: HTMLElement[];
    value: (string | undefined)[];
    valueActive?: string;
    valueTo?: string;
    valueSelection: (string | undefined)[];
    before?: boolean;
}
export type DraggableWrapperControl = {
    className: string;
    classClick: string;
    classDrop: string;
    classPosition: string;
};
export type DraggableWrapperClassesList = {
    click: string;
    drop: string;
    position: string;
    active: string;
    go: string;
    selection: string;
    selectionMore: string;
    return: string;
    show: string;
    dragged: string;
    selected: string;
    body: string;
};