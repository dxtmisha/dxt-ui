// md5:26996471f0298427abbfad5135e97c4d
import { ConstrClass } from '@dxtmisha/functional';
import { FieldLabelComponentInclude, FieldLabelSlotsInclude } from '../FieldLabel';
import { FieldMessageComponentInclude } from '../FieldMessage';
import { IconComponentInclude } from '../Icon';
import { SliderComponentInclude, SliderSlots, SliderValueType } from '../Slider';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderFieldComponents = SliderComponentInclude & FieldLabelComponentInclude & FieldMessageComponentInclude & IconComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderFieldEmits = FieldBasicEmits<SliderValueType>;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SliderFieldExpose extends FieldBasicExpose<SliderValueType> {
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SliderFieldSlots extends FieldLabelSlotsInclude, SliderSlots {
    /** Slot for leading content / Слот для префиксного содержимого */
    leading?: (props: any) => any;
    /** Slot for trailing content / Слот для суффиксного содержимого */
    trailing?: (props: any) => any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderFieldClasses = {
    /** Main CSS class / Главный CSS класс */
    main: ConstrClass;
    body: string;
    hidden: string;
    labelSlider: string;
    labelLeading: string;
    labelTrailing: string;
    input: string;
    inputMin: string;
    inputMax: string;
    value: string;
    valueMin: string;
    valueMax: string;
    slider: string;
};
