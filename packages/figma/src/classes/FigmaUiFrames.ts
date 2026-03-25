import type { UiFigmaFramesList } from '../types/framesTypes'

export class FigmaUiFrames {
    protected frames?: UiFigmaFramesList

    constructor(
        callback: (frames: UiFigmaFramesList) => void
    ) {

    }

    is(): boolean {
        return Boolean(
            this.frames
            && this.frames.length > 0
        )
    }

    get(): UiFigmaFramesList {
        return this.frames || []
    }

    protected update(frames: UiFigmaFramesList): void {
        this.frames = frames
    }
}
