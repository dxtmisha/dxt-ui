// md5:a92229ae67c5fb316d6e3dfa623e577d true
/** Replaces placeholders in a template string with values or function returns from a map. @keywords replace template placeholder interpolation substitute */
export declare function replaceTemplate(value: string, replaces: Record<string, string | FunctionReturn<string>>): string;