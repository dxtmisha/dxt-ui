// md5:37668918cd653de3cba48c1711948378 true
/** Class for preparing requests. @keywords api, preparation, request */
export declare class ApiPreparation {
	/** Executes preparation before the request. @keywords api, make, preparation */
	make(active: boolean, apiFetch: ApiFetch): Promise<void>;
	/** Analyzes the request after execution. @keywords api, makeEnd, response */
	makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>;
	/** Modifies the function to be called before the request. @keywords api, set, callback */
	set(callback: (apiFetch: ApiFetch) => Promise<void>): this;
	/** Modifies the function to be called after the request. @keywords api, setEnd, callback */
	setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this;
}