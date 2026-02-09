import { PrefixProps } from '../../types/prefixTypes';
import { SuffixProps } from '../../types/suffixTypes';
import { CaptionProps } from '../../types/captionTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { TextCancelPropsInclude } from '../../types/textTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { SkeletonPropsInclude } from '../Skeleton';
export type FieldPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    block?: boolean;
    isValue?: boolean;
    basic?: boolean;
    boxed?: boolean;
    tonal?: boolean;
    filled?: boolean;
    outlined?: boolean;
    classic?: boolean;
    arrowCarousel?: boolean;
    arrowStepper?: boolean;
    arrowAlign?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    align?: 'center' | 'right' | 'left';
    width?: string | 'custom';
};
export type FieldPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = IconTrailingPropsInclude<Icon> & PrefixProps & SuffixProps & CaptionProps & FieldLabelPropsInclude<FieldLabel, FieldCounter> & FieldMessagePropsInclude<FieldMessage, FieldCounter> & ProgressPropsInclude<Progress> & EnabledProps & EventClickProps & SkeletonPropsInclude & TextCancelPropsInclude & {
    disabledPrevious?: boolean;
    disabledNext?: boolean;
    id?: string | number;
    counterTop?: boolean;
    cancelShow?: boolean;
    iconArrowLeft?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    iconPlus?: IconValue<Icon>;
    iconMinus?: IconValue<Icon>;
    iconClose?: IconValue<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldProps = FieldPropsBasic & FieldPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsField: {
    arrowAlign: string;
    cancel: string;
};
