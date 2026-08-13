// md5:c5f4f6a0baa9060e17c291a5024cc916 true
import { ConstrEmit, ConstrHrefProps } from '@dxtmisha/functional';
/** @keywords event, click, interaction */
export declare class EventClickInclude {
    /** @keywords constructor, init */
    constructor(props?: EventClickProps | undefined, enabled?: EnabledInclude | undefined, emits?: ConstrEmit<EventClickEmits> | undefined);
    /** @keywords binds, html, attributes */
    get binds(): {
        onClick: (event: MouseEvent, options?: EventClickValue) => void;
        onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void;
        href?: string;
    };
    /** @keywords expose, public, api */
    get expose(): EventClickExpose;
    /** @keywords href, link, url */
    get href(): ConstrHrefProps;
    /** @keywords click, handler */
    readonly onClick: (event: MouseEvent, options?: EventClickValue) => void;
    /** @keywords keydown, keyboard, accessibility */
    readonly onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void;
    /** @keywords options, payload */
    protected getOptions(event: MouseEvent): EventClickValue;
    /** @keywords target, type */
    protected getTargetType(event: MouseEvent): string;
    /** @keywords router, navigation */
    protected toRouter(): boolean;
    /** @keywords emit, trigger */
    protected emit(event: MouseEvent, options: EventClickValue): void;
}