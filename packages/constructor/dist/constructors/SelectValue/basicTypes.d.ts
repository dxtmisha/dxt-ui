import { ConstrBind } from '@dxtmisha/functional';
import { SelectValueProps } from './props';
/**
 * Type describing selectValue component inclusion/
 * Тип, описывающий включение компонента selectValue
 */
export type SelectValueComponentInclude = {
    /** SelectValue component configuration/ Конфигурация компонента значения выбора */
    selectValue?: object;
};
/** Interface for selectValue include props/ Интерфейс для свойств включения selectValue */
export interface SelectValuePropsInclude {
    /** Whether the component is disabled/ Отключен ли компонент */
    disabled?: boolean;
    /** Additional attributes for the SelectValue component/ Дополнительные атрибуты для компонента SelectValue */
    selectValueAttrs?: ConstrBind<SelectValueProps>;
}
