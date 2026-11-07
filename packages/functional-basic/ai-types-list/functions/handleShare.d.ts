// md5:a43a10fc22ae86bc4d04eca019a81d49 true
/** Invokes the native Web Share API to share data, returning false if unsupported or failed. @keywords share, web share api, navigator.share, native share */
export declare function handleShare(data?: ShareData | null): Promise<boolean>;