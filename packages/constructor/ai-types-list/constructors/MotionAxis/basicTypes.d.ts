// md5:79ab289ebc1c69b6d6aaa5eb89e121ed true
import type { ConstrBind } from '@dxtmisha/functional';

export type MotionAxisSelectedValue = string | undefined;

/** CSS class status mapping for motion axis transition states. @keywords motion, axis, class, status */
export type MotionAxisClassStatus = {
  main: string;
  previous: string;
  preparation: string;
  active: string;
};

export type MotionAxisEmitType = 'start' | 'end';

/** Event payload options for motion axis state changes. @keywords motion, axis, emit, event */
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