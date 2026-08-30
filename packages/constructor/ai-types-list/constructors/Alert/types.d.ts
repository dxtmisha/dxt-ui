// md5:08eedaf7cacfe6d2d05d59950be17c9e true
import { type ConstrClass } from '@dxtmisha/functional';

/** Sub-components required for Alert @keywords alert components */
export type AlertComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude & AlertLinkComponentInclude;

/** Event emits supported by Alert @keywords alert emits events */
export type AlertEmits = AlertLinkEmitsInclude & ActionsEmitsInclude & EventClickEmits & {
    close: [];
};

/** Exposed instance interface for Alert @keywords alert expose */
export interface AlertExpose {
}

/** Available slots for Alert @keywords alert slots */
export interface AlertSlots extends LabelSlots, DescriptionSlots {
    trailing?(props: any): any;
    body?(props: any): any;
}

/** CSS class names structure for Alert elements @keywords alert classes */
export type AlertClasses = {
    main: ConstrClass;
    icon: string;
    trailing: string;
    context: string;
    label: string;
    description: string;
    body: string;
    button: string;
    buttons: string;
    buttonClose: string;
    links: string;
    linksItem: string;
    actions: string;
};