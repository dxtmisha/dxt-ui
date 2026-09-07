// md5:056157402cc0c075b7bffc9494808ae6 true
/** Composable for managing Figma storage with reactive item state and loading status. @keywords figma, storage, clientStorage, state, composable */
export declare function useFigmaStorage<T = any>(name: string, defaultValue?: T, id?: string): {
    item: import("vue").ShallowRef<T | undefined, T | undefined>;
    loading: import("vue").ShallowRef<boolean, boolean>;
};