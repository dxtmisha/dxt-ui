// md5:372a46511592e64368ed9ee550ca2067
/** Type describing token properties / Тип, описывающий свойства токенов */
type DraggableWrapperPropsToken = {};
/** Type describing basic properties / Тип, описывающий базовые свойства */
export type DraggableWrapperPropsBasic = {
    /** Disables the drag-and-drop sorting functionality / Отключает функционал сортировки перетаскиванием */
    disabled?: boolean;
    /** HTML tag of the wrapper element / HTML-тег элемента обертки */
    tag?: string;
    /** Delay before dragging starts in milliseconds / Задержка перед началом перетаскивания в миллисекундах */
    delay?: number | string;
    /** Custom classes for the placeholder square element / Пользовательские классы для элемента-заполнителя */
    classesSquare?: string | string[];
};
/** Type describing incoming properties / Тип, описывающий входящие свойства */
export type DraggableWrapperProps = DraggableWrapperPropsBasic & DraggableWrapperPropsToken;
/** Default value for property / Значение по умолчанию для свойства */
export declare const defaultsDraggableWrapper: {
    tag: string;
};
export {};
