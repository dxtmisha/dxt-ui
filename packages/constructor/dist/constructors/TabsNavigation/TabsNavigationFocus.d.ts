import { Ref } from 'vue';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional';
import { TabsNavigationSelected } from './TabsNavigationSelected';
/**
 * Class for managing focus navigation.
 *
 * Класс для управления навигацией фокуса.
 */
export declare class TabsNavigationFocus {
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly selected: TabsNavigationSelected;
    /**
     * Current focus value.
     *
     * Текущее значение фокуса.
     */
    readonly item: Ref<NumberOrStringOrBoolean | undefined, NumberOrStringOrBoolean | undefined>;
    /**
     * Constructor
     * @param element main element/ главный элемент
     * @param selected selected value object/ объект значения выделения
     */
    constructor(element: Ref<HTMLElement | undefined>, selected: TabsNavigationSelected);
    /**
     * Returns the current focus value.
     *
     * Возвращает текущее значение фокуса.
     */
    get(): string | undefined;
    /**
     * Applies the current focus value to the selection.
     *
     * Применяет текущее значение фокуса к выделению.
     */
    apply(): this;
    /**
     * Sets the focus to the specified value.
     *
     * Устанавливает фокус на указанное значение.
     * @param focus focus value/ значение фокуса
     */
    set(focus?: string): this;
    /**
     * Sets the initial focus position based on the selected value.
     *
     * Устанавливает начальную позицию фокуса на основе выбранного значения.
     */
    position(): this;
    /**
     * Resets the focus.
     *
     * Сбрасывает фокус.
     */
    reset(): this;
    /**
     * Returns the focused element.
     *
     * Возвращает элемент в фокусе.
     */
    protected getElement(): HTMLElement | undefined;
}
