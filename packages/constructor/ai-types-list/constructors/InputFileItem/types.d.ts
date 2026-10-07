// md5:2cd8c90fd1f23db1243f05d180c74070 true
import type { ConstrClass } from '@dxtmisha/functional';
export type InputFileItemComponents = ButtonComponentInclude & DialogComponentInclude & IconComponentInclude & ImageComponentInclude & ProgressComponentInclude;
export type InputFileItemEmits = {
    delete: [file?: FieldFileValue];
    retry: [file?: FieldFileValue];
};
export interface InputFileItemExpose {
    /** Returns the underlying File instance @keywords file, instance, get */
    getFile: () => File | undefined;
    /** Returns current item processing status @keywords status, state, progress */
    getStatus: () => InputFileItemStatusType;
    /** Triggers item removal action @keywords delete, remove, clear */
    delete: () => void;
    /** Triggers upload retry action @keywords retry, reupload */
    retry: () => void;
}
export interface InputFileItemSlots {
    default?(props: any): any;
    thumbnail?(props: any): any;
    actions?(props: any): any;
}
export type InputFileItemClasses = {
    main: ConstrClass;
    thumbnail: string;
    thumbnailImage: string;
    body: string;
    label: string;
    caption: string;
    progress: string;
    actions: string;
    buttonDelete: string;
    buttonRetry: string;
};