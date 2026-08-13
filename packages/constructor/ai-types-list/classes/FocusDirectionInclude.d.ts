// md5:64bef448d116057b127f2bf46366c52e true
import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';

/** Coordinate structure representing element center or difference. @keywords focus, coordinates, x, y */
export type FocusCoordinates = {
    x: number;
    y: number;
};

/** Manages directional focus navigation on child elements via keyboard arrows while keeping parent focus. @keywords focus, navigation, keyboard, directional */
export declare class FocusDirectionInclude {
    /** Creates instance for managing directional child focus. @keywords focus, constructor, init */
    constructor(element: Ref<HTMLElement | undefined>, selector?: string, activeSelector?: string, activeClass?: string);
    /** Gets binding properties for the parent focus container element. @keywords focus, binds, attributes, container */
    get binds(): {
        tabindex: number;
        onFocus: () => void;
        onBlur: () => void;
    };
    /** Sets focus to the default/initial child element. @keywords focus, activate, default, element */
    activateDefault(): this;
    /** Clears the active focus class from all child elements. @keywords focus, clear, active, class */
    clearActive(): this;
    /** Handler for focus event. @keywords focus, event, handler */
    readonly onFocus: () => void;
    /** Handler for blur event. @keywords blur, event, handler */
    readonly onBlur: () => void;
}