// md5:d1a330f906913e94d79963de27d6a0aa true
import { ConstrClass } from '@dxtmisha/functional';

export type TabsComponents = TabsNavigationComponentInclude & MotionAxisComponentInclude;

export type TabsEmits = TabsNavigationEmits & MotionAxisEmitsInclude;

export interface TabsExpose extends EventClickExpose {
}

export type TabsSlots = MotionAxisSlots;

export type TabsClasses = {
    main: ConstrClass;
    slide: string;
};