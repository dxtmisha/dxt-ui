import { VNode } from 'vue';
import { DesignComponents } from '@dxtmisha/functional';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { RippleComponentsInclude } from './basicTypes';
import { RipplePropsBasic } from './props';
export declare class RippleInclude {
    protected readonly className: string;
    protected readonly components?: DesignComponents<RippleComponentsInclude, RipplePropsBasic> | undefined;
    protected readonly enabled?: EnabledInclude | undefined;
    constructor(className: string, components?: DesignComponents<RippleComponentsInclude, RipplePropsBasic> | undefined, enabled?: EnabledInclude | undefined);
    /**
     * Render Ripple
     *
     * Рендер Ripple
     */
    readonly render: () => VNode[];
}
