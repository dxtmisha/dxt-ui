// md5:4e2325ad3935c50a290db7df3b667748 true
export type FieldMessagePropsToken = {};
export type FieldMessagePropsBasic<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> = FieldCounterPropsInclude<FieldCounter> & SkeletonPropsInclude & {
  /** Whether to force display the message @keywords force, visibility */
  forceShow?: boolean;
  /** Whether the message can contain HTML markup @keywords html */
  hasHtmlCode?: boolean;
  /** Whether the field is disabled @keywords disabled */
  disabled?: boolean;
  /** Helper message text @keywords helper, hint */
  helperMessage?: string;
  /** Validation message text @keywords validation, error */
  validationMessage?: string;
  /** Unique ID for the helper message @keywords helper, id, a11y */
  helperId?: string;
  /** Unique ID for the validation message @keywords validation, id, a11y */
  validationId?: string;
};
/** Field message incoming properties contract @keywords field, message, props */
export type FieldMessageProps = FieldMessagePropsBasic & FieldMessagePropsToken;
/** Default property values for field message @keywords defaults, field, message */
export declare const defaultsFieldMessage: {};