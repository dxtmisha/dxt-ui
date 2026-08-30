// md5:62440810c2795052d76384f9225a125f true
type HeaderPropsToken = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & AreaPropsInclude;
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken;
/** Default property values for the Header component. @keywords header, defaults, props */
export declare const defaultsHeader: {
    tag: string;
    area: string;
};