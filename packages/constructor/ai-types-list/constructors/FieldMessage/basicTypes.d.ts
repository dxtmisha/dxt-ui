// md5:62b718963c06ed4e1aa8d157865f4720 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Available slot properties for field messages. @keywords slots, field message */
export type FieldMessageSlot = {
    /** Current message content. */
    message?: string;
    /** Helper message content. */
    helperMessage?: string;
    /** Validation message content. */
    validationMessage?: string;
};

/** Component inclusion configuration for field messages. @keywords component, include */
export type FieldMessageComponentInclude = {
    /** FieldMessage component configuration. */
    fieldMessage?: object;
};

/** Properties for integrating field message functionality. @keywords props, field message, include */
export interface FieldMessagePropsInclude<FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> extends FieldCounterPropsInclude<FieldCounter> {
    /** Force display of the message. */
    forceShowMessage?: boolean;
    /** Whether the message allows HTML code. */
    hasHtmlCode?: boolean;
    /** Whether the field is disabled. */
    disabled?: boolean;
    /** Helper message text. */
    helperMessage?: string;
    /** Validation message text. */
    validationMessage?: string;
    /** Additional attributes for the FieldMessage component. */
    fieldMessageAttrs?: ConstrBind<FieldMessage>;
    /** Unique ID for helper message. */
    helperId?: string;
    /** Unique ID for validation message. */
    validationId?: string;
}