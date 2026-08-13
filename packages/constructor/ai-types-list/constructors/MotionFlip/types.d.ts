// md5:cbe106d57dfa31a91ac4b36cdf42d80b
import { ConstrClass } from '@dxtmisha/functional';
import { MotionFlipCallback } from './basicTypes';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MotionFlipComponents = {};
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MotionFlipEmits = {};
/**
 * Interface describing exposed methods for MotionFlip.
 *
 * Интерфейс, описывающий публичные методы для MotionFlip.
 */
export interface MotionFlipExpose {
    /**
     * Stops active FLIP animation and clears state.
     *
     * Останавливает активную FLIP анимацию и сбрасывает состояние.
     */
    stop: () => void;
    /**
     * FLIP update animation handler.
     *
     * Обработчик обновления FLIP анимации.
     * @param callback function performing DOM updates / функция, выполняющая обновления DOM
     * @returns promise resolving when update sequence completes / промис, завершающийся при завершении обновления
     */
    update: (callback: MotionFlipCallback) => Promise<void>;
}
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MotionFlipSlots {
    /** Default slot for content elements / Слот по умолчанию для элементов контента */
    default?(props: any): any;
}
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MotionFlipClasses = {
    /** Main container class / Основной класс контейнера */
    main: ConstrClass;
    item: string;
};
