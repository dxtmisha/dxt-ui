// md5:54ca0db5ee5cfbfee354ad5a1acaa401
import { ConstrClass } from '@dxtmisha/functional';
import { ModelEmitsSelected } from '../../types/modelTypes';
import { SelectableAreaControl, SelectableAreaEventParameters } from './basicTypes';
/** Interface for describing which components need to be connected for work / Интерфейс для описания, какие компоненты надо подключить для работы */
export type SelectableAreaComponents = {};
/** Type describing available events / Тип, описывающий доступные события */
export type SelectableAreaEmits = ModelEmitsSelected & {
    /** Event triggered when items are selected / Событие, вызываемое при выборе элементов */
    selected: [parameters: SelectableAreaEventParameters];
};
/** Type describing available properties / Тип, описывающий доступные свойства */
export interface SelectableAreaExpose {
    /** Resets the selection / Сбрасывает выбор */
    reset: () => void;
    /** Selects items programmatically / Выбирает элементы программно */
    setSelected: (value: string | string[]) => void;
}
/** Type describing available slots / Тип, описывающий доступные слоты */
export interface SelectableAreaSlots {
    /** Default slot containing the selectable children / Дефолтный слот, содержащий выделяемые дочерние элементы */
    default?(props: SelectableAreaControl): any;
}
/** Type describing subclasses / Тип, описывающий подклассы */
export type SelectableAreaClasses = {
    /** Main root CSS class / Основной класс CSS */
    main: ConstrClass;
    item: string;
    square: string;
};
