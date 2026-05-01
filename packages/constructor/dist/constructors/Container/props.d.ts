import { AreaProps } from '../../types/areaTypes';
type ContainerPropsToken = {
    align?: string | 'left' | 'center' | 'right';
};
export type ContainerPropsBasic = AreaProps & {};
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
