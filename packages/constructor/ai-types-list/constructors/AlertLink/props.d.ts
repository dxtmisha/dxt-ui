// md5:50f20c110c763634e4c36e0b4856774e true
type AlertLinkPropsToken = {
    divider?: boolean;
};
export type AlertLinkPropsBasic = LabelProps & EventClickProps;
export type AlertLinkProps = AlertLinkPropsBasic & AlertLinkPropsToken;
/** Default value for property. @keywords defaultsAlertLink, default */
export declare const defaultsAlertLink: {
    divider: boolean;
};