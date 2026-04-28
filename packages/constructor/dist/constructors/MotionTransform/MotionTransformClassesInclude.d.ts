import { MotionTransformClassList } from './basicTypes';
/**
 * Helper class to access MotionTransform CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам MotionTransform по дизайну.
 */
export declare class MotionTransformClassesInclude {
    protected readonly design: string;
    /**
     * Constructor
     * @param design design name/ название дизайна
     */
    constructor(design: string);
    /**
     * Returns list of MotionTransform classes for the specified design.
     *
     * Возвращает список классов MotionTransform для указанного дизайна.
     */
    get(): MotionTransformClassList;
    /**
     * Returns an object with MotionTransform classes under classesMotionTransform key.
     *
     * Возвращает объект с классами MotionTransform под ключом classesMotionTransform.
     */
    getObject(): {
        classesMotionTransform: MotionTransformClassList;
    };
}
