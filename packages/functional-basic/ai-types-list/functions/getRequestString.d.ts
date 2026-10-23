// md5:ba99eee55cedd3c948ff65166204d33d true
/** Serializes an object or array into a key-value request string. @keywords request string, query string, serialize, key value, params */
export declare function getRequestString(request: Record<string, unknown> | readonly unknown[], sign?: string, separator?: string, subKey?: string): string;