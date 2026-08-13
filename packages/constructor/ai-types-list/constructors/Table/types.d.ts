// md5:2ccc8c73dfa549dd65ff38044c5fe01e
import { ConstrClass } from '@dxtmisha/functional';
import { CaptionSlots } from '../../types/captionTypes';
import { ScrollStickyComponentInclude } from '../ScrollSticky';
import { TableRecordComponentInclude, TableRecordEmits, TableRecordItemSlots } from '../TableRecord';
/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableComponents = TableRecordComponentInclude & ScrollStickyComponentInclude;
/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableEmits = TableRecordEmits;
/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export type TableExpose = {};
/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type TableSlots<Item = any, Value = any> = CaptionSlots & TableRecordItemSlots<Item, Value> & {
    /**
     * Slot for custom table header content /
     * Слот для пользовательского содержимого шапки таблицы
     */
    header?(props: {
        /** Column index names / Имена индексов колонок */
        columns: string[];
    }): any;
    /**
     * Slot for custom table footer content /
     * Слот для пользовательского содержимого подвала таблицы
     */
    foot?(props: {
        /** Column index names / Имена индексов колонок */
        columns: string[];
    }): any;
    /**
     * Slot for custom table items content /
     * Слот для пользовательского содержимого элементов таблицы
     */
    items?(props: {
        /** Column index names / Имена индексов колонок */
        columns: string[];
    }): any;
    /**
     * Slot for custom table body content /
     * Слот для пользовательского содержимого тела таблицы
     */
    body?(props: any): any;
};
/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableClasses = {
    /** Main element class name / Основное имя класса элемента */
    main: ConstrClass;
    table: string;
    colgroup: string;
    col: string;
    header: string;
    foot: string;
    items: string;
    caption: string;
};
