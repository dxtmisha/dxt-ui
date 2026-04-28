import { ConstrBind } from '@dxtmisha/functional';
import { CaptionProps, CaptionSlots } from '../../types/captionTypes';
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelAlternativeSlots, LabelProps } from '../../types/labelTypes';
import { HeaderPropsBasic } from './props';
/**
 * Interface for describing which components need to be connected for Header work/
 * Интерфейс для описания, какие компоненты надо подключить для работы Header
 */
export type HeaderComponentInclude = {
    /** Header component/ Компонент Header */
    header?: object;
};
/**
 * Type for including Header properties/
 * Тип для подключения свойств Header
 */
export type HeaderPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & {
    /** HTML tag for the header section/ HTML-тег для секции шапки */
    tagHeader?: string;
    /** Attributes for Header/ Атрибуты для Header */
    headerAttrs?: ConstrBind<Header>;
};
/**
 * Type for including Header slots/
 * Тип для подключения слотов Header
 */
export interface HeaderSlotsInclude extends LabelAlternativeSlots, CaptionSlots {
    /** Slot for trailing content/ Слот для правого контента */
    trailing?(props: any): any;
}
