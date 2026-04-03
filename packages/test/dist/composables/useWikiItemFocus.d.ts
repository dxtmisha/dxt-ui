import { Ref } from 'vue';
/**
 * Composable for managing the focus state of wiki items.
 *
 * Композиция для управления состоянием фокуса элементов вики.
 */
export declare const useWikiItemFocus: () => Readonly<{
    /** Focus state/ Состояние фокуса */
    focus: Ref<string | undefined, string | undefined>;
    /**
     * Set the focus state.
     *
     * Установить состояние фокуса.
     * @param value focus value/ значение фокуса
     */
    setFocus: (value: string) => void;
    /**
     * Reset the focus state.
     *
     * Сбросить состояние фокуса.
     */
    resetFocus: () => void;
} & {
    init(): Readonly<{
        /** Focus state/ Состояние фокуса */
        focus: Ref<string | undefined, string | undefined>;
        /**
         * Set the focus state.
         *
         * Установить состояние фокуса.
         * @param value focus value/ значение фокуса
         */
        setFocus: (value: string) => void;
        /**
         * Reset the focus state.
         *
         * Сбросить состояние фокуса.
         */
        resetFocus: () => void;
    }>;
    destroyExecute?(): void;
}>;
