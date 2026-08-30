// md5:b048f85380142ff436e33f6c3172a956 true
type ContainerPropsToken = {
    align?: 'left' | 'center' | 'right';
};
export type ContainerPropsBasic = AreaPropsInclude & {};
/** Container properties. @keywords container, props */
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken;
/** Default values for container properties. @keywords container, defaults */
export declare const defaultsContainer: {
    align: string;
    area: string;
};