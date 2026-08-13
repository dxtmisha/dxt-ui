// md5:1981005af49b3505b4d4398b091a4305 true
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>;
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[];
export type ApiManagementGet<Return extends ApiManagementValue, Type extends ApiManagementValue = Return> = {
    path?: RefOrNormal<string | undefined>;
    options?: ApiOptions;
    reactivity?: boolean;
    conditions?: RefType<boolean>;
    transformation?: (data: Type, isResponseContractValid?: ApiDataValidation) => ApiData<Return>;
    validateResponseContract?: (data: Type) => ApiDataValidation;
    errorContract?: ApiErrorStorageList;
    typeData?: ((data: Return) => boolean) | any;
    unmounted?: boolean;
    skeleton?: () => Return;
};
export type ApiManagementSearch<T extends SearchItem, K extends SearchColumns<T>> = {
    columns: K;
    value?: Ref<string>;
    options?: SearchOptions;
};
export type ApiManagementRequest<T, Request extends ApiFetch['request'] = ApiFetch['request'], Return extends ApiData<T> = ApiData<T>> = {
    path?: RefOrNormal<string | undefined>;
    action?: (data: Return | undefined) => Promise<void> | void;
    transformation?: (data: T) => Return;
    validateRequestContract?: (data: Request) => ApiDataValidation & Return;
    validateResponseContract?: (data: T) => ApiDataValidation & Return;
    errorContract?: ApiErrorStorageList;
    toData?: boolean;
    options?: ApiOptions;
};