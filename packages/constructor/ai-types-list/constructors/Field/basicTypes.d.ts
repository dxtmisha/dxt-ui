// md5:e187251ea997c1d9ba492f8ff15cc781 true
import { ConstrBind } from '@dxtmisha/functional';
export type FieldControl = {
    id: string;
    className: string;
    classHidden: string;
    classForFocus: string;
    binds: AriaList & {
        'id': string;
        'class': string;
        'disabled'?: boolean;
        'readonly'?: boolean;
        'data-input': string;
    };
};
export type FieldComponentInclude = {
    field?: object;
};
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {
}
export type FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> & {
    /** Whether the field is focused @keywords focus state */
    focus?: boolean;
    /** Whether the field is selected @keywords selected state */
    selected?: boolean;
    /** Whether the field is read-only @keywords readonly state */
    readonly?: boolean;
    /** Whether the field is disabled @keywords disabled state */
    disabled?: boolean;
    /** Alignment of content in the field @keywords alignment align */
    align?: 'center' | 'right' | 'left';
    /** Cancellation behavior @keywords cancel behavior */
    cancel?: 'auto' | 'always' | 'none';
    /** Additional attributes for the Field component @keywords field attrs bind */
    fieldAttrs?: ConstrBind<Field>;
};