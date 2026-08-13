// md5:992411739887304dc5fff159a9159aa6 true
import { TablePropsBasic } from '@dxtmisha/constructor/Table';
export declare const propsValues: {};
type PropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
/** Table component properties combining basic table props and token modifiers. @keywords table properties props token */
export type TableProps = TablePropsBasic<TableItemProps, TableRecordProps> & PropsToken;
/** Default values for table properties. @keywords table defaults properties */
export declare const defaults: object;
export {};