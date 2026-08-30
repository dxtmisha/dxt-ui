// md5:34ad6d833f8f7eba3cdc56b2dc9aadb3 true
type TextLabelPropsToken = {};
export type TextLabelPropsBasic = LabelProps & {
  /** HTML tag used to wrap the text. @keywords html tag, wrapper */
  tag?: string;
};
/** Properties for the TextLabel component. @keywords text label, props */
export type TextLabelProps = TextLabelPropsBasic & TextLabelPropsToken;
/** Default property values for TextLabel. @keywords defaults, text label */
export declare const defaultsTextLabel: {
  tag: string;
};