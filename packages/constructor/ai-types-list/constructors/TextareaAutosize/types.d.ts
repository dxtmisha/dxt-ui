// md5:845c47441544c4514b75d8fd4d8463d4
import { ConstrClass } from '@dxtmisha/functional';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TextareaAutosizeComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TextareaAutosizeEmits = {
    /** Event triggered on input/ Событие при вводе */
    input: [event: InputEvent];
};
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TextareaAutosizeExpose {
    /** Returns the current value/ Возвращает текущее значение */
    getValue(): string;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TextareaAutosizeSlots {
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TextareaAutosizeClasses = {
    main: ConstrClass;
    clone: string;
};
