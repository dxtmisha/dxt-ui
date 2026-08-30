// md5:36f1fd1b1a7c24b985e70dca85a6ff2f true
export type BlockPropsToken = {};
export type BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = HeaderPropsInclude<Icon, Header> & DescriptionProps & AreaPropsInclude & {
    /** Secondary header or headline text @keywords headline, subtitle */
    headline?: string;
    /** HTML tag for the container @keywords tag, element */
    tag?: string;
};
export type BlockProps = BlockPropsBasic & BlockPropsToken;
/** Default property values for the Block component @keywords defaults, block */
export declare const defaultsBlock: {
    area: string;
    tag: string;
    tagHeader: string;
};