// md5:a1ab950e16cd6d87038f674ea6f80a7b true
import type { ComputedRef } from 'vue';
import type { ListList, ListNames } from '@dxtmisha/functional';

/** Components required for List operation. @keywords list, component, include */
export type ListComponentInclude = {
  /** List component configuration. */
  list?: object;
};

/** Slot binding properties for List selection state. @keywords list, slots, selection */
export type ListSlotsInclude = {
  /** Whether at least one item is selected. */
  isSelected: ComputedRef<boolean>;
  /** List of selected elements. */
  selectedList: ComputedRef<ListList>;
  /** Names of selected elements. */
  selectedNames: ComputedRef<ListNames>;
  /** Values of selected elements. */
  selectedValues: ComputedRef<any[]>;
};