// md5:a50710114a27471c7b8cd859baa5e9a8 true
/**
 * Cyclically calls requestAnimationFrame until next returns true.
 * @keywords frame animation requestAnimationFrame loop
 */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;