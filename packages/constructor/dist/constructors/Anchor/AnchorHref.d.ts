import { AnchorProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Anchor href attribute handler
 *
 * Обработчик атрибута href якоря
 */
export declare class AnchorHref {
    protected readonly props: AnchorProps;
    /**
     * Constructor
     * @param props input data / входные данные
     */
    constructor(props: AnchorProps);
    /** Computed href attribute/ Вычисляемый атрибут href */
    readonly href: ComputedRef<string | undefined>;
    /**
     * Check if href exists
     *
     * Проверить, существует ли href
     */
    is(): boolean;
    /**
     * Get href value
     *
     * Получить значение href
     */
    get(): string | undefined;
    /**
     * Get full link
     *
     * Получить полную ссылку
     */
    getLink(): string;
}
