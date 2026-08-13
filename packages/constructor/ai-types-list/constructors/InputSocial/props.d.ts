// md5:9773dbc74b08ac0a076edee83384bcd8
import { InputSocialTypeValue } from '@dxtmisha/media';
import { MaskPropsBasic, MaskPropsInclude } from '../Mask';
import { IconPropsBasic } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { FieldInputSocialProps } from '../../types/fieldTypes';
/** Tokens for InputSocial properties / Токены для свойств InputSocial */
export type InputSocialPropsToken = {};
/** Basic properties of InputSocial / Базовые свойства InputSocial */
export type InputSocialPropsBasic<Mask extends MaskPropsBasic = MaskPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = MaskPropsInclude<Mask> & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldInputSocialProps & {
    /** Type of social network / Тип социальной сети */
    socialType?: InputSocialTypeValue;
    /** Dictionary of custom icons for each social network / Словарь кастомных иконок для каждой социальной сети */
    socialIcons?: Record<InputSocialTypeValue, string>;
};
/** Incoming properties for InputSocial / Входящие свойства для InputSocial */
export type InputSocialProps = InputSocialPropsBasic & InputSocialPropsToken;
/** Default values for InputSocial properties / Значения по умолчанию для свойств InputSocial */
export declare const defaultsInputSocial: {
    type: string;
    autocomplete: string;
    maskVisible: boolean;
};
