import { MotionAxisStatus } from './MotionAxisStatus';
import { MotionAxisSelectedValue } from './basicTypes';
import { Ref } from 'vue';
export declare class MotionAxisSlides {
    protected readonly status: MotionAxisStatus;
    readonly item: Ref<string[], string[]>;
    constructor(status: MotionAxisStatus);
    get(): Ref<string[], string[]>;
    /**
     * Returns the selected slide.
     *
     * Возвращает выбранный слайд.
     * @param step change step number / номер шага изменения
     */
    getByIndex(step: number): string | undefined;
    findIndex(selected?: MotionAxisSelectedValue): number;
    add(key: string): this;
    reset(): void;
}
