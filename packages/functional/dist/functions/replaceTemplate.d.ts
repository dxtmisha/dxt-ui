import { FunctionReturn } from '../types/basicTypes';
/**
 * Replacing the value from replaces in value.
 *
 * Замена значения из replaces в value.
 * @param value template string/ строка шаблона
 * @param replaces object with data for replacement/ объект с данными для замены
 */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;
