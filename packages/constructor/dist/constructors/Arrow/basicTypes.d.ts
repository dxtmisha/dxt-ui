import { ConstrBind } from '@dxtmisha/functional';
import { ArrowProps } from './props';
/** Arrow direction enum / Направление стрелки перечисление */
export declare enum ArrowDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    HIDE = "hide"
}
/** Arrow border offsets/ Отступы границ стрелки */
export type ArrowBorder = {
    /** Top offset/ Отступ сверху */
    top: number;
    /** Bottom offset/ Отступ снизу */
    bottom: number;
    /** Left offset/ Отступ слева */
    left: number;
    /** Right offset/ Отступ справа */
    right: number;
};
/** Arrow center coordinates/ Координаты центра стрелки */
export type ArrowCenter = {
    /** X coordinate/ Координата X */
    x: number;
    /** Y coordinate/ Координата Y */
    y: number;
};
/**
 * Component map for including the Arrow component/
 * Карта компонентов для подключения компонента Arrow
 */
export type ArrowComponentInclude = {
    /** Arrow component configuration/ Конфигурация компонента стрелки */
    arrow?: object;
};
/**
 * Props used to include and configure the Arrow component/
 * Свойства для подключения и настройки компонента Arrow
 */
export type ArrowPropsInclude<Arrow extends ArrowProps = ArrowProps> = {
    /** Show arrow/ Показать стрелку */
    arrowShow?: boolean;
    /** Arrow position/ Позиция стрелки */
    arrowPosition?: ArrowProps['position'];
    /** Additional attributes for Arrow component/ Дополнительные атрибуты для компонента Arrow */
    arrowAttrs?: ConstrBind<Arrow>;
};
