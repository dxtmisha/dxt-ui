// md5:df6950ec6f9f2bfcf89b11d8443f6ca8 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Control data passed to slots and subcomponents @keywords field, control, slot_data */
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

/** Subcomponent connections configuration for Field @keywords field, component, include */
export type FieldComponentInclude = {
    field?: object;
};

/** Available slots for FieldInclude @keywords field, slots, include */
export interface FieldSlotsInclude extends Omit<FieldSlots, 'default'> {}

/** Properties for FieldInclude @keywords field, props, include */
export type FieldPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = Omit<FieldPropsBasic<Icon, FieldLabel, FieldMessage, FieldCounter, Progress>, 'disabledPrevious' | 'disabledNext' | 'to' | 'value' | 'maxlength' | 'cancelShow' | 'counter' | 'counterTemplate' | 'counterTop' | 'iconArrowLeft' | 'iconArrowRight' | 'iconPlus' | 'iconMinus' | 'iconClose'> & {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    align?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    fieldAttrs?: ConstrBind<Field>;
};