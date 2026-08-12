// md5:aa40abbbb0b6a5f0180e2fe237cbe633
/**
 * Creates a case-insensitive regular expression for a search by words (separating by space).
 *
 * Создает регистронезависимое регулярное выражение для поиска по словам (разделение пробелом).
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param limit maximum search string length / максимальная длина строки поиска
 * @returns `RegExp` for search / регулярное выражение для поиска
 */
export declare function getSeparatingSearchExp(search: string | RegExp, limit?: number): RegExp;
