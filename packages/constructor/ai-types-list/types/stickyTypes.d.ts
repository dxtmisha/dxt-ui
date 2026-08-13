// md5:181d009d9d4a5b7e0f76433fecab7017 true
import { RefOrNormal } from '@dxtmisha/functional';

export type StickyScrollBottomPropsInclude = {
    stickyScrollBottom?: boolean;
};

export type StickyPropsInclude = StickyScrollBottomPropsInclude & {
    stickyTop?: number | RefOrNormal<number>;
    stickyScrollContainer?: string | HTMLElement | Window;
    stickyEnable?: boolean | RefOrNormal<boolean>;
};