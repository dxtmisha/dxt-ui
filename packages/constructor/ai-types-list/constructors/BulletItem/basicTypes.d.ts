// md5:f2841dc799293f4763df81e5103cffbb true
import { ConstrBind } from '@dxtmisha/functional';

/** Type describing components for nested bullet items @keywords BulletItemComponentInclude bulletItem component */
export type BulletItemComponentInclude = {
    bulletItem?: object;
};

/** Type describing properties for nested bullet items @keywords BulletItemPropsInclude bulletItem list itemAttrs */
export type BulletItemPropsInclude<BulletItemProps extends BulletItemPropsBasic = BulletItemPropsBasic> = {
    list?: string[];
    itemAttrs?: ConstrBind<BulletItemProps>;
};