/** List of classes for the skeleton/ Список классов для скелета */
export type SkeletonClassesList = {
    /** Class for text/ Класс для текста */
    classText: string;
    /** Class for text variant/ Класс для варианта текста */
    classTextVariant: string;
    /** Class for background/ Класс для фона */
    classBackground: string;
    /** Class for background after/ Класс для фона после */
    classBackgroundAfter: string;
    /** Class for background before/ Класс для фона перед */
    classBackgroundBefore: string;
    /** Class for background variant/ Класс для варианта фона */
    classBackgroundVariant: string;
    /** Class for border/ Класс для границы */
    classBorder: string;
    /** Class for border variant/ Класс для варианта границы */
    classBorderVariant: string;
    /** Class for hidden state/ Класс для скрытого состояния */
    classNone: string;
};
/** Interface for including skeleton properties/ Интерфейс для включения свойств скелета */
export type SkeletonPropsInclude = {
    /** Style/ Стили */
    /** Whether the skeleton is active/ Активен ли скелет */
    isSkeleton?: boolean;
};
