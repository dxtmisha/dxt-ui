// md5:aaa2649f2135be9746a65d678fce2fd5 true
import { ConstrBind } from '@dxtmisha/functional';

export type MotionAxisSelectedValue = string | undefined;

export type MotionAxisClassStatus = {
    main: string;
    previous: string;
    preparation: string;
    active: string;
};

export type MotionAxisEmitType = 'start' | 'end';

export type MotionAxisEmitOptions = {
    type: MotionAxisEmitType;
    selected?: MotionAxisSelectedValue;
    previous?: MotionAxisSelectedValue;
    preparation?: MotionAxisSelectedValue;
    active?: MotionAxisSelectedValue;
};

export type MotionAxisComponentInclude = {
    motionAxis?: object;
};

export type MotionAxisEmitsInclude = {
    motionAxis: [options: MotionAxisEmitOptions];
};

export type MotionAxisPropsInclude<MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = {
    selected?: MotionAxisSelectedValue;
    motionAxisAttrs?: ConstrBind<MotionAxis>;
};