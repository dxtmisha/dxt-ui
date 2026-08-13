// md5:5fd98be4ebf63ae35c7667be0ff6adbc true
import { ShallowRef } from 'vue';
export declare class TextIncludeInstance {
    readonly list: ShallowRef<TextList, TextList>;
    /** Initialize global texts. @keywords init text list storage */
    initText(texts: TextList): void;
    /** Get text from global list by index. @keywords get global text index lookup */
    getGlobalText(index: TextIndex): string | undefined;
}