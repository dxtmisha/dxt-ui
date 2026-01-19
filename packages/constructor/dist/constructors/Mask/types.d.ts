import { ComputedRef } from 'vue';
import { ConstrClass } from '@dxtmisha/functional';
import { FieldValidationItem } from '../../types/fieldTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MaskComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MaskEmits = {
    focus: [event: FocusEvent];
    blur: [event: FocusEvent];
    keydown: [event: KeyboardEvent];
    keyup: [event: KeyboardEvent];
    beforeinput: [event: InputEvent];
    input: [
        event: InputEvent,
        value: FieldValidationItem
    ];
    inputLite: [value: FieldValidationItem];
    change: [
        event: InputEvent,
        value: FieldValidationItem
    ];
    changeLite: [value: FieldValidationItem];
    paste: [event: ClipboardEvent];
    reset: [event: Event];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MaskExpose {
    valueBasic: ComputedRef<string>;
    value: ComputedRef<string>;
    setValue(value: string): boolean;
    clear(): boolean;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MaskSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MaskClasses = {
    main: ConstrClass;
    input: string;
    character: string;
    characterItem: string;
};
