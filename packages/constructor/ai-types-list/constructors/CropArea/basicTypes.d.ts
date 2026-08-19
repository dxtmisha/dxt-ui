// md5:7c755248917094bf52992289c2c082b4 true
import { ConstrBind } from '@dxtmisha/functional';

export type CropAreaCoordinator = [number, number, number, number];

export type CropAreaDirectionSingle = 'top' | 'right' | 'bottom' | 'left';

export type CropAreaDirection = CropAreaDirectionSingle | 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom' | 'center';

export type CropAreaPositionItem = {
    index: number;
    opposite: number;
};

export type CropAreaPositionMap = Record<CropAreaDirectionSingle, CropAreaPositionItem>;

export interface CropAreaEventParameters {
    direction: CropAreaDirection;
    value: number;
    coordinator: CropAreaCoordinator;
}

export type CropAreaComponentInclude = {
    cropArea?: object;
};

export type CropAreaPropsInclude<CropArea extends CropAreaPropsBasic = CropAreaPropsBasic> = {
    cropAreaAttrs?: ConstrBind<CropArea>;
};