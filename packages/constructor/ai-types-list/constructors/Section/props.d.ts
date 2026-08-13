// md5:e6def0aa2afbe9dadde0ca307b2139c0 true
export type SectionPropsToken = {};
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
/** Incoming properties for section component. @keywords section props incoming */
export type SectionProps = SectionPropsBasic & SectionPropsToken;
/** Default configuration values for section. @keywords defaults section config */
export declare const defaultsSection: {
    area: string;
    tag: string;
    tagHeader: string;
};