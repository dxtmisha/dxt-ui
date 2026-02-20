import { ConstrBind } from '@dxtmisha/functional';
import { MotionAxisPropsBasic } from './props';
export type MotionAxisSelectedValue = string | undefined;
export type MotionAxisClassStatus = {
    /** Main class/Основной класс */
    main: string;
    /** Class for the previous element/Класс для предыдущего элемента */
    previous: string;
    /** Class for the element being prepared/Класс для подготавливаемого элемента */
    preparation: string;
    /** Class for the active element/Класс для активного элемента */
    active: string;
};
export type MotionAxisEmitType = 'start' | 'end';
export type MotionAxisEmitOptions = {
    /** Event type/Тип события */
    type: MotionAxisEmitType;
    /** Selected element/Выбранный элемент */
    selected?: MotionAxisSelectedValue;
    /** Previous element/Предыдущий элемент */
    previous?: MotionAxisSelectedValue;
    /** Element being prepared/Подготавливаемый элемент */
    preparation?: MotionAxisSelectedValue;
    /** Active element/Активный элемент */
    active?: MotionAxisSelectedValue;
};
export type MotionAxisComponentInclude = {
    /** Component object/Объект компонента */
    motionAxis?: object;
};
export type MotionAxisEmitsInclude = {
    /** Event emission/Вызов события */
    motionAxis: [options: MotionAxisEmitOptions];
};
export type MotionAxisPropsInclude<MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = {
    /** Selected element/Выбранный элемент */
    selected?: MotionAxisSelectedValue;
    /** Component attributes/Атрибуты компонента */
    motionAxisAttrs?: ConstrBind<MotionAxis>;
};
