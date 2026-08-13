// md5:c16d17f77c894f4a7dbd4902610b70e7
import { ConstrBind } from '@dxtmisha/functional';
import { TextareaAutosizePropsBasic } from './props';
/**
 * Interface describing the set of components required for the TextareaAutosize include/
 * Интерфейс, описывающий набор компонентов, необходимых для подключения TextareaAutosize
 */
export type TextareaAutosizeComponentInclude = {
    /** TextareaAutosize component configuration/ Конфигурация компонента TextareaAutosize */
    textareaAutosize?: object;
};
/**
 * Interface describing the properties required for the TextareaAutosize include/
 * Интерфейс, описывающий свойства, необходимые для подключения TextareaAutosize
 */
export type TextareaAutosizePropsInclude<TextareaAutosize extends TextareaAutosizePropsBasic = TextareaAutosizePropsBasic> = {
    /** Bound attributes passed directly to the textarea element/ Привязанные атрибуты, передаваемые напрямую элементу textarea */
    textareaAttrs?: ConstrBind<TextareaAutosize>;
    /** Whether the textarea should automatically adjust its height/ Должна ли textarea автоматически изменять свою высоту */
    autosize?: boolean;
};
