// md5:3ec107938fae92a07021bc9b081a9adb true
import type { ConstrClass } from '@dxtmisha/functional';

export type SnackbarComponents = SnackbarItemComponentInclude;

export type SnackbarEmits = {
    show: [value: string, item: SnackbarValue];
    hide: [value: string, item: SnackbarValue];
};

export interface SnackbarExpose {
    /** Checks whether notifications are currently present. @keywords snackbar, status, active */
    isItem(): boolean;
    /** Adds a new notification. @keywords snackbar, add, push */
    add(item: SnackbarValue): void;
    /** Removes a notification by its unique value key. @keywords snackbar, remove, dismiss */
    remove(value: string): void;
    /** Clears all notifications. @keywords snackbar, clear, reset */
    clear(): void;
}

export interface SnackbarSlots {
}

export type SnackbarClasses = {
    main: ConstrClass;
    item: string;
    space: string;
    priority: string;
};