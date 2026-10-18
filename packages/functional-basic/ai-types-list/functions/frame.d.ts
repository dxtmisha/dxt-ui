// md5:ce9e2e6f0a78125271ba9b8f5b8551f4 true
/** Cyclically calls requestAnimationFrame while the next predicate returns true. @keywords requestAnimationFrame animation loop frame ticker */
export declare function frame(callback: (timestamp: DOMHighResTimeStamp) => void, next?: (timestamp: DOMHighResTimeStamp) => boolean, end?: () => void): void;