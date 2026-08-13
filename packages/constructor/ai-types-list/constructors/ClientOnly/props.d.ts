// md5:859615770799ab8b7e3949b5fd51e66a true
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
/** Type describing incoming properties. @keywords client only props properties */
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken;
/** Default value for property. @keywords defaults client only */
export declare const defaultsClientOnly: {
    clientOnly: boolean;
};