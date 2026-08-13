// md5:ed56031e29e074df19ac1198ffec89ad
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ActionsPropsBasic, ActionsPropsInclude } from '../Actions';
import { DescriptionProps } from '../../types/descriptionTypes';
import { LabelProps } from '../../types/labelTypes';
type PlaceholderPropsToken = {};
export type PlaceholderPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Actions extends ActionsPropsBasic = ActionsPropsBasic> = ImagePropsInclude<Image> & LabelProps & DescriptionProps & ActionsPropsInclude<Actions>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type PlaceholderProps = PlaceholderPropsBasic & PlaceholderPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsPlaceholder: {};
export {};
