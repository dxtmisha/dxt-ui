/**
 * Returns a string in the form of key-value.
 *
 * Возвращает строку в виде ключ-значение.
 * @param request data for conversion/ данные для преобразования
 * @param sign delimiter sign of key and value/ знак разделения ключа и значения
 * @param separator variable delimiter sign/ знак разделения переменных
 */
export declare function getRequestString(request: Record<string, any>, sign?: string, separator?: string): string;
