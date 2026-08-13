// md5:bf014a91a69d875c0f6f3e19959c3d16 true
import { ConstrBind } from '@dxtmisha/functional';

/** Interface describing the set of components required for the Button include. @keywords button component include */
export type ButtonComponentInclude = {
    button?: object;
};

/** Type describing properties for embedding a Button component inside another component. @keywords button props include binding */
export type ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> = {
    buttonAttrs?: ConstrBind<Button>;
};