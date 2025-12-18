import { ConstrBind } from '@dxtmisha/functional';
import { SelectValueProps } from './props';
/**
 * Type describing selectValue component inclusion/
 * Тип, описывающий включение компонента selectValue
 */
export type SelectValueComponentInclude = {
    selectValue?: object;
};
/** Interface for selectValue include props/ Интерфейс для свойств включения selectValue */
export interface SelectValuePropsInclude {
    disabled?: boolean;
    selectValueAttrs?: ConstrBind<SelectValueProps>;
}
