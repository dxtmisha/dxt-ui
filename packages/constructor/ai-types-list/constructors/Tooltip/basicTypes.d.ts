// md5:fd7b9a66ca1041b3ab81c62aec079946
import { Ref } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { AriaList } from '../../types/ariaTypes';
import { TooltipProps } from './props';
/**
 * Interface describing the control bindings for the tooltip. /
 * Интерфейс, описывающий привязки управления для тултипа.
 */
export type TooltipControlBinds = AriaList & {
    /** CSS class for the control element / CSS-класс для элемента управления */
    class: string;
    /** Click event handler / Обработчик события клика */
    onClick: () => void;
    /** Mouse over event handler / Обработчик события наведения мыши */
    onMouseover: (event: MouseEvent) => void;
    /** Mouse out event handler / Обработчик события ухода мыши */
    onMouseout: (event: MouseEvent) => void;
};
/**
 * Type describing the tooltip control. /
 * Тип, описывающий управление тултипом.
 */
export type TooltipControl = TooltipControlBinds & {
    /** Reactive state of the tooltip open state / Реактивное состояние открытости тултипа */
    open: Ref<boolean>;
    /** Control bindings / Привязки управления */
    binds: Record<string, any>;
};
/**
 * Component map for including the Tooltip component. /
 * Карта компонентов для подключения компонента Tooltip.
 */
export type TooltipComponentInclude = {
    /** Tooltip component configuration / Конфигурация компонента тултипа */
    tooltip?: object;
};
/**
 * Slots used to include and configure the Tooltip component. /
 * Слоты для подключения и настройки компонента Tooltip.
 */
export type TooltipSlotsInclude = {
    /** Slot for the tooltip body content / Слот для основного содержимого тултипа */
    tooltip?(): any;
};
/**
 * Props used to include and configure the Tooltip component. /
 * Свойства для подключения и настройки компонента Tooltip.
 */
export type TooltipPropsInclude<Tooltip extends TooltipProps = TooltipProps> = {
    /** Label text for the tooltip / Текст метки для тултипа */
    tooltipLabel?: string;
    /** Description text for the tooltip / Текст описания для тултипа */
    tooltipDescription?: string;
    /** Additional attributes for Tooltip component / Дополнительные атрибуты для компонента Tooltip */
    tooltipAttrs?: ConstrBind<Tooltip>;
};
