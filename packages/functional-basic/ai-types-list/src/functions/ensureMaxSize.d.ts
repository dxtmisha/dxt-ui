// md5:bad13b3687deb0d045672f9e6e06e8a3 true
/** Ensures an image does not exceed the maximum size by resizing if needed. @keywords image, resize, compress, max size, base64 */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;