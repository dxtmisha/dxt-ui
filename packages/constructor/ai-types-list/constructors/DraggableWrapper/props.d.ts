// md5:372a46511592e64368ed9ee550ca2067 true
type DraggableWrapperPropsToken = {};

/** Basic properties for draggable wrapper component. @keywords draggable wrapper basic properties */
export type DraggableWrapperPropsBasic = {
    /** Disables drag-and-drop sorting. @keywords disabled sorting */
    disabled?: boolean;
    /** HTML wrapper element tag name. @keywords html tag element */
    tag?: string;
    /** Drag start delay in milliseconds or string format. @keywords delay milliseconds */
    delay?: number | string;
    /** Custom CSS classes for placeholder element. @keywords classes square placeholder */
    classesSquare?: string | string[];
};

/** Incoming properties for draggable wrapper component combining basic and token props. @keywords draggable wrapper props */
export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken;

/** Default configuration values for draggable wrapper component. @keywords defaults draggable wrapper */
export declare const defaultsDraggableWrapper: {
    tag: string;
};