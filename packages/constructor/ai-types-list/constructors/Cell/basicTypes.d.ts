// md5:1dff1a30a51fd3c4a2e1b2d74c17832f true
export type CellClassesSub = {
    label: string;
    description: string;
    caption: string;
    trailing: string;
};
export type CellComponentInclude = {
    cell?: object;
};
export interface CellSlotsInclude extends LabelAlternativeSlots, DescriptionSlots, CaptionSlots {
    trailing?(props: CellClassesSub): any;
    body?(props: CellClassesSub): any;
}