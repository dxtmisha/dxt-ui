// md5:efb37070c332acbfa564dd33033027a7 true
import { Ref } from 'vue';

/** @keywords FieldChangeInclude, change, state, validation */
export declare class FieldChangeInclude {
	/** Change state flag */
	readonly item: Ref<boolean, boolean>;
	/** Creates a new field change tracker instance. */
	constructor(props: FieldAllProps);
	/** Returns whether the field value was changed. @keywords isChanged, modified */
	is(): boolean;
	/** Sets the field change state. @keywords setChange, modify */
	set(change: boolean): void;
	/** Marks the field as changed. @keywords toChanged, modify */
	to(): void;
}