// md5:467786968977d54a817f8abddd810759
import { Ref, ToRefs, ComputedRef } from 'vue';
import { EventItem, ConstrEmit } from '@dxtmisha/functional';
import { ElementOrWindow } from '@dxtmisha/functional-basic';
import { HeadroomEmitsInclude, HeadroomEventItem, HeadroomExposeInclude, HeadroomPropsInclude } from '../types/headroomTypes';
/**
 * Headroom logic class managing sticky header position and scroll status calculations.
 * Handles scroll event binding, sticky state evaluation, transform CSS custom property calculation,
 * and disappears scroll mode offset updates.
 *
 * Класс логики Headroom, управляющий липким положением шапки и вычислениями состояния прокрутки.
 * Обрабатывает привязку событий прокрутки, вычисление состояния прилипания, расчет пользовательских CSS свойств трансформации
 * и обновление смещения в режиме прокрутки disappears.
 */
export declare class HeadroomInclude {
    protected readonly props: HeadroomPropsInclude;
    protected readonly refs: ToRefs<HeadroomPropsInclude>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly emits?: ConstrEmit<HeadroomEmitsInclude> | undefined;
    /** Current scroll position in pixels / Текущая позиция прокрутки в пикселях */
    readonly value: Ref<number, number>;
    /** Disappears top offset in pixels / Верхнее смещение скрытия в пикселях */
    readonly disappearsValue: Ref<number, number>;
    /** Reactive state indicating whether scroll position is greater than zero / Реактивное состояние, указывающее, превышает ли прокрутка ноль */
    readonly isSticky: ComputedRef<boolean>;
    /** Transformation offset in pixels capped at transform threshold / Смещение трансформации в пикселях, ограниченное порогом */
    readonly transformValue: ComputedRef<number>;
    /** Transformation percentage ratio from 0 to 1 / Процентное соотношение трансформации от 0 до 1 */
    readonly transformPercent: ComputedRef<number>;
    /** Saved previous scroll position in pixels / Сохраненное предыдущее значение прокрутки в пикселях */
    protected readonly valuePrevious: Ref<number, number>;
    /** Difference between previous and current scroll positions in pixels / Разница между предыдущей и текущей позицией прокрутки в пикселях */
    protected readonly valueDifference: ComputedRef<number>;
    /** Scroll event listener instance / Экземпляр слушателя событий прокрутки */
    protected eventScroll?: EventItem<ElementOrWindow, Event>;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
     * @param element input element / элемент ввода
     * @param className class name / название класса
     * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
     */
    constructor(props: HeadroomPropsInclude, refs: ToRefs<HeadroomPropsInclude>, element: Ref<HTMLElement | undefined>, className?: string, emits?: ConstrEmit<HeadroomEmitsInclude> | undefined);
    /**
     * Exported headroom values and methods.
     *
     * Экспонируемые значения и методы headroom.
     * @returns object with exposed properties and methods / объект с экспонируемыми свойствами и методами
     */
    get expose(): HeadroomExposeInclude;
    /**
     * Recalculates scroll metrics and updates headroom states and element styles.
     *
     * Пересчитывает метрики прокрутки, обновляет состояния headroom и стили элемента.
     * @returns void
     */
    readonly update: () => void;
    /**
     * Returns target element or window for scroll listening.
     *
     * Возвращает целевой элемент или окно для прослушивания прокрутки.
     * @returns scroll target element or window / элемент или окно для прокрутки
     */
    protected get eventElement(): ElementOrWindow;
    /**
     * Returns current headroom event data.
     *
     * Возвращает текущие данные события headroom.
     * @returns object with headroom event metrics / объект с данными события headroom
     */
    protected get eventItem(): HeadroomEventItem;
    /**
     * Returns transform threshold value in pixels.
     *
     * Возвращает пороговое значение трансформации в пикселях.
     * @returns transform threshold in pixels / значение порога трансформации в пикселях
     */
    protected get transformThreshold(): number;
    /**
     * Calculates top offset for disappears scroll mode.
     *
     * Вычисляет верхнее смещение для режима прокрутки disappears.
     * @returns calculated move offset in pixels / вычисленное значение смещения в пикселях
     */
    protected getDisappearsOffset(): number;
    /**
     * Returns top position relative to scroll element and height of element.
     *
     * Возвращает верхнюю позицию относительно элемента прокрутки и высоту элемента.
     * @returns object containing element height and top position / объект, содержащий высоту и верхнюю позицию элемента
     */
    protected getElementRect(): {
        height: number;
        top: number;
    };
    /**
     * Returns top position of scroll element.
     *
     * Возвращает верхнюю позицию элемента прокрутки.
     * @returns top position of scroll element in pixels / верхняя позиция элемента прокрутки в пикселях
     */
    protected getScrollElementTop(): number;
    /**
     * Returns current scroll position of event target element or window.
     *
     * Возвращает текущую позицию прокрутки целевого элемента или окна.
     * @returns current scroll position in pixels / текущее значение прокрутки в пикселях
     */
    protected getScroll(): number;
    /**
     * Triggers scroll event emit.
     *
     * Вызывает генерацию события прокрутки.
     * @returns this instance / текущий экземпляр
     */
    protected readonly onScroll: () => this;
    /**
     * Starts scroll event listener.
     *
     * Запускает слушатель событий прокрутки.
     * @returns this instance / текущий экземпляр
     */
    protected start(): this;
    /**
     * Stops scroll event listener.
     *
     * Останавливает слушатель событий прокрутки.
     * @returns this instance / текущий экземпляр
     */
    protected stop(): this;
    /**
     * Toggles scroll listening and performs initial state calculation.
     *
     * Переключает прослушивание прокрутки и выполняет первоначальный расчет состояния.
     * @returns this instance / текущий экземпляр
     */
    protected toggle(): this;
    /**
     * Updates data-* attributes on target HTML element.
     *
     * Обновляет data-* атрибуты на целевом HTML элементе.
     * @returns this instance / текущий экземпляр
     */
    protected updateData(): this;
    /**
     * Updates top offset and element CSS variables for disappears scroll mode.
     *
     * Обновляет верхнее смещение и пользовательские CSS свойства элемента для режима прокрутки disappears.
     * @returns this instance / текущий экземпляр
     */
    protected updateDisappears(): this;
    /**
     * Updates element transform CSS custom properties.
     *
     * Обновляет пользовательские свойства CSS трансформации элемента.
     * @returns this instance / текущий экземпляр
     */
    protected updateTransform(): this;
    /**
     * Updates previous and current scroll position values.
     *
     * Обновляет значения предыдущей и текущей позиции прокрутки.
     * @returns this instance / текущий экземпляр
     */
    protected updateValue(): this;
}
