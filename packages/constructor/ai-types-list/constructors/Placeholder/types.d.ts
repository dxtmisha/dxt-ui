// md5:a5a2c0330abbf63feb71639c8b98c177 true
import { ConstrClass } from '@dxtmisha/functional';
export type PlaceholderComponents = ImageComponentInclude & ActionsComponentInclude;
export type PlaceholderEmits = ImageEmitsInclude & ActionsEmitsInclude;
export interface PlaceholderExpose {
}
/** Interface for component slots. @keywords placeholder slots label description */
export interface PlaceholderSlots extends LabelSlots, DescriptionSlots {
    context?(props: any): any;
}
export type PlaceholderClasses = {
    main: ConstrClass;
    image: string;
    label: string;
    description: string;
    actions: string;
};