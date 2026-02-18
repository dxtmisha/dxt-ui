import { ConstrEmit } from '@dxtmisha/functional';
import { MotionAxisElement } from './MotionAxisElement';
import { MotionAxisPrevious } from './MotionAxisPrevious';
import { MotionAxisSelected } from './MotionAxisSelected';
import { MotionAxisStyles } from './MotionAxisStyles';
import { MotionAxisSelectedValue } from './basicTypes';
import { MotionAxisEmits } from './types';
import { MotionAxisProps } from './props';
import { Ref } from 'vue';
/**
 * Class for managing statuses.
 *
 * Класс для управления статусами.
 */
export declare class MotionAxisStatus {
    protected readonly element: MotionAxisElement;
    protected readonly selected: MotionAxisSelected;
    protected readonly previous: MotionAxisPrevious;
    protected readonly styles: MotionAxisStyles;
    protected readonly emits?: ConstrEmit<MotionAxisEmits> | undefined;
    /** Element preparation status/ Статус подготовки элемента */
    readonly preparation: Ref<MotionAxisSelectedValue, MotionAxisSelectedValue>;
    /** Active element status/ Статус активного элемента */
    readonly active: Ref<MotionAxisSelectedValue, MotionAxisSelectedValue>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element class object for managing an element/ объект класса для управления элементом
     * @param selected class object for managing the active element/ объект класса для управления активным элементом
     * @param previous object for managing the outgoing slide/ объект управления уходящим слайдом
     * @param styles class object for managing styles/ объект класса для управления стилями
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: MotionAxisProps, element: MotionAxisElement, selected: MotionAxisSelected, previous: MotionAxisPrevious, styles: MotionAxisStyles, emits?: ConstrEmit<MotionAxisEmits> | undefined);
    /**
     * Checks if the element is in preparation status.
     *
     * Проверяет, находится ли элемент в статусе подготовки.
     * @param key element key/ ключ элемента
     */
    isPreparation(key: string): boolean;
    /**
     * Checks if the element is active.
     *
     * Проверяет, активен ли элемент.
     * @param key element key/ ключ элемента
     */
    isActive(key: string): boolean;
    /**
     * Returns the selected element.
     *
     * Возвращает выбранный элемент.
     */
    get(): MotionAxisSelectedValue;
    /**
     * Changes the active slide.
     *
     * Изменяет активный слайд.
     * @param selected selected slide/ выбранный слайд
     */
    set(selected: MotionAxisProps['selected']): this;
    /**
     * Beginning of activation.
     *
     * Начало активации.
     */
    start(): void;
    /**
     * Waiting for element preparation.
     *
     * Ожидание подготовки элемента.
     */
    protected expectation(): void;
    /**
     * Stopping and deleting all data.
     *
     * Остановка и удаление всех данных.
     */
    protected readonly end: () => void;
}
