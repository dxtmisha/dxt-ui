// md5:768f05425f4d002fbbbb6b75e55a5910 true
import { ConstrClass } from '@dxtmisha/functional';
export type FieldComponents = IconComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & ProgressComponentInclude;
export type FieldEmits = EventClickEmits;
export interface FieldExpose {
}
export interface FieldSlots extends CaptionSlots, PrefixSlots, SuffixSlots, FieldLabelSlotsInclude {
    /** Slot for displaying content before the input area @keywords leading slot input */
    leading?(props: FieldControl): any;
    /** Slot for displaying content after the input area @keywords trailing slot input */
    trailing?(props: FieldControl): any;
    /** Default slot for the input element @keywords default slot input */
    default?(props: FieldControl): any;
}
export type FieldClasses = {
    main: ConstrClass;
    body: string;
    bodyInput: string;
    bodyTitle: string;
    bodyTitleLabel: string;
    bodyTitleLabelText: string;
    bodyScoreboard: string;
    bodyScoreboardLeft: string;
    bodyScoreboardRight: string;
    bodyScoreboardSpace: string;
    bodyScoreboardInput: string;
    bodyBorder: string;
    required: string;
};