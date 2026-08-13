// md5:e5cfe87be3740878824bead18c21824f true
import { ComputedRef, Ref } from 'vue';
import { ApiInstance, ApiData, ApiDataValidation, ApiErrorStorageList, ApiErrorItem } from '@dxtmisha/functional-basic';

export interface UseApiRef<R> {
	/** @keywords data, computed, reactive */
	data: ComputedRef<ApiData<R> | undefined>;
	/** @keywords item, ref */
	item: Ref<ApiData<R> | undefined>;
	/** @keywords error, computed, item */
	errorItem: ComputedRef<ApiErrorItem | undefined>;
	/** @keywords response, contract, valid, status */
	isResponseContractValid: ComputedRef<boolean>;
	/** @keywords response, validation, result */
	responseValidationResult: ComputedRef<ApiDataValidation | undefined>;
	/** @keywords length, computed */
	length: ComputedRef<number>;
	/** @keywords starting, flag */
	starting: ComputedRef<boolean>;
	/** @keywords loading, ref */
	loading: Ref<boolean>;
	/** @keywords reading, ref */
	reading: Ref<boolean>;
	/** @keywords is, starting */
	isStarting(): boolean;
	/** @keywords is, loading */
	isLoading(): boolean;
	/** @keywords is, reading */
	isReading(): boolean;
	/** @keywords get, item */
	getItem(): ApiData<R> | undefined;
	/** @keywords init */
	init(): void;
	/** @keywords init, ssr */
	initSsr(): void;
	/** @keywords reset */
	reset(): Promise<void>;
	/** @keywords stop */
	stop(): void;
	/** @keywords abort */
	abort(): void;
}

/** @keywords api, ref, vue, composable */
export declare function useApiRef<R, T = R>(path?: RefOrNormal<string | undefined>, options?: ApiOptions, reactivity?: boolean, conditions?: RefType<boolean>, transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>, validateResponseContract?: (data: T) => ApiDataValidation, errorContract?: ApiErrorStorageList, unmounted?: boolean, apiInstance?: ApiInstance): UseApiRef<R>;

/** @keywords set, api, global, conditions */
export declare const setApiRefGlobalConditions: (conditions: RefType<any>) => void;