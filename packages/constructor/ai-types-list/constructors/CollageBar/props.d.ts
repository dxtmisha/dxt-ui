// md5:c96ab258c80766730313dc723e5e0c97 true
import type { ConstrBind } from '@dxtmisha/functional';

type CollageBarPropsToken = {
    selected?: boolean;
    position?: 'top' | 'bottom' | 'static';
};
export type CollageBarPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> = LabelProps & DescriptionProps & ButtonPropsInclude<Button> & EventClickProps & {
    /** Button configuration or text. @keywords button */
    button?: string | number | ConstrBind<Button>;
    /** Selected state. @keywords selected */
    selected?: boolean;
    /** HTML tag for the container. @keywords tag */
    tag?: string;
    /** Icon for the button. @keywords icon */
    icon?: IconValue<Icon>;
};
/** Properties for the CollageBar component. @keywords collage_bar, props */
export type CollageBarProps = CollageBarPropsBasic & CollageBarPropsToken;
/** Default property values for the CollageBar component. @keywords collage_bar, defaults */
export declare const defaultsCollageBar: {
    position: string;
    tag: string;
};