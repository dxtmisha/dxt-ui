// md5:12b8f6f1a96197b237099d65ca316e23 true
import type { ConstrClass } from '@dxtmisha/functional';

export type PlaceholderComponents = ImageComponentInclude & ActionsComponentInclude;

export type PlaceholderEmits = ImageEmitsInclude & ActionsEmitsInclude;

export interface PlaceholderExpose {}

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