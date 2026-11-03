// md5:37d0c26cf10bd4f3a3e2695b713415f2 true
/** Converts a Blob to a Base64 string, optionally removing the data URL prefix. @keywords blob, base64, convert, data url, file, encode */
export declare function blobToBase64(blob?: Blob | null, clean?: boolean): Promise<string | undefined>;