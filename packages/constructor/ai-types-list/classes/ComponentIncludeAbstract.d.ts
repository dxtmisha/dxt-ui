// md5:86e9819a8b031ac906c4eb9d0e3a3a32 true
import { VNode, Ref, ComputedRef } from 'vue';
import { ConstrBind, DesignComponents } from '@dxtmisha/functional';

/** @keywords component include abstract base */
export declare abstract class ComponentIncludeAbstract<Props extends Record<string, any>, PropsExtra extends Record<string, any>, ComponentExpose extends Record<string, any> = Record<string, any>, ComponentSlots extends Record<string, any> = Record<string, any>, PartialPropsExtra extends Record<string, any> = Partial<ConstrBind<PropsExtra>>> {
    /** @keywords constructor */
    constructor(className: string, props: ComponentIncludeProps<Props>, components?: DesignComponents<any, Props> | undefined, extra?: ComponentIncludeExtra<PropsExtra> | undefined, index?: string | undefined);
    /** @keywords computed binds */
    readonly binds: ComputedRef<PartialPropsExtra>;
    /** @keywords expose api */
    get expose(): ComponentExpose;
    /** @keywords is visible check */
    get is(): boolean;
    /** @keywords get element instance */
    getElement(): ConstrBind<ComponentExpose> | undefined;
    /** @keywords render component */
    readonly render: (slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean, index?: string) => VNode[];
    /** @keywords get class name bem */
    protected getClassName(): string;
    /** @keywords get props */
    protected getProps(): Props;
    /** @keywords get props attrs */
    protected getPropsAttrs(): ConstrBind<Props> | undefined;
    /** @keywords get extra attributes */
    protected getExtra(): PartialPropsExtra | undefined;
    /** @keywords get attrs */
    protected getAttrs(attrs?: PartialPropsExtra): PartialPropsExtra;
    /** @keywords get expose item */
    protected getExposeItem<V = any>(item: ComponentIncludeExposeItem<V>): ((...attrs: any[]) => V);
    /** @keywords to binds */
    protected toBinds(): PartialPropsExtra;
    /** @keywords to expose */
    protected toExpose(): ComponentExpose;
    /** @keywords init render */
    protected initRender(slotsChildren?: ComponentSlots, attrs?: PartialPropsExtra, isShow?: () => boolean, index?: string): VNode[];
}