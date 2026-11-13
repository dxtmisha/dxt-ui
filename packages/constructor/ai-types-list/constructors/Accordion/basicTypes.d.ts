// md5:3511af2d4328d6c1732a67f0e0fdfbc0 true
import type { ConstrBind } from '@dxtmisha/functional';

export type AccordionComponentInclude = {
    accordion?: object;
};

export type AccordionPropsInclude<Accordion extends AccordionPropsBasic = AccordionPropsBasic> = {
    accordionAttrs?: ConstrBind<Accordion>;
};