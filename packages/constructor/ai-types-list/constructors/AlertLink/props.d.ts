// md5:50f20c110c763634e4c36e0b4856774e
import { LabelProps } from '../../types/labelTypes';
import { EventClickProps } from '../../types/eventClickTypes';
/** Type describing tokens of incoming properties / Тип, описывающий токены входящих свойств */
type AlertLinkPropsToken = {
    divider?: boolean;
};
/** Basic type describing incoming properties / Базовый тип, описывающий входящие свойства */
export type AlertLinkPropsBasic = LabelProps & EventClickProps;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AlertLinkProps = AlertLinkPropsBasic & AlertLinkPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAlertLink: {
    divider: boolean;
};
export {};
