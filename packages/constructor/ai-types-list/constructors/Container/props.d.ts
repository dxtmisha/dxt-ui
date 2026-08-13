// md5:c9e9c27de5b477227018fd39a8853519
import { AreaPropsInclude } from '../../types/areaTypes';
type ContainerPropsToken = {
    align?: 'left' | 'center' | 'right';
};
export type ContainerPropsBasic = AreaPropsInclude & {};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsContainer: {
    align: string;
    area: string;
};
export {};
