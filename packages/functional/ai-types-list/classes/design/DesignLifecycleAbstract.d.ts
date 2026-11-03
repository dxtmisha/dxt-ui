// md5:2336b15c563d2f2a5e12090c1aab679a true
/** Abstract base class for dependencies with synchronous component lifecycle callbacks. @keywords lifecycle, mount, unmount, hook */
export declare abstract class DesignLifecycleAbstract {
    /** Optional synchronous mount callback. @keywords lifecycle, mount, hook */
    readonly onMounted?: () => void;
    /** Optional synchronous cleanup callback. @keywords lifecycle, unmount, cleanup */
    readonly onUnmounted?: () => void;
}