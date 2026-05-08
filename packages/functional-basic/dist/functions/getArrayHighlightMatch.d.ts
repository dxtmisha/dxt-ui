import { HighlightMatchItem } from '../types/searchTypes';
/**
 * Split a string into an array of objects to highlight matches.
 *
 * Разделяет строку на массив объектов для выделения совпадений.
 * @param value initial string / исходная строка
 * @param search search string / строка поиска
 * @returns array of objects with text and match flag / массив объектов с текстом и флагом совпадения
 */
export declare function getArrayHighlightMatch(value: string, search?: string | RegExp): HighlightMatchItem[];
