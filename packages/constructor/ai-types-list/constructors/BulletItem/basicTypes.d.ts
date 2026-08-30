// md5:1bd2133e9b394e1eb87ab8dc0b8c696f true
import type { ConstrBind } from '@dxtmisha/functional';

/** Components configuration for nested bullet items. @keywords bullet item, component include */
export type BulletItemComponentInclude = {
    bulletItem?: object;
};

/** Properties configuration for nested bullet items. @keywords bullet item, props include */
export type BulletItemPropsInclude<BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic> = {
    list?: string[];
    itemAttrs?: ConstrBind<BulletItemProps>;
};