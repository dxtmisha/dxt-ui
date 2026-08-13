// md5:abe9d7a2652056a2160ade213aa198f7 true
/** Storage callback manager @keywords storage callback manager register run */
export declare class StorageCallback<T = any, Callback = (value: T) => void | Promise<void>> {
	/** Returns StorageCallback instance by name @keywords get instance storage callback */
	static getInstance<T>(name: string, group?: string): StorageCallback<T, (value: T) => void | Promise<void>>;
	constructor(name: string, group?: string);
	/** Returns loading state @keywords is loading state */
	isLoading(): boolean;
	/** Returns storage name @keywords get name */
	getName(): string;
	/** Returns loading state @keywords get loading state */
	getLoading(): boolean;
	/** Adds callback to list @keywords add callback */
	addCallback(callback: Callback, isOnce?: boolean): this;
	/** Removes callback from list @keywords remove callback */
	removeCallback(callback: Callback): this;
	/** Prepares before run @keywords preparation */
	preparation(): this;
	/** Executes all callbacks @keywords run execute */
	run(value: T): Promise<this>;
}