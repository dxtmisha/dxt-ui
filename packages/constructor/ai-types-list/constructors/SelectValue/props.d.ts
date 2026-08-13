// md5:c10eec89cb978c5201709e1ee528552a true
import { ConstrBind, ListList } from '@dxtmisha/functional';
export type SelectValuePropsToken = {};
export type SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> = EnabledProps & ChipPropsInclude<Chip> & {
    placeholder?: string;
    value?: ListList;
    multiple?: boolean;
    iconShow?: boolean;
    iconAttrs?: ConstrBind<Icon>;
    iconCancel?: IconValue<Icon>;
};
/** Component property definitions for select value. @keywords select value props configuration */
export type SelectValueProps = SelectValuePropsBasic & SelectValuePropsToken;
/** Default properties for select value component. @keywords defaults select value */
export declare const defaultsSelectValue: {};