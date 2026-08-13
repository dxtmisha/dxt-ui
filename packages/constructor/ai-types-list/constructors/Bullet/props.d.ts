// md5:a64c0baa0826a1e70a6254b67d24706f
import { BulletItemPropsInclude } from '../BulletItem';
type BulletPropsToken = {};
export type BulletPropsBasic = BulletItemPropsInclude & {
    html?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BulletProps = BulletPropsBasic & BulletPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBullet: {};
export {};
