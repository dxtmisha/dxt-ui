// md5:3eb7a275ede0f1b7c36d60ad58317d73 true
type HeaderPropsToken = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & AreaPropsInclude;
/** Incoming properties for header component. @keywords header props configuration */
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken;
/** Default values for header properties. @keywords defaults header configuration */
export declare const defaultsHeader: {
    tag: string;
    area: string;
};