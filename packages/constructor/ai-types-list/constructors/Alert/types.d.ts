// md5:9ffc56ff496a0fe312ef676e6d7291a9 true
import { ConstrClass } from '@dxtmisha/functional';

export type AlertComponents = IconComponentInclude & ButtonComponentInclude & ActionsComponentInclude & AlertLinkComponentInclude;

export type AlertEmits = AlertLinkEmitsInclude & ActionsEmitsInclude & EventClickEmits & {
    close: [];
};

export interface AlertExpose {
}

export interface AlertSlots extends LabelSlots, DescriptionSlots {
    trailing?(props: any): any;
    body?(props: any): any;
}

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