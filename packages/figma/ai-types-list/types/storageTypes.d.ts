// md5:a518a93c5c3937621d22bfab971ae3d9 true
/** Client storage messenger message payload @keywords client storage messenger data */
export type ClientStorageMessengerData<T = any> = {
    name: string;
    value: T;
};

/** Storage messenger message payload @keywords storage messenger data */
export type StorageMessengerData<T = any> = {
    id?: string;
    name: string;
    value: T;
};