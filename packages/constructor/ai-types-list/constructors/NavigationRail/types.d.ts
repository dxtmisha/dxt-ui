// md5:8527a610bf05c0f04bd227646e0fa3ad true
import { ConstrClass } from '@dxtmisha/functional';
export type NavigationRailComponents = NavigationItemComponentInclude & NavigationRailItemComponentInclude & ListMenuComponentInclude;
export type NavigationRailEmits = EventClickEmits & {
    close: [];
};
export interface NavigationRailExpose extends ListExpose {
}
export type NavigationRailSlots = ListSlots;
/** Navigation rail CSS classes @keywords navigation rail classes */
export type NavigationRailClasses = {
    main: ConstrClass;
    space: string;
    line: string;
    html: string;
    management: string;
    menu: string;
};