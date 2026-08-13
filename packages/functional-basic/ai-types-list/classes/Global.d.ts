// md5:3092649fdf8dca8dd4aca9e7545e1c50 true
/** Static utility class for storing application-wide global data. @keywords global, storage, data */
export declare class Global {
	/** Returns the global data store instance. @keywords get, item, store */
	static getItem(): Record<string, any>;
	/** Returns a value by name. @keywords get, property, value */
	static get<R = any>(name: string): R;
	/** Adds global data once. @keywords add, data, set */
	static add(data: Record<string, any>): void;
}