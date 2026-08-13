// md5:f215b6df70c79fedf2d5a92285f8012d true
export type TextareaAutosizePropsToken = {
    autosize?: boolean;
};
export type TextareaAutosizePropsBasic = {
    value?: string;
    inputAttrs?: Record<string, any>;
};
export type TextareaAutosizeProps = TextareaAutosizePropsBasic & TextareaAutosizePropsToken;
/** Default properties configuration for textarea autosize. @keywords defaults, textarea, autosize */
export declare const defaultsTextareaAutosize: {
    autosize: boolean;
};