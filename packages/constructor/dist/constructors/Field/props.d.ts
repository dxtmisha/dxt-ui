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
    /** Status/ Статус */
    /** Whether the previous button is disabled/ Отключена ли кнопка «Назад» */
    disabledPrevious?: boolean;
    /** Whether the next button is disabled/ Отключена ли кнопка «Вперед» */
    disabledNext?: boolean;
    /** Style/ Стили */
    /** Unique identifier for the field/ Уникальный идентификатор для поля */
    id?: string | number;
    /** Whether the counter is positioned at the top/ Находится ли счетчик сверху */
    counterTop?: boolean;
    /** Whether to show the cancel button/ Показывать ли кнопку отмены */
    cancelShow?: boolean;
    /** Icon for the left arrow/ Иконка для стрелки влево */
    iconArrowLeft?: IconValue<Icon>;
    /** Icon for the right arrow/ Иконка для стрелки вправо */
    iconArrowRight?: IconValue<Icon>;
    /** Icon for the plus action/ Иконка для действия «плюс» */
    iconPlus?: IconValue<Icon>;
    /** Icon for the minus action/ Иконка для действия «минус» */
    iconMinus?: IconValue<Icon>;
    /** Icon for the close action/ Иконка для действия закрытия */
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
