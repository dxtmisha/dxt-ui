// md5:bb03d6270e59ddd36018ab77882ae3c6 true
import type { ConstrClass } from '@dxtmisha/functional';

/** Components required for tabs functionality. @keywords tabs, components */
export type TabsComponents = TabsNavigationComponentInclude & MotionAxisComponentInclude;

/** Available events for tabs component. @keywords tabs, emits, events */
export type TabsEmits = TabsNavigationEmits & MotionAxisEmitsInclude;

/** Exposed instance methods and properties for tabs. @keywords tabs, expose */
export interface TabsExpose extends EventClickExpose {}

/** Available slot definitions for tabs component. @keywords tabs, slots */
export type TabsSlots = MotionAxisSlots;

/** CSS class list structure for tabs styling. @keywords tabs, classes, styles */
export type TabsClasses = {
  main: ConstrClass;
  slide: string;
};