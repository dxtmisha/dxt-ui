// md5:a50710114a27471c7b8cd859baa5e9a8 true
/** Cyclically invokes requestAnimationFrame while next returns true, calling end when stopped. @keywords animation, requestAnimationFrame, loop, frame, ticker */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;