// md5:382f6325bf872c1f3c326e8b7ba290cc true
/** Substitutes values or function results into '[key]' placeholders in a template string. @keywords template, replace, placeholder, substitution, interpolate */
export declare function replaceTemplate<T extends string | null | undefined = string>(value: T, replaces?: Record<string, FunctionOr<string | number | boolean | null | undefined>> | null): T;