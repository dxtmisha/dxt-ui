// md5:598bb6cb27e5e1113f4557b83b09fce9 true
export interface PrefixSlots {
    /** Slot for prefix content. @keywords prefix, slot */
    prefix?(props: any): any;
}

export type PrefixProps = {
    /** Prefix text or numeric value. */
    prefix?: string | number;
    /** Unique identifier for the prefix element. */
    prefixId?: string;
};