// md5:0cf9c1847cea6fb7503fb1d5603e5b63 true
/** Serializes an object or array into a delimited key-value query string. @keywords serialize, query string, key-value, url params */
export declare function getRequestString(request: Record<string, any> | any[], sign?: string, separator?: string, subKey?: string): string;