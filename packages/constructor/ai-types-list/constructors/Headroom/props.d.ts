// md5:3c5c1816a0fc78f9f3ee5131b09ece2e true
type HeadroomPropsToken = {
    disappears?: boolean;
};

export type HeadroomPropsBasic = HeadroomPropsInclude & {
    tag?: string;
};

export type HeadroomProps = HeadroomPropsBasic & HeadroomPropsToken;

/** Default property values for Headroom. @keywords headroom, defaults, props */
export declare const defaultsHeadroom: {
    tag: string;
    transform: number;
};