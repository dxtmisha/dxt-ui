// md5:6911a83a50befb958fe734377873c6bb true
import type { ConstrBind } from '@dxtmisha/functional';

/** Component mapping for integrating the Bars component. @keywords bars, component, include */
export type BarsComponentInclude = {
  bars?: object;
};

/** Event emitter types for Bars component interactions. @keywords bars, events, emits */
export type BarsEmitsInclude = {
  bars: EventClickEmits['click'];
  barsLite: EventClickEmits['clickLite'];
  barsBack: EventClickEmits['clickLite'];
};

/** Properties for integrating and configuring the Bars component. @keywords bars, props, config */
export type BarsPropsInclude<Bars extends BarsPropsBasic = BarsPropsBasic> = {
  barsLabel?: string | number;
  barsDescription?: string;
  barsBackHide?: boolean;
  barsHide?: boolean;
  barsList?: Bars['bars'];
  barsAttrs?: ConstrBind<Bars>;
};