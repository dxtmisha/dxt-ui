// md5:a50710114a27471c7b8cd859baa5e9a8 true
/** Cyclically executes a callback via requestAnimationFrame while next returns true, then calls end. @keywords animation, requestAnimationFrame, raf loop, frame */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;