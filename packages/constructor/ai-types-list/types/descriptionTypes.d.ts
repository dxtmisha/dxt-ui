// md5:8bc0c7bda7e8c4a814c7df84986f8da2 true
export interface DescriptionSlots {
    /** Description slot. @keywords description slot render props */
    description?(props: any): any;
}

export type DescriptionProps = {
    description?: string | number;
    descriptionId?: string;
};