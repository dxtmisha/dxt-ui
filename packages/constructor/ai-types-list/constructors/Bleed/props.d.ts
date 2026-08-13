// md5:d9764fb6264f3c9997006f3bbc5f47f2 true
export type BleedPropsBasic = {
    tag?: string;
};
/** Type describing incoming properties. @keywords BleedProps properties */
export type BleedProps = BleedPropsBasic & BleedPropsToken;
/** Default value for property. @keywords defaultsBleed default */
export declare const defaultsBleed: {
    tag: string;
};
type BleedPropsToken = {};