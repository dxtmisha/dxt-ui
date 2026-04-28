import { ConstrBind } from '@dxtmisha/functional';
import { ProgressPropsBasic } from './props';
/** Interface for describing which components need to be connected for Progress work/ Интерфейс для описания, какие компоненты надо подключить для работы Progress */
export type ProgressComponentInclude = {
    /** Progress component configuration/ Конфигурация компонента прогресса */
    progress?: object;
};
/** Interface for including Progress properties/ Интерфейс для включения свойств прогресса */
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
    /** Loading state or progress configuration/ Состояние загрузки или конфигурация прогресса */
    loading?: boolean | ConstrBind<Progress>;
};
