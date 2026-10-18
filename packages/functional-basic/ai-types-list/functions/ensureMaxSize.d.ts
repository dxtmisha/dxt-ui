// md5:1cc1d06ffbf2dfae9cb94569495dcaea true
/** Resizes an image if it exceeds the maximum size, returning base64 encoded data. @keywords resize, compress, image, max size, base64 */
export declare function ensureMaxSize(file: Uint8Array, compress?: number, type?: string): Promise<string>;