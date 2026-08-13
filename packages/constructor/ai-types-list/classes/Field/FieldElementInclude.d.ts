// md5:d99d61cbcd8f7fb5c7a92d3142f88d32 true
import { Ref } from 'vue';

/** Class for working with input elements. @keywords field element include input */
export declare class FieldElementInclude {
	/** Creates a field element include instance. @keywords constructor field element */
	constructor(props: FieldAllProps, element: Ref<FieldElementInput>);
	/** Returns the input element. @keywords get field input element */
	get(): HTMLInputElement | undefined;
	/** Returns a reference to the input element. @keywords get element ref */
	getElement(): Ref<FieldElementInput>;
	/** Search for an element by its name or selector. @keywords find by name selector */
	findByName(nameSelectors: string | HTMLInputElement): HTMLInputElement | undefined;
	/** Clear all values to the original ones. @keywords clear reset */
	clear(): this;
}