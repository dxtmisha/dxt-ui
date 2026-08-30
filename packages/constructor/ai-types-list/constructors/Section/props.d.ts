// md5:e2c3b582a381985981051f75bf0eb1a6 true
export type SectionPropsToken = {};
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
export type SectionProps = SectionPropsBasic & SectionPropsToken;
/** Default property values for the Section component. @keywords section, defaults */
export declare const defaultsSection: {
    area: string;
    tag: string;
    tagHeader: string;
};