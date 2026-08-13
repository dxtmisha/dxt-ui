// md5:4ea029964263e68783bc33aca67cd822 true
export type TouchEventTypeX = 'left' | 'right' | 'none';
export type TouchEventTypeY = 'top' | 'bottom' | 'none';
export type TouchEventClient = {
    x: number;
    y: number;
};
/** Callback function for touch and mouse event handling @keywords touch event callback gesture direction */
export type TouchEventCallback = (typeX: TouchEventTypeX, typeY: TouchEventTypeY, clientX: number, clientY: number, mouse?: TouchEventClient, mouseMove?: TouchEventClient, touche?: Touch, toucheMove?: Touch) => Promise<boolean> | boolean;