// md5:a92229ae67c5fb316d6e3dfa623e577d true
/** Replaces placeholders in a template string with values or function results from a replacement map. @keywords template, replace, placeholder, interpolation, string format */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;