// md5:f0aedd834d408cdd78e2f74442c2a745 true
/** Replaces `[key]` placeholders in a template string with matching values or function results. @keywords template, replace, placeholder, substitute, string interpolation */
export declare function replaceTemplate(value: string, replaces: Record<string, FunctionOr<string | number | boolean>>): string;