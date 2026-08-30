// md5:f1cfdcd4735f4ab3b8c74d1ca8b4c84c true
import type { ConstrBind } from '@dxtmisha/functional';

/** Coordinate array format [top, right, bottom, left] in percentages @keywords crop, coordinator, bounds */
export type CropAreaCoordinator = [number, number, number, number];

export type CropAreaDirectionSingle = 'top' | 'right' | 'bottom' | 'left';

export type CropAreaDirection = CropAreaDirectionSingle | 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom' | 'center';

export type CropAreaPositionItem = {
    index: number;
    opposite: number;
};

export type CropAreaPositionMap = Record<CropAreaDirectionSingle, CropAreaPositionItem>;

/** Event parameters for crop area manipulation @keywords crop, event, direction, coordinator */
export interface CropAreaEventParameters {
    direction: CropAreaDirection;
    value: number;
    coordinator: CropAreaCoordinator;
}

export type CropAreaComponentInclude = {
    cropArea?: object;
};

/** Props for embedding CropArea inside another component @keywords crop, props, include */
export type CropAreaPropsInclude<CropArea extends CropAreaPropsBasic = CropAreaPropsBasic> = {
    cropAreaAttrs?: ConstrBind<CropArea>;
};

export type CropAreaEmitsInclude = CropAreaEmits;