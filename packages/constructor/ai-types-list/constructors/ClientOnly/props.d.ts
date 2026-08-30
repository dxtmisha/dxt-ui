// md5:0a0a40ac547ed890536f7ee0cda1e0fb true
type ClientOnlyPropsToken = {};
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude;
/** Properties for client-only rendering. @keywords client only props */
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken;
/** Default values for client-only properties. @keywords defaults client only */
export declare const defaultsClientOnly: {
    clientOnly: boolean;
};