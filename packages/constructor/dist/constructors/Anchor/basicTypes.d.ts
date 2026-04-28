import { NumberOrString } from '@dxtmisha/functional';
/** Anchor scroll properties/ Свойства прокрутки якоря */
export type AnchorScrollProps = {
    /** Offset shift for the scroll position/ Смещение при прокрутке */
    shift?: NumberOrString;
    /** Transition animation behavior/ Поведение анимации перехода */
    behavior?: ScrollIntoViewOptions['behavior'];
    /** Vertical alignment of the element/ Вертикальное выравнивание элемента */
    block?: ScrollIntoViewOptions['block'];
    /** Horizontal alignment of the element/ Горизонтальное выравнивание элемента */
    inline?: ScrollIntoViewOptions['inline'];
};
