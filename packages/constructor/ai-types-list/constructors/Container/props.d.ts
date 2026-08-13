// md5:c9e9c27de5b477227018fd39a8853519 true
type ContainerPropsToken = {
    align?: 'left' | 'center' | 'right';
};
export type ContainerPropsBasic = AreaPropsInclude & {};
/** Type describing incoming properties. @keywords container props */
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken;
/** Default value for property. @keywords defaults container */
export declare const defaultsContainer: {
    align: string;
    area: string;
};