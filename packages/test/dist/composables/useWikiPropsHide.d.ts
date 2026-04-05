import { Ref } from 'vue';
/**
 * Composable for managing the visibility of wiki properties.
 *
 * Композиция для управления видимостью свойств вики.
 */
export declare const useWikiPropsHide: () => Readonly<{
    /** Visibility state/ Состояние видимости */
    hide: Ref<boolean | undefined, boolean | undefined>;
    /**
     * Set the visibility state.
     *
     * Установить состояние видимости.
     * @param value hide value/ значение скрытия
     */
    setHide: (value: boolean) => void;
    /**
     * Toggle the visibility state.
     *
     * Переключить состояние видимости.
     */
    toggleHide: () => void;
} & {
    init(): Readonly<{
        /** Visibility state/ Состояние видимости */
        hide: Ref<boolean | undefined, boolean | undefined>;
        /**
         * Set the visibility state.
         *
         * Установить состояние видимости.
         * @param value hide value/ значение скрытия
         */
        setHide: (value: boolean) => void;
        /**
         * Toggle the visibility state.
         *
         * Переключить состояние видимости.
         */
        toggleHide: () => void;
    }>;
    destroyExecute?(): void;
}>;
