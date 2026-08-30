// md5:23df257fc2dbef43f8a8b0881df94eef true
/** Converts a Blob to a Base64 string, optionally stripping the data URL prefix. @param clean If true, removes the data URL prefix. @keywords blob, base64, encode, convert */
export declare function blobToBase64(blob: Blob, clean?: boolean): Promise<string | undefined>;