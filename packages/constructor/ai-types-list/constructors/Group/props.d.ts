// md5:78533f669d1970fbf59122a58e353bb2 true
export type GroupPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
/** Type describing incoming properties. @keywords GroupProps properties input */
export type GroupProps = GroupPropsBasic & {};
/** Default value for property. @keywords defaultsGroup default values configuration */
export declare const defaultsGroup: {
    area: string;
    tag: string;
    tagHeader: string;
};