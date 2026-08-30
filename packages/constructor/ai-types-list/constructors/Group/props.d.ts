// md5:e2bed9b82d5b5535096a504dcfde3a47 true
type GroupPropsToken = {};
export type GroupPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type GroupProps = GroupPropsBasic & GroupPropsToken;
/** Default values for group properties. @keywords group, defaults, properties */
export declare const defaultsGroup: {
    area: string;
    tag: string;
    tagHeader: string;
};