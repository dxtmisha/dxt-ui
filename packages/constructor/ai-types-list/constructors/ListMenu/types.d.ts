// md5:bf3507019c32eb2433e1b6efc15d395a true
import { ConstrClass } from '@dxtmisha/functional';

export type ListMenuComponents = WindowComponentInclude;

export type ListMenuEmits = WindowEmitsInclude;

export interface ListMenuExpose extends WindowExposeInclude {
}

/** Component slots for header and list content @keywords slots, render, list */
export interface ListMenuSlots {
    /** Slot for the menu header @keywords header, slot */
    head?(props: WindowControlItem): any;
    /** Slot for the menu list content @keywords list, content, slot */
    list?(props: any): any;
}

export type ListMenuClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};