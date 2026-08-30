// md5:7037e24388d6aef91fac80d29e65cece true
import { type TableFlexPropsBasic } from '@dxtmisha/constructor/TableFlex';

export declare const propsValues: {};

type PropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};

/** TableFlex component property contract. @keywords table, flex, props */
export type TableFlexProps = TableFlexPropsBasic<TableFlexItemProps, TableFlexHeaderItemProps, TableFlexRecordProps> & PropsToken;

/** Default property values for TableFlex. @keywords defaults, config */
export declare const defaults: object;