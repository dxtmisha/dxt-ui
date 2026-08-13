// md5:c2713db5e7242a26ae2df1e22f4ab950 true
import { ConstrClass } from '@dxtmisha/functional';

export type ModalComponents = WindowComponentInclude & BarsComponentInclude & ActionsComponentInclude;

export type ModalEmits = WindowEmitsInclude & BarsEmitsInclude & ActionsEmitsInclude & ModelEmitsOpen;

export interface ModalExpose extends WindowExposeInclude {
}

export interface ModalSlots extends WindowSlots {
    /** Modal header slot @keywords header slot */
    header(props: WindowControlItem): any;
}

export type ModalClasses = {
    main: ConstrClass;
    title: string;
    header: string;
    body: string;
    footer: string;
};