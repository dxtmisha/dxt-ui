// md5:a8ea82218fe34538af708c9d5de1dbea true
export type PagePropsToken = {};
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type PageProps = PagePropsBasic & PagePropsToken;
/** Default value for property. @keywords defaults page property */
export declare const defaultsPage: {
    area: string;
    tag: string;
    tagHeader: string;
};