export interface LabelSlots {
    default?(props: any): any;
}
export interface LabelAlternativeSlots {
    label?(props: any): any;
}
export interface LabelProps {
    label?: string | number;
}
