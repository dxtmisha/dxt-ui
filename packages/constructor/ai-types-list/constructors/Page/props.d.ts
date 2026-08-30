// md5:41505931f0415c634e7fce58d63a270c true
export type PagePropsToken = {};
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type PageProps = PagePropsBasic & PagePropsToken;
/** Default property values for Page component. @keywords page, defaults, props */
export declare const defaultsPage: {
    area: string;
    tag: string;
    tagHeader: string;
};