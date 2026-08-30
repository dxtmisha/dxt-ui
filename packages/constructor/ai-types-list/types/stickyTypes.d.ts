// md5:a54b5c5719e054dddc4807cf3b09963d true
import { type RefOrNormal } from '@dxtmisha/functional';

export type StickyScrollBottomPropsInclude = {
    /** Enable bottom sticky scrollbar */
    stickyScrollBottom?: boolean;
};

export type StickyPropsInclude = StickyScrollBottomPropsInclude & {
    /** Top offset from visible top boundary of parent in pixels */
    stickyTop?: number | RefOrNormal<number>;
    /** Custom scroll container selector or element */
    stickyScrollContainer?: string | HTMLElement | Window;
    /** Active tracking state */
    stickyEnable?: boolean | RefOrNormal<boolean>;
};