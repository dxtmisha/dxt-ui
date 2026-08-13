// md5:ab1c51763f628ab4cb29471262ef8e97 true
export type BlockPropsToken = {};
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = HeaderPropsInclude<Icon, Header> & DescriptionProps & AreaPropsInclude & {
    headline?: string;
    tag?: string;
};
export type BlockProps = BlockPropsBasic & BlockPropsToken;
/** Default block property values @keywords defaults block props configuration */
export declare const defaultsBlock: {
    area: string;
    tag: string;
    tagHeader: string;
};