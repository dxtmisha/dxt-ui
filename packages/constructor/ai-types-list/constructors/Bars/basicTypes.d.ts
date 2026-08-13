// md5:7ca0336cb9a2c3cdb0da54520d7d7287 true
import { ConstrBind } from '@dxtmisha/functional';

/** Component map for including the Bars component @keywords BarsComponentInclude, bars, component, map */
export type BarsComponentInclude = {
    bars?: object;
};

/** Available events for Bars @keywords BarsEmitsInclude, bars, events, click */
export type BarsEmitsInclude = {
    bars: EventClickEmits['click'];
    barsLite: EventClickEmits['clickLite'];
    barsBack: EventClickEmits['clickLite'];
};

/** Props used to include and configure the Bars component @keywords BarsPropsInclude, bars, props, configuration */
export type BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> = {
    barsLabel?: string | number;
    barsDescription?: string;
    barsBackHide?: boolean;
    barsHide?: boolean;
    barsList?: Bars['bars'];
    barsAttrs?: ConstrBind<Bars>;
};