// md5:432c13aca4722415d8d3bd88fdb93a37 true
type AlertLinkPropsToken = {
    divider?: boolean;
};
export type AlertLinkPropsBasic = LabelProps & EventClickProps;
export type AlertLinkProps = AlertLinkPropsBasic & AlertLinkPropsToken;
export declare const defaultsAlertLink: {
    divider: boolean;
};