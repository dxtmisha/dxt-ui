import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from './props';
export type ButtonComponentInclude = {
    button?: object;
};
export interface ButtonPropsInclude<Button extends ButtonPropsBasic = ButtonPropsBasic> {
    buttonAttrs?: ConstrBind<Button>;
}
