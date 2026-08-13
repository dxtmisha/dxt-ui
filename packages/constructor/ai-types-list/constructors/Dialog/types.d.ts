// md5:4e0dba0421513ab03092c99cc53d75bd true
import { ConstrClass } from '@dxtmisha/functional';

export type DialogComponents = ModalComponents & IconComponentInclude;

/** Dialog available events definition @keywords dialog, emits, events */
export type DialogEmits = ModalEmits & {
    ok: [];
    close: [];
};

export interface DialogExpose extends ModalExpose {
}

export interface DialogSlots extends ModalSlots, LabelAlternativeSlots, DescriptionSlots {
}

/** Dialog CSS classes mapping structure @keywords dialog, classes, styles */
export type DialogClasses = {
    main: ConstrClass;
    title: string;
    header: string;
    information: string;
    icon: string;
    label: string;
    description: string;
    body: string;
    footer: string;
};