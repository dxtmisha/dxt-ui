// md5:372a46511592e64368ed9ee550ca2067 true
type DraggableWrapperPropsToken = {};

export type DraggableWrapperPropsBasic = {
    /** Disables drag-and-drop sorting */
    disabled?: boolean;
    /** HTML tag of the wrapper element */
    tag?: string;
    /** Delay before dragging starts in milliseconds */
    delay?: number | string;
    /** Custom classes for the placeholder square element */
    classesSquare?: string | string[];
};

export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken;

/** Default property values @keywords defaults, draggable, wrapper */
export declare const defaultsDraggableWrapper: {
    tag: string;
};