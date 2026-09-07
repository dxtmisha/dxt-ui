// md5:54333206d64b0c593a118d6fc2620e71 true
import { AiAbstract } from '@dxtmisha/scripts/ai';

/** AI-driven text processor for Figma text node payloads. @keywords figma, ai, text, generator */
export declare class FigmaAiText {
	/** Initializes the Figma AI text processor with an AI instance and text data. @keywords constructor, init, figma, ai */
	constructor(ai: AiAbstract, data: UiFigmaMessageTexts);
	/** Executes AI processing on the associated Figma text data. @keywords make, execute, process, generate */
	make(): Promise<this>;
}