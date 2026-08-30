// md5:118ea242ff02d4c5d826c8e457dfca83 true
/** Replaces template placeholder keys in square or curly brackets with values from a replacement object or array. @keywords template, string interpolation, placeholder, replace */
export declare const applyTemplate: (text: string, replacement?: Record<string, string | number | boolean> | string[]) => string;