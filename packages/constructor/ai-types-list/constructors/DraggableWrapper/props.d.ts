// md5:4270cd558337899e325251d34db675b2 true
type DraggableWrapperPropsToken = {};

export type DraggableWrapperPropsBasic = {
  /** Custom classes for placeholder square element. */
  classesSquare?: string | string[];
  /** Delay before dragging starts in milliseconds. */
  delay?: number | string;
  /** Disables drag-and-drop sorting functionality. */
  disabled?: boolean;
  /** HTML tag of wrapper element. */
  tag?: string;
};

export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken;

/** Default property values for DraggableWrapper. */
export declare const defaultsDraggableWrapper: {
  tag: string;
};