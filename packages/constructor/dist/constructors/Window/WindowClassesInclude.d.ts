import { WindowClassesList } from './basicTypes';
/**
 * Helper class to access window CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам окна по дизайну.
 */
export declare class WindowClassesInclude {
    protected readonly design: string;
    /**
     * Constructor
     * @param design design name/ название дизайна
     */
    constructor(design: string);
    /**
     * Returns list of window classes for the specified design.
     *
     * Возвращает список классов окна для указанного дизайна.
     */
    get(): WindowClassesList;
    /**
     * Returns an object with window classes under classesWindow key.
     *
     * Возвращает объект с классами окна под ключом classesWindow.
     */
    getObject(): {
        classesWindow: WindowClassesList;
    };
}
