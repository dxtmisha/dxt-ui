// md5:c7652e92e64a09994ff43467d626a79f true
/** Converts a Blob to a Base64 string, optionally stripping the data URL prefix. Returns undefined if empty or unreadable. @keywords blob, base64, encode, file, data url */
export declare function blobToBase64(blob: Blob, clean?: boolean): Promise<string | undefined>;