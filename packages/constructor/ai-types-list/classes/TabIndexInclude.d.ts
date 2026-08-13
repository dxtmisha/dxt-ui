// md5:1ea95ab5c43b67c9498eb7bfa0ea60c6 true
import { Ref } from 'vue';
/** Manages focus and tab index of HTML elements. @keywords tabindex focus management keyboard */
export declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
    /** Creates a TabIndexInclude instance. @keywords constructor tab index */
    constructor(element: Ref<E | undefined> | (() => E | undefined), active?: () => boolean, activeOpen?: () => boolean, activeClose?: () => boolean);
    /** Sets focus to the managed element. @keywords go to focus activate */
    goTo(): this;
    /** Resets focus to the previously focused element. @keywords reset focus restore */
    reset(): this;
    /** Toggles focus state based on the provided status. @keywords toggle focus state */
    toggle(status: boolean): this;
    /** Saves the currently active focused element. @keywords update old element save focus */
    updateOldElement(): void;
    /** Finds the first focusable child element. @keywords find first element focusable */
    findFirstElement(): HTMLElement | undefined;
    /** Finds the last focusable child element. @keywords find last element focusable */
    findLastElement(): HTMLElement | undefined;
}