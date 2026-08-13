// md5:5bd5e2555a6fa3b91491594b9ca85d3e true
import { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional';
type TabsNavigationPropsToken = {
    divider?: boolean;
};
export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & {
    selected?: ListSelectedList;
    list?: ListRecord<TabItem>;
    tag?: TabItem['tag'];
    keyLabel?: string;
    keyValue?: string;
    itemAttrs?: ConstrBind<TabItem>;
};
export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken;
/** Default values for tabs navigation properties @keywords defaults, navigation, tabs */
export declare const defaultsTabsNavigation: {
    horizontalScrollBleed: boolean;
    horizontalScrollAlign: string;
};