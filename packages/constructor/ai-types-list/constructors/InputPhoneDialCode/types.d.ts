// md5:5413a141230c6ce107c6ddcc66f712ec true
import { ConstrClass } from '@dxtmisha/functional';

/** Components required for phone dial code functionality. @keywords components, phone, dial, code */
export type InputPhoneDialCodeComponents = ButtonComponentInclude & MenuCountryComponentInclude;

/** Available events for phone dial code component. @keywords emits, events, phone, dial */
export type InputPhoneDialCodeEmits = MenuCountryEmits;

export interface InputPhoneDialCodeExpose {
}

export interface InputPhoneDialCodeSlots {
}

/** Subclass CSS classes for phone dial code elements. @keywords classes, css, styles, phone */
export type InputPhoneDialCodeClasses = {
    main: ConstrClass;
    button: string;
    menuCountry: string;
};