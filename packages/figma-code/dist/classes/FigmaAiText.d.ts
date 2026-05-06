import { AiAbstract } from '@dxtmisha/scripts/ai';
import { UiFigmaMessageTexts } from '../types/figmaTypes';
export declare class FigmaAiText {
    protected readonly ai: AiAbstract;
    protected readonly data: UiFigmaMessageTexts;
    constructor(ai: AiAbstract, data: UiFigmaMessageTexts);
    make(): Promise<this>;
    protected makeImage(): this;
    protected initTexts(): string;
}
