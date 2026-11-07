// md5:1f2ba864f9175114c900d2c9d6f7d53c true
/** Asynchronously retrieves text from a ClipboardEvent or navigator.clipboard.readText(), returning an empty string on failure. @keywords clipboard, paste, readText, getClipboardData */
export declare function getClipboardData(event?: ClipboardEvent | null): Promise<string>;