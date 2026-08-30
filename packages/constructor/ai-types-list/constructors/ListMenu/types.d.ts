// md5:092a294f713e0527dcd890c5e6e90230 true
import type { ConstrClass } from '@dxtmisha/functional';

export type ListMenuComponents = WindowComponentInclude;
export type ListMenuEmits = WindowEmitsInclude;
export interface ListMenuExpose extends WindowExposeInclude {}

export interface ListMenuSlots {
    /** Menu header slot @keywords head, header */
    head?(props: WindowControlItem): any;
    /** Menu list content slot @keywords list, content */
    list?(props: any): any;
}

export type ListMenuClasses = {
    main: ConstrClass;
    head: string;
    list: string;
};