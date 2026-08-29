// md5:118ea242ff02d4c5d826c8e457dfca83 true
/** Replaces placeholder keys like [key] or {key} in a template string with corresponding replacement values. @keywords template, string interpolation, format, replace placeholders, template string */
export declare const applyTemplate: (text: string, replacement?: Record<string, string | number | boolean> | string[]) => string;