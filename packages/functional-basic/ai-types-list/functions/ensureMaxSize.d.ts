// md5:bad13b3687deb0d045672f9e6e06e8a3 true
/** Resizes an image if it exceeds the maximum size, returning base64 data. @keywords image resize compress max-size base64 */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;