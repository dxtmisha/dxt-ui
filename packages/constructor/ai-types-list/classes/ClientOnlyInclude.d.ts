// md5:3bb0b98a4ce853eafb2bdcdaa03d751f true
import { Ref } from 'vue';

/** Manages client-only component rendering. @keywords client only render mount */
export declare class ClientOnlyInclude {
    /** Creates a client-only include instance. @keywords constructor init */
    constructor(props?: ClientOnlyPropsInclude | undefined);
    /** Checks if rendering is allowed on the client. @keywords check render ready */
    isRender(): boolean;
}