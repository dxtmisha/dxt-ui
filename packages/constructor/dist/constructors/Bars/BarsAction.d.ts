import { ToRefs, Ref, ComputedRef } from 'vue';
import { BarsProps } from './props';
/**
 * Управление action‑режимом для Bars.
 *
 * Controls Bars action mode.
 */
export declare class BarsAction {
    protected readonly props: BarsProps;
    protected readonly refs: ToRefs<BarsProps>;
    /** Текущее состояние action‑режима / Current action mode state */
    readonly action: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     */
    constructor(props: BarsProps, refs: ToRefs<BarsProps>);
    /**
     * Checks if action mode is possible.
     *
     * Проверяет, возможен ли режим действий.
     */
    readonly isPossible: ComputedRef<boolean>;
    /**
     * Включить action‑режим.
     *
     * Enable action mode.
     */
    open(): void;
    /**
     * Выключить action‑режим.
     *
     * Disable action mode.
     */
    close(): void;
}
