// md5:f215b6df70c79fedf2d5a92285f8012d true
export type TextareaAutosizePropsToken = {
    autosize?: boolean;
};
export type TextareaAutosizePropsBasic = {
    /** Current text value */
    value?: string;
    /** Additional attributes for the textarea element */
    inputAttrs?: Record<string, any>;
};
/** Properties for the textarea autosize component @keywords textarea, autosize, props */
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & TextareaAutosizePropsToken;
/** Default properties for the textarea autosize component @keywords textarea, autosize, defaults */
export declare const defaultsTextareaAutosize: {
    autosize: boolean;
};