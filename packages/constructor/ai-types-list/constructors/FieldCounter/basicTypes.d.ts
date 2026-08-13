// md5:9cd1eed47f52f1b9115b06d5f5fc2530 true
import { ConstrBind } from '@dxtmisha/functional';

export type FieldCounterComponentInclude = {
    fieldCounter?: object;
};

/** Properties for FieldCounter inclusion. @keywords FieldCounterPropsInclude, counter */
export interface FieldCounterPropsInclude<FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic> {
    counter?: FieldCounterPropsBasic['counter'];
    counterShow?: boolean;
    counterTemplate?: FieldCounterPropsBasic['template'];
    counterId?: string;
    maxlength?: FieldCounterPropsBasic['maxlength'];
    fieldCounterAttrs?: ConstrBind<FieldCounter>;
}