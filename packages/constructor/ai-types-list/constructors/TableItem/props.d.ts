// md5:ad21679c52818eb2215cec52e91ef079
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { SkeletonPropsInclude } from '../Skeleton';
/**
 * Type describing token properties for TableItem component.
 *
 * Тип, описывающий токен-свойства для компонента TableItem.
 */
type TableItemPropsToken = {
    disabled?: boolean;
    selected?: boolean;
    align?: 'left' | 'center' | 'right';
    alignVertical?: 'top' | 'center' | 'bottom';
    dividerX?: boolean;
    dividerY?: boolean;
    labelClamp?: boolean;
    stickyTop?: boolean;
    stickyLeft?: boolean;
};
/**
 * Basic properties of the TableItem component.
 *
 * Базовые свойства компонента TableItem.
 */
export type TableItemPropsBasic = LabelProps & DescriptionProps & SkeletonPropsInclude & {
    /** Value of the table cell / Значение ячейки таблицы */
    value?: string;
    /** Tag name of the table cell / Имя тега ячейки таблицы */
    tag?: string;
    /** Number of columns the cell should span / Количество объединяемых колонок для ячейки */
    colspan?: string | number;
    /** Number of rows the cell should span / Количество объединяемых строк для ячейки */
    rowspan?: string | number;
    /** Unique rendering key / Уникальный ключ рендеринга */
    keyItem?: string;
    /** Column/field index name / Имя индекса колонки/поля */
    index?: string | number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableItemProps = TableItemPropsBasic & TableItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableItem: {
    align: string;
    alignVertical: string;
    tag: string;
};
export {};
