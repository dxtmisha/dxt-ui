// md5:c5017b95f2cff4c2782dde5f294074ce
/**
 * Callback function executed during layout change update.
 *
 * Функция обратного вызова, выполняемая при обновлении макета.
 */
export type MotionFlipCallback = () => Promise<void> | void;
/**
 * Type describing element size and position rectangle.
 *
 * Тип, описывающий прямоугольник размера и положения элемента.
 */
export type MotionFlipElementSizeRect = {
    /** Top coordinate / Верхняя координата */
    top: number;
    /** Left coordinate / Левая координата */
    left: number;
    /** Width value / Значение ширины */
    width: number;
    /** Height value / Значение высоты */
    height: number;
};
