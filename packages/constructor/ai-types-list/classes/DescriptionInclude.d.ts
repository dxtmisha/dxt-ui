// md5:a28917f97bd0cf13933d0eb991aa25b8 true
import { VNode } from 'vue';
import { RefOrNormal, RefOrNormalOrFunction } from '@dxtmisha/functional';
/** Description include utility for slots, text, and skeleton loading states @keywords description, include, skeleton */
export declare class DescriptionInclude {
	/** @keywords constructor, init */
	constructor(props: RefOrNormalOrFunction<DescriptionProps>, className: string, slots?: DescriptionSlots | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormal<string | undefined>);
	/** Checks if description exists @keywords check, is */
	get is(): boolean;
	/** Gets description element ID @keywords id, identifier */
	get id(): string;
	/** Renders description nodes @keywords render, view */
	render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
	/** Gets description properties @keywords get, props */
	protected getProps(): DescriptionProps;
}