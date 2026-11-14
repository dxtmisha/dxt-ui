// md5:cddcfce74886d938e8c18307414e8467 true
import { AiAbstract } from '@dxtmisha/scripts/ai';
import type { UiFigmaMessageTexts } from '../types/figmaTypes';

/** Processes Figma text nodes using AI. @keywords figma ai text nodes processor */
export declare class FigmaAiText {
    /** Initializes the Figma AI text processor. @keywords constructor init */
    constructor(ai: AiAbstract, data: UiFigmaMessageTexts);
    /** Processes texts and generates translations or enhancements via AI. @keywords process translate enhance text */
    make(): Promise<this>;
}