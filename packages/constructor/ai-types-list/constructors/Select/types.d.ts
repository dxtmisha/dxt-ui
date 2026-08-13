// md5:b8e36e69e9920814bd48c243be562b4f true
import { ConstrClass } from '@dxtmisha/functional';

export type SelectComponents = MenuComponentInclude & FieldComponentInclude & SelectValueComponentInclude;

export type SelectEmits = FieldBasicEmits;

export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {
}

export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {
}

export type SelectClasses = {
    main: ConstrClass;
};