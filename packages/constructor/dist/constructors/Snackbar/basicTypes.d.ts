import { ConstrBind } from '@dxtmisha/functional';
import { SnackbarItemPropsBasic } from '../SnackbarItem';
/** Type for the snackbar value item/ Тип для элемента значения снекбара */
export type SnackbarValue = {
    /** Custom component for the snackbar item/ Пользовательский компонент для уведомления */
    component?: any;
    /** Data properties for the snackbar item/ Параметры данных для уведомления */
    data?: ConstrBind<SnackbarItemPropsBasic>;
    /** Whether the notification has high priority/ Имеет ли уведомление высокий приоритет */
    highPriority?: boolean;
    /** Delay before auto-closing/ Задержка перед автоматическим закрытием */
    delay?: number;
    /** Text value of the notification/ Текстовое значение уведомления */
    value?: string;
};
/** Type for the list of snackbar values/ Тип для списка значений снекбара */
export type SnackbarList = SnackbarValue[];
