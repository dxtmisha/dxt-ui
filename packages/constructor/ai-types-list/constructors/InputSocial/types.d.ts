// md5:b8bca894a92de0454c0d9ebe5de1e8b9
import { ConstrClass } from '@dxtmisha/functional';
import { MaskComponentInclude } from '../Mask';
import { FieldComponentInclude, FieldSlotsInclude } from '../Field';
import { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes';
/** Components needed for InputSocial to work / Компоненты, необходимые для работы InputSocial */
export type InputSocialComponents = MaskComponentInclude & FieldComponentInclude;
/** Available events for InputSocial / Доступные события для InputSocial */
export type InputSocialEmits = FieldBasicEmits;
/** Exposed properties and methods / Экспонируемые свойства и методы */
export interface InputSocialExpose extends FieldBasicExpose {
}
/** Available slots for InputSocial / Доступные слоты для InputSocial */
export interface InputSocialSlots extends FieldSlotsInclude {
}
/** Available CSS classes for InputSocial / Доступные CSS классы для InputSocial */
export type InputSocialClasses = {
    main: ConstrClass;
};
