// md5:8c6e1a35009e56a97aa111e658ec1030 true
import { ConstrClass } from '@dxtmisha/functional';

export type SnackbarComponents = SnackbarItemComponentInclude;

export type SnackbarEmits = {
    show: [value: string, item: SnackbarValue];
    hide: [value: string, item: SnackbarValue];
};

/** Checks for active notifications @keywords state, check, isItem */
export interface SnackbarExpose {
    isItem(): boolean;
    /** Adds a new notification item @keywords add, push, insert */
    add(item: SnackbarValue): void;
    /** Removes a notification by value @keywords remove, delete */
    remove(value: string): void;
    /** Clears all notifications @keywords clear, reset, empty */
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