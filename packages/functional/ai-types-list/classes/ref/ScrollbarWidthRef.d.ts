// md5:161e4278c7c37f4383df8532f80c31ff
/**
 * Reactive wrapper for asynchronous scrollbar measurement. In a DOM runtime it requests the scrollbar flag and pixel width independently through `ScrollbarWidth`.
 *
 * Реактивная обёртка асинхронного измерения полосы прокрутки. В DOM-среде независимо запрашивает флаг и ширину в пикселях через `ScrollbarWidth`.
 */
export declare class ScrollbarWidthRef {
    /** Result of ScrollbarWidth.is(): true for a measured width other than -1 that is at most 8 pixels; initially undefined. / Результат ScrollbarWidth.is(): true для измеренной ширины не равной -1 и не больше 8 пикселей; изначально undefined. */
    readonly item: import("vue").Ref<boolean | undefined, boolean | undefined>;
    /** Width in pixels; initially 0 and updated independently. / Ширина в пикселях; изначально 0, обновляется независимо. */
    readonly width: import("vue").Ref<number, number>;
    /**
     * Initializes ScrollbarWidthRef with the supplied configuration.
     *
     * Инициализирует ScrollbarWidthRef с переданными настройками.
     */
    constructor();
    /** True once item is defined, regardless of the flag value or width readiness. / Истина после определения item независимо от значения флага и готовности ширины. */
    readonly is: import("vue").ComputedRef<boolean>;
}
