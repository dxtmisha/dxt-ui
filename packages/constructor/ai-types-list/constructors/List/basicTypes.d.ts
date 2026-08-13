// md5:bf717b66de3fb11dbfd125be5d2d344a true
import { ComputedRef } from 'vue';
import { ListList, ListNames } from '@dxtmisha/functional';

export type ListComponentInclude = {
    /** List component configuration @keywords list component config */
    list?: object;
};

export type ListSlotsInclude = {
    /** Whether at least one item is selected @keywords isSelected selected state */
    isSelected: ComputedRef<boolean>;
    /** List of selected elements @keywords selectedList list */
    selectedList: ComputedRef<ListList>;
    /** Names of selected elements @keywords selectedNames names */
    selectedNames: ComputedRef<ListNames>;
    /** Values of selected elements @keywords selectedValues values */
    selectedValues: ComputedRef<any[]>;
};