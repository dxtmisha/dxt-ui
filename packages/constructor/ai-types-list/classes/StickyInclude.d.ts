// md5:9eecad705605242983dbb3e9c3c6ff97 true
import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';

export declare class StickyInclude {
    protected readonly props: StickyPropsInclude | (() => StickyPropsInclude);
    protected scrollContainer: (HTMLElement | Window)[];
    /** Creates a sticky positioning manager instance. @keywords sticky, constructor */
    constructor(props: StickyPropsInclude | (() => StickyPropsInclude), className: string, element: Ref<HTMLElement | undefined>, parent: Ref<HTMLElement | undefined>);
    /** Checks if sticky positioning is enabled. @keywords sticky, enabled, check */
    protected isEnabled(): boolean;
    /** Returns configuration properties. @keywords sticky, props, configuration */
    protected getProps(): StickyPropsInclude;
    /** Returns the custom CSS property name for top offset. @keywords sticky, css, property, top */
    protected getCustomProperty(): string;
    /** Returns the custom CSS property name for height. @keywords sticky, css, property, height */
    protected getCustomPropertyHeight(): string;
    /** Returns the dataset property name for sticky state. @keywords sticky, dataset, state */
    protected getDatasetProperty(): string;
    /** Returns the dataset property name for active scroll state. @keywords sticky, dataset, scroll, active */
    protected getDatasetScrollProperty(): string;
    /** Returns the current scroll top position. @keywords sticky, scroll, top, position */
    protected getScrollTop(): number;
    /** Finds scrollable ancestor containers or window. @keywords sticky, scroll, container, ancestor */
    protected getScrollContainer(): (HTMLElement | Window)[];
    /** Calculates clamped top position offset. @keywords sticky, top, offset, clamp */
    protected getClampedTop(): number | undefined;
    /** Starts tracking position and events. @keywords sticky, start, track, events */
    protected start(): void;
    /** Stops tracking and removes listeners. @keywords sticky, stop, cleanup, listeners */
    protected stop(): void;
    /** Resets listeners and restarts tracking. @keywords sticky, reset, restart */
    protected reset(): void;
    /** Initializes scroll containers. @keywords sticky, init, scroll, container */
    protected initScrollContainer(): this;
    /** Initializes scroll event listener. @keywords sticky, init, scroll, event */
    protected initEventScroll(): this;
    /** Initializes parent resize listener. @keywords sticky, init, resize, parent */
    protected initEventResizeParent(): this;
    /** Initializes element resize listener. @keywords sticky, init, resize, element */
    protected initEventResizeElement(): this;
    /** Removes active scroll dataset attribute. @keywords sticky, dataset, scroll, remove */
    protected removeDatasetScroll(): void;
    /** Computes position and updates element styles. @keywords sticky, update, position, styles */
    readonly updatePosition: () => void;
    /** Handles scroll events and updates position. @keywords sticky, scroll, handler, event */
    readonly onScroll: () => void;
}