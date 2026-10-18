// md5:96d3ee4f33c546f561524d93eb80b836 true
import type { ConstrClass } from '@dxtmisha/functional';

/** Component dependencies for InputFileItem. @keywords components, dependencies */
export type InputFileItemComponents = ButtonComponentInclude & DialogComponentInclude & IconComponentInclude & ImageComponentInclude & ImageCropComponentInclude & ProgressComponentInclude;

/** Event definitions for InputFileItem. @keywords events, emits */
export type InputFileItemEmits = {
    /** Emitted when cropping the file. @keywords crop */
    crop: [file?: FieldFileValue];
    /** Emitted when deleting the file. @keywords delete */
    delete: [file?: FieldFileValue];
    /** Emitted when retrying the file operation. @keywords retry */
    retry: [file?: FieldFileValue];
};

/** Exposed methods and state for InputFileItem. @keywords expose, api */
export interface InputFileItemExpose {
    /** Returns the underlying File instance. @keywords file, instance */
    getFile: () => File | undefined;
    /** Returns current file item status. @keywords status */
    getStatus: () => InputFileItemStatusType;
    /** Returns crop area coordinates. @keywords crop, coordinates */
    getCrop: () => CropAreaCoordinator | undefined;
    /** Triggers the file deletion action. @keywords delete, remove */
    delete: () => void;
    /** Triggers the file retry action. @keywords retry, reload */
    retry: () => void;
}

/** Slot definitions for InputFileItem. @keywords slots */
export interface InputFileItemSlots {
    /** Default content slot. @keywords default, slot */
    default?(props: any): any;
    /** Thumbnail preview slot. @keywords thumbnail, preview */
    thumbnail?(props: any): any;
    /** Action buttons slot. @keywords actions, controls */
    actions?(props: any): any;
}

/** CSS class name mapping for InputFileItem elements. @keywords classes, styles */
export type InputFileItemClasses = {
    main: ConstrClass;
    thumbnail: string;
    body: string;
    label: string;
    caption: string;
    progress: string;
    actions: string;
    buttonCrop: string;
    buttonDelete: string;
    buttonRetry: string;
};