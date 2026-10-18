// md5:22f8338f905ad6bc507285a2b60a2659 true
/** Base abstract class declaring optional synchronous component lifecycle hooks. @keywords lifecycle, mounted, unmounted, hooks */
export declare abstract class DesignLifecycleAbstract {
    /** Lifecycle callback executed after component mount. @keywords onMounted, mount, hook */
    readonly onMounted?: () => void;
    /** Lifecycle callback executed after component unmount. @keywords onUnmounted, unmount, hook */
    readonly onUnmounted?: () => void;
}