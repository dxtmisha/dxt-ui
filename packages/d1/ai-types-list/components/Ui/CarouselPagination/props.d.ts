// md5:0460fc94829ab9287e37283fe5131647 true
import { type CarouselPaginationPropsBasic } from '@dxtmisha/constructor/CarouselPagination';

export declare const propsValues: {
    type: string[];
    palette: string[];
};

type PropsToken = {
    type?: 'bullets' | 'dots' | 'lines' | 'fraction' | 'progressbar';
    vertical?: boolean;
    dynamic?: boolean;
    control?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

/** Carousel pagination incoming properties @keywords carousel, pagination, props */
export type CarouselPaginationProps = CarouselPaginationPropsBasic & PropsToken;

/** Default property values @keywords carousel, pagination, defaults */
export declare const defaults: object;