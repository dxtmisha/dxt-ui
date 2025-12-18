import { ConstrBind } from '@dxtmisha/functional';
import { EventClickEmits } from '../../types/eventClickTypes';
import { BarsPropsBasic } from './props';
/**
 * Component map for including the Bars component/
 * Карта компонентов для подключения компонента Bars
 */
export type BarsComponentInclude = {
    bars?: object;
};
/** Available events for Bars/ Доступные события для Bars */
export type BarsEmitsInclude = {
    bars: EventClickEmits['click'];
    barsLite: EventClickEmits['clickLite'];
    barsBack: EventClickEmits['clickLite'];
};
/**
 * Props used to include and configure the Bars component/
 * Свойства для подключения и настройки компонента Bars
 */
export interface BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> {
    /** Bars label/ Метка панелей */
    barsLabel?: string | number;
    /** Bars description/ Описание панелей */
    barsDescription?: string;
    /** Hide back button/ Скрыть кнопку назад */
    barsBackHide?: boolean;
    /** Hide bars/ Скрыть панели */
    barsHide?: boolean;
    /** List of bar buttons/ Список кнопок панелей */
    barsList?: Bars['bars'];
    /** Additional attributes for Bars component/ Дополнительные атрибуты для компонента Bars */
    barsAttrs?: ConstrBind<Bars>;
}
