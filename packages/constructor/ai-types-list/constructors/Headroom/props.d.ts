// md5:2dc27c4b45a6a5741150ab878c592a96 true
type HeadroomPropsToken = {
    disappears?: boolean;
};

export type HeadroomPropsBasic = HeadroomPropsInclude & {
    tag?: string;
};

export type HeadroomProps = HeadroomPropsBasic & HeadroomPropsToken;

/** Default headroom options. @keywords defaults headroom configuration */
export declare const defaultsHeadroom: {
    tag: string;
    transform: number;
};