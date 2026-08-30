// md5:8c2436c79dd0a0deb3ce5ea4e7223de5 true
import { type TablePropsBasic } from '@dxtmisha/constructor/Table';

export declare const propsValues: {};

type PropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};

/** Table component properties. @keywords table, props, properties */
export type TableProps = TablePropsBasic<TableItemProps, TableRecordProps> & PropsToken;

/** Default property values for Table component. @keywords table, defaults */
export declare const defaults: object;